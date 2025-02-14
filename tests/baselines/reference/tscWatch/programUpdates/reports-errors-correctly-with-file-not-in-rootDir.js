Input::
//// [/user/username/projects/myproject/a.ts]
import { x } from "../b";

//// [/user/username/projects/b.ts]
export const x = 10;

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"rootDir":".","outDir":"lib"}}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

● [96ma.ts[0m:[93m1[0m:[93m19[0m TS6059
| import { x } from "../b";
  [91m                  ▔▔▔▔▔▔[0m
File '/user/username/projects/b.ts' is not under 'rootDir' '/user/username/projects/myproject'. 'rootDir' is expected to contain all source files.

[[90m12:00:31 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"rootDir":"/user/username/projects/myproject","outDir":"/user/username/projects/myproject/lib","watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/b.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/b.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/b.ts (used version)
/user/username/projects/myproject/a.ts (used version)

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"fileName":"/user/username/projects/myproject/a.ts","pollingInterval":250}
/user/username/projects/b.ts:
  {"fileName":"/user/username/projects/b.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/b.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/user/username/projects/myproject/lib/a.js]
"use strict";
exports.__esModule = true;



Change:: Make changes to file a

Input::
//// [/user/username/projects/myproject/a.ts]


import { x } from "../b";


Output::
>> Screen clear
[[90m12:00:35 AM[0m] File change detected. Starting incremental compilation...

● [96ma.ts[0m:[93m3[0m:[93m19[0m TS6059
| import { x } from "../b";
  [91m                  ▔▔▔▔▔▔[0m
File '/user/username/projects/b.ts' is not under 'rootDir' '/user/username/projects/myproject'. 'rootDir' is expected to contain all source files.

[[90m12:00:39 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"rootDir":"/user/username/projects/myproject","outDir":"/user/username/projects/myproject/lib","watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/b.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"fileName":"/user/username/projects/myproject/a.ts","pollingInterval":250}
/user/username/projects/b.ts:
  {"fileName":"/user/username/projects/b.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/lib/a.js] file written with same contents
