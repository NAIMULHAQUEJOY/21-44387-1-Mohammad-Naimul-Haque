"use strict";
// Modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcs = exports.greeting = void 0;
exports.greeting = "Hello, World";
exports.funcs = {
    add: function (a, b) { return a + b; },
    sub: function (a, b) { return a - b; },
};
var moduleA_1 = require("./moduleA");
console.log(exports.greeting);
console.log(exports.funcs.add(1, 2));
console.log(exports.funcs.sub(1, 2));
