"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese el numero que desea multiplicar: ");
var num2 = rls.questionInt("Ingrese hasta que numero quiere multiplicar: ");
for (var i = 1; i <= num2; i++) {
    var result = num1 * i;
    console.log("".concat(num1, " * ").concat(i, " = ").concat(result));
}
