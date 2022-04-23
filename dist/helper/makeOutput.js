"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeOutput = (arr) => arr.reduce((prev, current, index) => {
    if ((index + 1) % 2 === 0) {
        return `${prev}${current}\r\n`;
    }
    else {
        return `${prev}${current},`;
    }
}, '');
exports.default = makeOutput;
