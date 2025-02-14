Input::
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

//// [/a/b/referenceFile1.ts]
/// <reference path="./moduleFile2.ts" />
export var x = Foo();

//// [/a/b/tsconfig.json]
{}


/a/lib/tsc.js --w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

● [96ma/b/referenceFile1.ts[0m:[93m1[0m:[93m22[0m TS6053
| /// <reference path="./moduleFile2.ts" />
  [91m                     ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔[0m
File '/a/b/moduleFile2.ts' not found.

● [96ma/b/referenceFile1.ts[0m:[93m2[0m:[93m16[0m TS2304
| export var x = Foo();
  [91m               ▔▔▔[0m
Cannot find name 'Foo'.

[[90m12:00:18 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/a/b/referenceFile1.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/referenceFile1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/referenceFile1.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/referencefile1.ts (used version)

WatchedFiles::
/a/b/tsconfig.json:
  {"fileName":"/a/b/tsconfig.json","pollingInterval":250}
/a/b/referencefile1.ts:
  {"fileName":"/a/b/referenceFile1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/b/modulefile2.ts:
  {"fileName":"/a/b/modulefile2.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"directoryName":"/a/b/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"directoryName":"/a/b","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a/b/referenceFile1.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
/// <reference path="./moduleFile2.ts" />
exports.x = Foo();



Change:: edit refereceFile1

Input::
//// [/a/b/referenceFile1.ts]
/// <reference path="./moduleFile2.ts" />
export var x = Foo();export var yy = Foo();


Output::
>> Screen clear
[[90m12:00:21 AM[0m] File change detected. Starting incremental compilation...

● [96ma/b/referenceFile1.ts[0m:[93m1[0m:[93m22[0m TS6053
| /// <reference path="./moduleFile2.ts" />
  [91m                     ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔[0m
File '/a/b/moduleFile2.ts' not found.

● [96ma/b/referenceFile1.ts[0m:[93m2[0m:[93m16[0m TS2304
| export var x = Foo();export var yy = Foo();
  [91m               ▔▔▔[0m
Cannot find name 'Foo'.

● [96ma/b/referenceFile1.ts[0m:[93m2[0m:[93m38[0m TS2304
| export var x = Foo();export var yy = Foo();
  [91m                                     ▔▔▔[0m
Cannot find name 'Foo'.

[[90m12:00:25 AM[0m] Found 3 errors. Watching for file changes.



Program root files: ["/a/b/referenceFile1.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/a/b/referenceFile1.ts

Semantic diagnostics in builder refreshed for::
/a/b/referenceFile1.ts

Shape signatures in builder refreshed for::
/a/b/referencefile1.ts (computed .d.ts)

WatchedFiles::
/a/b/tsconfig.json:
  {"fileName":"/a/b/tsconfig.json","pollingInterval":250}
/a/b/referencefile1.ts:
  {"fileName":"/a/b/referenceFile1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/b/modulefile2.ts:
  {"fileName":"/a/b/modulefile2.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"directoryName":"/a/b/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"directoryName":"/a/b","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a/b/referenceFile1.js]
"use strict";
exports.__esModule = true;
exports.yy = exports.x = void 0;
/// <reference path="./moduleFile2.ts" />
exports.x = Foo();
exports.yy = Foo();



Change:: create moduleFile2

Input::
//// [/a/b/moduleFile2.ts]
export var Foo4 = 10;


Output::
>> Screen clear
[[90m12:00:28 AM[0m] File change detected. Starting incremental compilation...

● [96ma/b/referenceFile1.ts[0m:[93m2[0m:[93m16[0m TS2304
| export var x = Foo();export var yy = Foo();
  [91m               ▔▔▔[0m
Cannot find name 'Foo'.

● [96ma/b/referenceFile1.ts[0m:[93m2[0m:[93m38[0m TS2304
| export var x = Foo();export var yy = Foo();
  [91m                                     ▔▔▔[0m
Cannot find name 'Foo'.

[[90m12:00:34 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/a/b/moduleFile2.ts","/a/b/referenceFile1.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile2.ts
/a/b/referenceFile1.ts

Semantic diagnostics in builder refreshed for::
/a/b/moduleFile2.ts
/a/b/referenceFile1.ts

Shape signatures in builder refreshed for::
/a/b/modulefile2.ts (computed .d.ts)
/a/b/referencefile1.ts (computed .d.ts)

WatchedFiles::
/a/b/tsconfig.json:
  {"fileName":"/a/b/tsconfig.json","pollingInterval":250}
/a/b/referencefile1.ts:
  {"fileName":"/a/b/referenceFile1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/b/modulefile2.ts:
  {"fileName":"/a/b/moduleFile2.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"directoryName":"/a/b/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"directoryName":"/a/b","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a/b/referenceFile1.js] file written with same contents
//// [/a/b/moduleFile2.js]
"use strict";
exports.__esModule = true;
exports.Foo4 = void 0;
exports.Foo4 = 10;


