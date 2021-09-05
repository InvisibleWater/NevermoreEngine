--- Wraps the wait()/delay() API in a promise
-- @module promiseWait

local require = require(script.Parent.loader).load(script)

local Promise = require("Promise")

return function(time)
	return Promise.new(function(resolve, _)
		delay(time, function()
			resolve()
		end)
	end)
end