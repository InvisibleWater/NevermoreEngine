"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75677],{45831:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new ScoredAction. Should not be called directly. See [ScoredActionService.GetScoredAction].","params":[],"returns":[{"desc":"","lua_type":"ScoredAction"}],"function_type":"static","source":{"line":23,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}},{"name":"IsPreferred","desc":"Returns whether the action is currently preferred","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":56,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}},{"name":"SetScore","desc":"Sets the score\\n\\n:::info\\nBig number is more important. At `-math.huge` we won\'t ever set preferred\\n:::","params":[{"name":"score","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","source":{"line":69,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}},{"name":"GetScore","desc":"Retrieves the score","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":79,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}},{"name":"PushPreferred","desc":"Pushes that we\'re preferred","params":[],"returns":[{"desc":"","lua_type":"MaidTask"}],"function_type":"method","source":{"line":87,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}}],"properties":[{"name":"PreferredChanged","desc":"","lua_type":"Signal<boolean>","source":{"line":37,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}},{"name":"Removing","desc":"","lua_type":"Signal<()>","source":{"line":43,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}}],"types":[],"name":"ScoredAction","desc":"An action that has a score, and may recieve priority from [ScoredActionService]","realm":["Client"],"source":{"line":7,"path":"src/scoredactionservice/src/Client/ScoredAction.lua"}}')}}]);