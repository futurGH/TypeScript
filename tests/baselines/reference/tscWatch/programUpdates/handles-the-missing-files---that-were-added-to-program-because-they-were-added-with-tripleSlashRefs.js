Input::
//// [/a/b/commonFile1.ts]
/// <reference path="commonFile2.ts"/>
                    let x = y

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


/a/lib/tsc.js -w /a/b/commonFile1.ts
Output::
>> Screen clear
[[90m12:00:13 AM[0m] Starting compilation in watch mode...

● [96ma/b/commonFile1.ts[0m:[93m1[0m:[93m22[0m TS6053
| /// <reference path="commonFile2.ts"/>
  [91m                     ▔▔▔▔▔▔▔▔▔▔▔▔▔▔[0m
File '/a/b/commonFile2.ts' not found.

● [96ma/b/commonFile1.ts[0m:[93m2[0m:[93m29[0m TS2304
|                     let x = y
  [91m                            ▔[0m
Cannot find name 'y'.

[[90m12:00:16 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts"]
Program options: {"watch":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/commonfile1.ts (used version)

WatchedFiles::
/a/b/commonfile1.ts:
  {"fileName":"/a/b/commonFile1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/b/commonfile2.ts:
  {"fileName":"/a/b/commonfile2.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js]
/// <reference path="commonFile2.ts"/>
var x = y;



Change:: create file2

Input::
//// [/a/b/commonFile2.ts]
let y = 1


Output::
>> Screen clear
[[90m12:00:19 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:25 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts"]
Program options: {"watch":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile2.ts
/a/b/commonFile1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile2.ts
/a/b/commonFile1.ts

Shape signatures in builder refreshed for::
/a/b/commonfile2.ts (computed .d.ts)
/a/b/commonfile1.ts (computed .d.ts)

WatchedFiles::
/a/b/commonfile1.ts:
  {"fileName":"/a/b/commonFile1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/b/commonfile2.ts:
  {"fileName":"/a/b/commonFile2.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js] file written with same contents
//// [/a/b/commonFile2.js]
var y = 1;


