"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93389],{52500:e=>{e.exports=JSON.parse('{"functions":[{"name":"any","desc":"Returns the value of the first promise resolved","params":[{"name":"promises","desc":"","lua_type":"{ Promise<T> }"}],"returns":[{"desc":"Promise that resolves with first result","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":17,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"all","desc":"Executes all promises. If any fails, the result will be rejected. However, it yields until\\nevery promise is complete.\\n\\n:::warning\\nPassing in a spare array (i.e. {nil, promise}) will result in undefined behavior here.\\n:::","params":[{"name":"promises","desc":"","lua_type":"{ Promise<T> }"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":46,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"combine","desc":"Combines the result of promises together","params":[{"name":"stateTable","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Promise<any>"}],"function_type":"static","source":{"line":83,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"invert","desc":"Inverts the result of a promise, turning a resolved promise\\ninto a rejected one, and a rejected one into a resolved one.","params":[{"name":"promise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":122,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"fromSignal","desc":"Creates a promise from a signal","params":[{"name":"signal","desc":"","lua_type":"Signal<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":145,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"timeout","desc":"Creates a new promise from the given promise that will\\nreject after the given `timeoutTime`","params":[{"name":"timeoutTime","desc":"","lua_type":"number"},{"name":"fromPromise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":169,"path":"src/promise/src/Shared/PromiseUtils.lua"}}],"properties":[],"types":[],"name":"PromiseUtils","desc":"Utility methods for promise","source":{"line":5,"path":"src/promise/src/Shared/PromiseUtils.lua"}}')}}]);