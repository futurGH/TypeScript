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

//// [/src/a.ts]
export class A {}


//// [/src/b.ts]
import {A} from 'a';
export const b = new A();

//// [/src/c.ts]


//// [/src/refs/a.d.ts]


//// [/src/tsconfig.a.json]
{"compilerOptions": {"composite": true}, "files": ["a.ts"]}


//// [/src/tsconfig.b.json]
{"compilerOptions":{"composite":true,"moduleResolution":"node"},"files":["b.ts"],"references":[{"path":"tsconfig.a.json"}]}

//// [/src/tsconfig.c.json]
{
    "files": [ "c.ts" ],
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@ref/*": [ "./refs/*" ]
        }
    },
    "references": [ { "path": "tsconfig.b.json" } ]
}




Output::
/lib/tsc --b /src/tsconfig.c.json --listFiles
/lib/lib.d.ts
/src/a.ts
● [96msrc/b.ts[0m:[93m1[0m:[93m17[0m TS2307
| import {A} from 'a';
  [91m                ▔▔▔[0m
Cannot find module 'a' or its corresponding type declarations.

/lib/lib.d.ts
/src/b.ts

Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/a.d.ts]
export declare class A {
}


//// [/src/a.js]
"use strict";
exports.__esModule = true;
exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;


//// [/src/tsconfig.a.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-8566332115-export class A {}\r\n"],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/src/tsconfig.a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./a.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "-8566332115-export class A {}\r\n",
        "signature": "-8566332115-export class A {}\r\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./a.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 716
}

//// [/src/tsconfig.b.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-17186364832-import {A} from 'a';\nexport const b = new A();"],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,[2,[{"file":"./b.ts","start":16,"length":3,"messageText":"Cannot find module 'a' or its corresponding type declarations.","category":1,"code":2307}]]],"affectedFilesPendingEmit":[[2,1]]},"version":"FakeTSVersion"}

//// [/src/tsconfig.b.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./b.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./b.ts": {
        "version": "-17186364832-import {A} from 'a';\nexport const b = new A();",
        "signature": "-17186364832-import {A} from 'a';\nexport const b = new A();"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      [
        "./b.ts",
        [
          {
            "file": "./b.ts",
            "start": 16,
            "length": 3,
            "messageText": "Cannot find module 'a' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./b.ts",
        "Full"
      ]
    ]
  },
  "version": "FakeTSVersion",
  "size": 926
}

