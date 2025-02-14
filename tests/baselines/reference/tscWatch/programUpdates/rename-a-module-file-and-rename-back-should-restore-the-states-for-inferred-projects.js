Input::
//// [/a/b/moduleFile.ts]
export function bar() { };

//// [/a/b/file1.ts]
import * as T from "./moduleFile"; T.bar();

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


/a/lib/tsc.js -w /a/b/file1.ts
Output::
>> Screen clear
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

[[90m12:00:20 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/file1.ts"]
Program options: {"watch":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile.ts
/a/b/file1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/moduleFile.ts
/a/b/file1.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/modulefile.ts (used version)
/a/b/file1.ts (used version)

WatchedFiles::
/a/b/file1.ts:
  {"fileName":"/a/b/file1.ts","pollingInterval":250}
/a/b/modulefile.ts:
  {"fileName":"/a/b/moduleFile.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/moduleFile.js]
"use strict";
exports.__esModule = true;
exports.bar = void 0;
function bar() { }
exports.bar = bar;
;


//// [/a/b/file1.js]
"use strict";
exports.__esModule = true;
var T = require("./moduleFile");
T.bar();



Change:: Rename moduleFile to moduleFile1

Input::
//// [/a/b/moduleFile1.ts]
export function bar() { };

//// [/a/b/moduleFile.ts] deleted
//// [/a/b/moduleFile.js] deleted

Output::
>> Screen clear
[[90m12:00:25 AM[0m] File change detected. Starting incremental compilation...

● [96ma/b/file1.ts[0m:[93m1[0m:[93m20[0m TS2307
| import * as T from "./moduleFile"; T.bar();
  [91m                   ▔▔▔▔▔▔▔▔▔▔▔▔▔▔[0m
Cannot find module './moduleFile' or its corresponding type declarations.

[[90m12:00:29 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/a/b/file1.ts"]
Program options: {"watch":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/file1.ts

Semantic diagnostics in builder refreshed for::
/a/b/file1.ts

Shape signatures in builder refreshed for::
/a/b/file1.ts (computed .d.ts)

WatchedFiles::
/a/b/file1.ts:
  {"fileName":"/a/b/file1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a:
  {"directoryName":"/a","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a/b/file1.js] file written with same contents

Change:: Rename moduleFile1 back to moduleFile

Input::
//// [/a/b/moduleFile.ts]
export function bar() { };

//// [/a/b/moduleFile1.ts] deleted

Output::
>> Screen clear
[[90m12:00:33 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:39 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/file1.ts"]
Program options: {"watch":true}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile.ts
/a/b/file1.ts

Semantic diagnostics in builder refreshed for::
/a/b/moduleFile.ts
/a/b/file1.ts

Shape signatures in builder refreshed for::
/a/b/modulefile.ts (computed .d.ts)
/a/b/file1.ts (computed .d.ts)

WatchedFiles::
/a/b/file1.ts:
  {"fileName":"/a/b/file1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/b/modulefile.ts:
  {"fileName":"/a/b/moduleFile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/file1.js] file written with same contents
//// [/a/b/moduleFile.js]
"use strict";
exports.__esModule = true;
exports.bar = void 0;
function bar() { }
exports.bar = bar;
;


