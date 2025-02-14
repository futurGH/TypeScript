Input::
//// [/lib/lib.d.ts]
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

//// [/src/project/index.ts]
import { x } from "../utils";

//// [/src/project/tsconfig.json]
{"references":[{"path":"../utils"}]}

//// [/src/utils/index.ts]


//// [/src/utils/tsconfig.json]
{"compilerOptions":{"composite":true,"noEmit":true}}



Output::
/lib/tsc --p src/project
● [96msrc/project/tsconfig.json[0m:[93m1[0m:[93m16[0m TS6310
| {"references":[{"path":"../utils"}]}
  [91m               ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔[0m
Referenced project '/src/utils' may not disable emit.


Found 1 error in src/project/tsconfig.json:1

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/project/index.js]
"use strict";
exports.__esModule = true;


