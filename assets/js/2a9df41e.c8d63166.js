"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22229],{27944:e=>{e.exports=JSON.parse('{"functions":[{"name":"Init","desc":"Initializes the PlayerDataStoreService. Should be done via [ServiceBag.Init].","params":[{"name":"serviceBag","desc":"","lua_type":"ServiceBag"}],"returns":[],"function_type":"method","source":{"line":22,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}},{"name":"Start","desc":"Initializes the datastore service for players. Should be done via [ServiceBag.Start].","params":[],"returns":[],"function_type":"method","source":{"line":40,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}},{"name":"SetDataStoreName","desc":"Sets the name for the datastore to retrieve.\\n\\n:::info\\nMust be done before start and after init.\\n:::","params":[{"name":"dataStoreName","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":54,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}},{"name":"SetDataStoreScope","desc":"Sets the scope for the datastore to retrieve.\\n\\n:::info\\nMust be done before start and after init.\\n:::","params":[{"name":"dataStoreScope","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":71,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}},{"name":"PromiseDataStore","desc":"Gets the datastore for the player.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"Promise<DataStore>"}],"function_type":"method","source":{"line":84,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}},{"name":"PromiseAddRemovingCallback","desc":"Adds a removing callback to the manager.","params":[{"name":"callback","desc":"May return a promise","lua_type":"function"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":96,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}},{"name":"PromiseManager","desc":"Retrieves the manager","params":[],"returns":[{"desc":"","lua_type":"PlayerDataStoreManager"}],"function_type":"method","source":{"line":107,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}}],"properties":[],"types":[],"name":"PlayerDataStoreService","desc":"Centralized service using serviceBag. This will let other packages work with a single player datastore service.","realm":["Server"],"source":{"line":7,"path":"src/datastore/src/Server/PlayerDataStoreService.lua"}}')}}]);