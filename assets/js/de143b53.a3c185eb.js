"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77132],{86206:e=>{e.exports=JSON.parse('{"functions":[{"name":"Init","desc":"Initializes the service. Should be done via [ServiceBag].","params":[{"name":"_serviceBag","desc":"","lua_type":"ServiceBag"}],"returns":[],"function_type":"method","source":{"line":41,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"SetProviderFromConfig","desc":"Sets the provider from a config. See [PermissionProviderUtils.createGroupRankConfig]\\nand [PermissionProviderUtils.createSingleUserConfig].","params":[{"name":"config","desc":"","lua_type":"{ type: string }"}],"returns":[],"function_type":"method","source":{"line":59,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"Start","desc":"Starts the permission service. Should be done via [ServiceBag].","params":[],"returns":[],"function_type":"method","source":{"line":75,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"PromisePermissionProvider","desc":"Returns the permission provider","params":[],"returns":[{"desc":"","lua_type":"Promise<BasePermissionProvider>"}],"function_type":"method","source":{"line":89,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"PromiseIsAdmin","desc":"Returns whether the player is an admin.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":100,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"PromiseIsCreator","desc":"Returns whether the player is a creator.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":114,"path":"src/permissionprovider/src/Server/PermissionService.lua"}}],"properties":[],"types":[],"name":"PermissionService","desc":"Provides permissions for the game. See [BasePermissionProvider].\\n\\n:::tip\\nBe sure to initialize the [PermissionServiceClient] on the client.\\n:::\\n\\n```lua\\nlocal require = require(script.Parent.loader).load(script)\\n\\nlocal PermissionProvider = require(\\"PermissionProvider\\")\\nlocal PermissionProviderUtils = require(\\"PermissionProviderUtils\\")\\n\\nreturn PermissionProvider.new(PermissionProviderUtils.createGroupRankConfig({\\n  groupId = 8668163;\\n  minAdminRequiredRank = 250;\\n  minCreatorRequiredRank = 254;\\n}))\\n```","realm":["Server"],"source":{"line":24,"path":"src/permissionprovider/src/Server/PermissionService.lua"}}')}}]);