Input::
//// [/a.ts]
export class C {}

//// [/b.ts]
import {C} from './a'; import * as A from './A';

//// [/tsconfig.json]
{"compilerOptions":{}}

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
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

[[90m12:00:20 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a.ts","/b.ts","/a/lib/lib.d.ts"]
Program options: {"watch":true,"configFilePath":"/tsconfig.json"}
Program structureReused: Not
Program files::
/a.ts
/b.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/a.ts
/b.ts
/a/lib/lib.d.ts

Shape signatures in builder refreshed for::
/a.ts (used version)
/b.ts (used version)
/a/lib/lib.d.ts (used version)

WatchedFiles::
/tsconfig.json:
  {"fileName":"/tsconfig.json","pollingInterval":250}
/a.ts:
  {"fileName":"/a.ts","pollingInterval":250}
/b.ts:
  {"fileName":"/b.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/:
  {"directoryName":"","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a.js]
"use strict";
exports.__esModule = true;
exports.C = void 0;
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
exports.C = C;


//// [/b.js]
"use strict";
exports.__esModule = true;



Change:: Enable forceConsistentCasingInFileNames

Input::
//// [/tsconfig.json]
{"compilerOptions":{"forceConsistentCasingInFileNames":true}}


Output::
>> Screen clear
[[90m12:00:24 AM[0m] File change detected. Starting incremental compilation...

● [96mb.ts[0m:[93m1[0m:[93m43[0m TS1149
| import {C} from './a'; import * as A from './A';
  [91m                                          ▔▔▔▔▔[0m
File name '/A.ts' differs from already included file name '/a.ts' only in casing.
  The file is in the program because:
    Matched by include pattern '**/*' in '/tsconfig.json'
    Imported via './a' from file '/b.ts'
    Imported via './A' from file '/b.ts'

File is included via import here.
[96mb.ts[0m:[93m1[0m:[93m17[0m

| import {C} from './a'; import * as A from './A';
  [96m                ▔▔▔▔▔[0m
[[90m12:00:25 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/a.ts","/b.ts","/a/lib/lib.d.ts"]
Program options: {"forceConsistentCasingInFileNames":true,"watch":true,"configFilePath":"/tsconfig.json"}
Program structureReused: Not
Program files::
/a.ts
/b.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/tsconfig.json:
  {"fileName":"/tsconfig.json","pollingInterval":250}
/a.ts:
  {"fileName":"/a.ts","pollingInterval":250}
/b.ts:
  {"fileName":"/b.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/:
  {"directoryName":"","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

