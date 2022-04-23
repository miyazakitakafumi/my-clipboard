"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clipboard = require("clipboardy");
const makeOutput_1 = require("./helper/makeOutput");
const main = () => {
    const c = clipboard.readSync();
    const arr = c.split(/\r\n/);
    console.log(arr);
    const output = (0, makeOutput_1.default)(arr);
    console.log(output);
};
main();
