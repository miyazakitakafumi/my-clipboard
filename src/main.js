"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clipboard = require("clipboardy");
const makeOutput_js_1 = require("./helper/makeOutput.js");
const main = () => {
    const c = clipboard.readSync();
    const arr = c.split(/\r\n/);
    console.log(arr);
    const output = (0, makeOutput_js_1.default)(arr);
    console.log(output);
};
main();
