Input::
//// [/a/app.ts]
let x = 1

//// [/a/tsconfig.json]
{"compiler":{},"files":[]}

//// [/a/node_modules/@types/typings/index.d.ts]
export * from "./lib"

//// [/a/node_modules/@types/typings/lib.d.ts]
export const x: number

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


/a/lib/tsc.js -w -p /a/tsconfig.json
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

● [96mtsconfig.json[0m:[93m1[0m:[93m24[0m TS18002
| {"compiler":{},"files":[]}
  [91m                       ▔▔[0m
The 'files' list in config file '/a/tsconfig.json' is empty.

[[90m12:00:24 AM[0m] Found 1 error. Watching for file changes.



Program root files: []
Program options: {"watch":true,"project":"/a/tsconfig.json","configFilePath":"/a/tsconfig.json"}
Program structureReused: Not
Program files::

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

WatchedFiles::
/a/tsconfig.json:
  {"fileName":"/a/tsconfig.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/node_modules/@types:
  {"directoryName":"/a/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

