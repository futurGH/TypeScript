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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/users/username/projects/project/node_modules/classnames/index.d.ts]
export interface Result {} export default function classNames(): Result;

//// [/users/username/projects/project/src/types/classnames.d.ts]
export {}; declare module "classnames" { interface Result { foo } }

//// [/users/username/projects/project/src/index.ts]
import classNames from "classnames"; classNames().foo;

//// [/users/username/projects/project/tsconfig.json]
{"compilerOptions":{"module":"commonjs","incremental":true}}


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90m12:00:33 AM[0m] Starting compilation in watch mode...

[[90m12:00:38 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/users/username/projects/project/src/index.ts","/users/username/projects/project/src/types/classnames.d.ts"]
Program options: {"module":1,"incremental":true,"watch":true,"configFilePath":"/users/username/projects/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/node_modules/classnames/index.d.ts
/users/username/projects/project/src/index.ts
/users/username/projects/project/src/types/classnames.d.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/users/username/projects/project/node_modules/classnames/index.d.ts
/users/username/projects/project/src/index.ts
/users/username/projects/project/src/types/classnames.d.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/users/username/projects/project/node_modules/classnames/index.d.ts (used version)
/users/username/projects/project/src/index.ts (used version)
/users/username/projects/project/src/types/classnames.d.ts (used version)

WatchedFiles::
/users/username/projects/project/tsconfig.json:
  {"fileName":"/users/username/projects/project/tsconfig.json","pollingInterval":250}
/users/username/projects/project/src/index.ts:
  {"fileName":"/users/username/projects/project/src/index.ts","pollingInterval":250}
/users/username/projects/project/node_modules/classnames/index.d.ts:
  {"fileName":"/users/username/projects/project/node_modules/classnames/index.d.ts","pollingInterval":250}
/users/username/projects/project/src/types/classnames.d.ts:
  {"fileName":"/users/username/projects/project/src/types/classnames.d.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/users/username/projects/project/node_modules/classnames/package.json:
  {"fileName":"/users/username/projects/project/node_modules/classnames/package.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/users/username/projects/project/src:
  {"directoryName":"/users/username/projects/project/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project/node_modules:
  {"directoryName":"/users/username/projects/project/node_modules","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project/node_modules/@types:
  {"directoryName":"/users/username/projects/project/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project:
  {"directoryName":"/users/username/projects/project","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/users/username/projects/project/src/index.js]
"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
(0, classnames_1["default"])().foo;


//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./node_modules/classnames/index.d.ts","./src/index.ts","./src/types/classnames.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"1239706283-export interface Result {} export default function classNames(): Result;","-5756287633-import classNames from \"classnames\"; classNames().foo;","-16510108606-export {}; declare module \"classnames\" { interface Result { foo } }"],"options":{"module":1},"fileIdsList":[[2,4],[2]],"referencedMap":[[3,1],[4,2]],"exportedModulesMap":[[3,1],[4,2]],"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/users/username/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./node_modules/classnames/index.d.ts",
      "./src/index.ts",
      "./src/types/classnames.d.ts"
    ],
    "fileNamesList": [
      [
        "./node_modules/classnames/index.d.ts",
        "./src/types/classnames.d.ts"
      ],
      [
        "./node_modules/classnames/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/classnames/index.d.ts": {
        "version": "1239706283-export interface Result {} export default function classNames(): Result;",
        "signature": "1239706283-export interface Result {} export default function classNames(): Result;"
      },
      "./src/index.ts": {
        "version": "-5756287633-import classNames from \"classnames\"; classNames().foo;",
        "signature": "-5756287633-import classNames from \"classnames\"; classNames().foo;"
      },
      "./src/types/classnames.d.ts": {
        "version": "-16510108606-export {}; declare module \"classnames\" { interface Result { foo } }",
        "signature": "-16510108606-export {}; declare module \"classnames\" { interface Result { foo } }"
      }
    },
    "options": {
      "module": 1
    },
    "referencedMap": {
      "./src/index.ts": [
        "./node_modules/classnames/index.d.ts",
        "./src/types/classnames.d.ts"
      ],
      "./src/types/classnames.d.ts": [
        "./node_modules/classnames/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/index.ts": [
        "./node_modules/classnames/index.d.ts",
        "./src/types/classnames.d.ts"
      ],
      "./src/types/classnames.d.ts": [
        "./node_modules/classnames/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./node_modules/classnames/index.d.ts",
      "./src/index.ts",
      "./src/types/classnames.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1056
}


Change::

Input::
//// [/users/username/projects/project/src/types/classnames.d.ts]
export {}; declare module "classnames" { interface Result {} }


Output::
>> Screen clear
[[90m12:00:44 AM[0m] Starting compilation in watch mode...

● [96msrc/index.ts[0m:[93m1[0m:[93m51[0m TS2339
| import classNames from "classnames"; classNames().foo;
  [91m                                                  ▔▔▔[0m
Property 'foo' does not exist on type 'Result'.

[[90m12:00:51 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/users/username/projects/project/src/index.ts","/users/username/projects/project/src/types/classnames.d.ts"]
Program options: {"module":1,"incremental":true,"watch":true,"configFilePath":"/users/username/projects/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/node_modules/classnames/index.d.ts
/users/username/projects/project/src/index.ts
/users/username/projects/project/src/types/classnames.d.ts

Semantic diagnostics in builder refreshed for::
/users/username/projects/project/src/index.ts
/users/username/projects/project/src/types/classnames.d.ts

Shape signatures in builder refreshed for::
/users/username/projects/project/src/types/classnames.d.ts (used version)
/users/username/projects/project/src/index.ts (computed .d.ts)

WatchedFiles::
/users/username/projects/project/tsconfig.json:
  {"fileName":"/users/username/projects/project/tsconfig.json","pollingInterval":250}
/users/username/projects/project/src/index.ts:
  {"fileName":"/users/username/projects/project/src/index.ts","pollingInterval":250}
/users/username/projects/project/node_modules/classnames/index.d.ts:
  {"fileName":"/users/username/projects/project/node_modules/classnames/index.d.ts","pollingInterval":250}
/users/username/projects/project/src/types/classnames.d.ts:
  {"fileName":"/users/username/projects/project/src/types/classnames.d.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/users/username/projects/project/node_modules/classnames/package.json:
  {"fileName":"/users/username/projects/project/node_modules/classnames/package.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/users/username/projects/project/src:
  {"directoryName":"/users/username/projects/project/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project/node_modules:
  {"directoryName":"/users/username/projects/project/node_modules","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project/node_modules/@types:
  {"directoryName":"/users/username/projects/project/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project:
  {"directoryName":"/users/username/projects/project","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/users/username/projects/project/src/index.js] file written with same contents
//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./node_modules/classnames/index.d.ts","./src/index.ts","./src/types/classnames.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"1239706283-export interface Result {} export default function classNames(): Result;",{"version":"-5756287633-import classNames from \"classnames\"; classNames().foo;","signature":"-3531856636-export {};\n"},"-14890340642-export {}; declare module \"classnames\" { interface Result {} }"],"options":{"module":1},"fileIdsList":[[2,4],[2]],"referencedMap":[[3,1],[4,2]],"exportedModulesMap":[[4,2]],"semanticDiagnosticsPerFile":[1,2,[3,[{"file":"./src/index.ts","start":50,"length":3,"code":2339,"category":1,"messageText":"Property 'foo' does not exist on type 'Result'."}]],4]},"version":"FakeTSVersion"}

//// [/users/username/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./node_modules/classnames/index.d.ts",
      "./src/index.ts",
      "./src/types/classnames.d.ts"
    ],
    "fileNamesList": [
      [
        "./node_modules/classnames/index.d.ts",
        "./src/types/classnames.d.ts"
      ],
      [
        "./node_modules/classnames/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/classnames/index.d.ts": {
        "version": "1239706283-export interface Result {} export default function classNames(): Result;",
        "signature": "1239706283-export interface Result {} export default function classNames(): Result;"
      },
      "./src/index.ts": {
        "version": "-5756287633-import classNames from \"classnames\"; classNames().foo;",
        "signature": "-3531856636-export {};\n"
      },
      "./src/types/classnames.d.ts": {
        "version": "-14890340642-export {}; declare module \"classnames\" { interface Result {} }",
        "signature": "-14890340642-export {}; declare module \"classnames\" { interface Result {} }"
      }
    },
    "options": {
      "module": 1
    },
    "referencedMap": {
      "./src/index.ts": [
        "./node_modules/classnames/index.d.ts",
        "./src/types/classnames.d.ts"
      ],
      "./src/types/classnames.d.ts": [
        "./node_modules/classnames/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/types/classnames.d.ts": [
        "./node_modules/classnames/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./node_modules/classnames/index.d.ts",
      [
        "./src/index.ts",
        [
          {
            "file": "./src/index.ts",
            "start": 50,
            "length": 3,
            "code": 2339,
            "category": 1,
            "messageText": "Property 'foo' does not exist on type 'Result'."
          }
        ]
      ],
      "./src/types/classnames.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1237
}

