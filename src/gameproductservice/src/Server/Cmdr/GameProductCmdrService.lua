--[=[
	@class GameProductCmdrService
]=]

local require = require(script.Parent.loader).load(script)

local PlayerUtils = require("PlayerUtils")
local GameConfigAssetTypes = require("GameConfigAssetTypes")

local GameProductCmdrService = {}
GameProductCmdrService.ServiceName = "GameProductCmdrService"

function GameProductCmdrService:Init(serviceBag)
	assert(not self._serviceBag, "Already initialized")
	self._serviceBag = assert(serviceBag, "No serviceBag")

	self._cmdrService = self._serviceBag:GetService(require("CmdrService"))
	self._gameProductService = self._serviceBag:GetService(require("GameProductService"))
end

function GameProductCmdrService:Start()
	self:_registerCommands()
end

function GameProductCmdrService:_registerCommands()
	self._cmdrService:RegisterCommand({
		Name = "prompt-product";
		Description = "Prompts the player to make a product purchase game-product-service.";
		Group = "GameConfig";
		Args = {
			{
				Name = "Player";
				Type = "players";
				Description = "The player to prompt.";
			},
			{
				Name = "Product";
				Type = "productId";
				Description = "The Product to prompt.";
			},
		};
	}, function(_context, players, productId)
		local givenTo = {}

		for _, player in pairs(players) do
			self._gameProductService:PromisePlayerPromptPurchase(player, GameConfigAssetTypes.PRODUCT, productId)
				:Then(function(isPurchased)
					print(string.format("User %s product purchase done. isPurchased: %s",
						PlayerUtils.formatName(player), tostring(isPurchased)))
				end)

			table.insert(givenTo, string.format("%s prompted purchase of %d", PlayerUtils.formatName(player), productId))
		end

		return string.format("Prompted: %s", table.concat(givenTo, ", "))
	end)

	self._cmdrService:RegisterCommand({
		Name = "prompt-pass";
		Description = "Prompts the player to make a gamepass purchase.";
		Group = "GameConfig";
		Args = {
			{
				Name = "Player";
				Type = "players";
				Description = "The player to prompt.";
			},
			{
				Name = "GamePass";
				Type = "passId";
				Description = "The gamepass to prompt.";
			},
		};
	}, function(_context, players, gamePassId)
		local givenTo = {}

		for _, player in pairs(players) do
			self._gameProductService:PromisePlayerPromptPurchase(player, GameConfigAssetTypes.PASS, gamePassId)
				:Then(function(isPurchased)
					print(string.format("User %s pass prompt done. isPurchased: %s",
						PlayerUtils.formatName(player), tostring(isPurchased)))
				end)

			table.insert(givenTo, string.format("%s prompted purchase of %d", PlayerUtils.formatName(player), gamePassId))
		end

		return string.format("Prompted: %s", table.concat(givenTo, ", "))
	end)

	self._cmdrService:RegisterCommand({
		Name = "prompt-asset";
		Description = "Prompts the player to make an asset purchase.";
		Group = "GameConfig";
		Args = {
			{
				Name = "Player";
				Type = "players";
				Description = "The player to prompt.";
			},
			{
				Name = "Asset";
				Type = "assetId";
				Description = "The asset to prompt.";
			},
		};
	}, function(_context, players, assetId)
		local givenTo = {}

		for _, player in pairs(players) do
			self._gameProductService:PromisePlayerPromptPurchase(player, GameConfigAssetTypes.ASSET, assetId)
				:Then(function(isPurchased)
					print(string.format("User %s asset prompt done. isPurchased: %s",
						PlayerUtils.formatName(player), tostring(isPurchased)))
				end)

			table.insert(givenTo, string.format("%s prompted purchase of %d", PlayerUtils.formatName(player), assetId))
		end

		return string.format("Prompted: %s", table.concat(givenTo, ", "))
	end)

	self._cmdrService:RegisterCommand({
		Name = "prompt-bundle";
		Description = "Prompts the player to make a bundle purchase.";
		Group = "GameConfig";
		Args = {
			{
				Name = "Player";
				Type = "players";
				Description = "The player to prompt.";
			},
			{
				Name = "Bundle";
				Type = "bundleId";
				Description = "The asset to prompt.";
			},
		};
	}, function(_context, players, bundleId)
		local givenTo = {}

		for _, player in pairs(players) do
			self._gameProductService:PromisePlayerPromptPurchase(player, GameConfigAssetTypes.BUNDLE, bundleId)
				:Then(function(isPurchased)
					print(string.format("User %s bundle prompt done. isPurchased: %s",
						PlayerUtils.formatName(player), tostring(isPurchased)))
				end)
			table.insert(givenTo, string.format("%s prompted purchase of %d", PlayerUtils.formatName(player), bundleId))
		end

		return string.format("Prompted: %s", table.concat(givenTo, ", "))
	end)

end

return GameProductCmdrService