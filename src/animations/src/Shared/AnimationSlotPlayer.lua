--[=[
	@class AnimationSlotPlayer
]=]

local require = require(script.Parent.loader).load(script)

local BaseObject = require("BaseObject")
local AnimationUtils = require("AnimationUtils")
local ValueObject = require("ValueObject")
local Maid = require("Maid")
local EnumUtils = require("EnumUtils")
local RbxAssetUtils = require("RbxAssetUtils")

local AnimationSlotPlayer = setmetatable({}, BaseObject)
AnimationSlotPlayer.ClassName = "AnimationSlotPlayer"
AnimationSlotPlayer.__index = AnimationSlotPlayer

function AnimationSlotPlayer.new(animationTarget)
	local self = setmetatable(BaseObject.new(), AnimationSlotPlayer)

	self._animationTarget = self._maid:Add(ValueObject.new(nil))
	self._defaultFadeTime = self._maid:Add(ValueObject.new(0.1, "number"))
	self._defaultAnimationPriority = self._maid:Add(ValueObject.new(nil))
	self._currentAnimationTrackData = self._maid:Add(ValueObject.new(nil))

	if animationTarget then
		self:SetAnimationTarget(animationTarget)
	end

	return self
end

function AnimationSlotPlayer:SetDefaultFadeTime(defaultFadeTime)
	self._defaultFadeTime.Value = defaultFadeTime
end

function AnimationSlotPlayer:SetDefaultAnimationPriority(defaultAnimationPriority)
	assert(EnumUtils.isOfType(Enum.AnimationPriority, defaultAnimationPriority) or defaultAnimationPriority == nil, "Bad defaultAnimationPriority")

	self._defaultAnimationPriority.Value = defaultAnimationPriority
end

function AnimationSlotPlayer:SetAnimationTarget(animationTarget)
	self._animationTarget:Mount(animationTarget)
end

function AnimationSlotPlayer:AdjustSpeed(id, speed)
	assert(RbxAssetUtils.isConvertableToRbxAsset(id), "Bad id")
	assert(type(speed) == "number", "Bad number")

	local animationId = RbxAssetUtils.toRbxAssetId(id)

	local topMaid = Maid.new()

	topMaid:GiveTask(self._currentAnimationTrackData:ObserveBrio(function(data)
		return data and data.animationId == animationId
	end):Subscribe(function(brio)
		if brio:IsDead() then
			return
		end

		local data = brio:GetValue()
		local maid = brio:ToMaid()

		data.track:AdjustSpeed(speed)

		-- TODO: Use stack here?
		-- TODO: Probably need rogue property mechanisms
		maid:GiveTask(function()
			if math.abs(data.track.Speed - speed) <= 1e-3 then
				data.track:AdjustSpeed(data.originalSpeed)
			end
		end)
	end))

	-- TODO: Probably per-a-track instead of global like this
	self._maid._currentSpeedAdjustment = topMaid

	return function()
		if self._maid._currentSpeedAdjustment == topMaid then
			self._maid._currentSpeedAdjustment = nil
		end
	end
end

function AnimationSlotPlayer:Play(id, fadeTime, weight, speed, priority)
	fadeTime = fadeTime or self._defaultFadeTime.Value
	priority = priority or self._defaultAnimationPriority.Value
	weight = weight or 1 -- We need to explicitly adjust the weight here

	local topMaid = Maid.new()

	local animationId = RbxAssetUtils.toRbxAssetId(id)

	topMaid:GiveTask(self._animationTarget:ObserveBrio(function(target)
		return target ~= nil
	end):Subscribe(function(brio)
		if brio:IsDead() then
			return
		end

		local animationTarget = brio:GetValue()
		local maid = brio:ToMaid()

		local track = AnimationUtils.playAnimation(animationTarget, animationId, fadeTime, weight, speed, priority)
		if track then
			local data = {
				animationId = animationId;
				track = track;
				originalSpeed = speed;
				originalWeight = weight;
				originalPriority = priority;
			}

			self._currentAnimationTrackData.Value = data
			maid:GiveTask(function()
				if self._currentAnimationTrackData.Value == data then
					self._currentAnimationTrackData.Value = nil
				end
			end)

			maid:GiveTask(function()
				track:AdjustWeight(0, fadeTime or self._defaultFadeTime.Value)
			end)
		else
			warn("[AnimationSlotPlayer] - Failed to get animation to play")
		end
	end))

	self._maid._current = topMaid

	return function()
		if self._maid._current == topMaid then
			self._maid._current = nil
		end
	end
end

function AnimationSlotPlayer:Stop()
	self._maid._current = nil
end

return AnimationSlotPlayer