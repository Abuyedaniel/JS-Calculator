"use strict"
var num1 = parseInt(prompt("Number 1: "));
var opr = prompt("Operator: ");
var num2 = parseInt(prompt("Number 2: "));
var result = "";

if (opr == "+") {
  result = num1 + num2;
} else if (opr == "-") {
    result = num1 - num2;
} else if (opr == "*") {
    result = num1 * num2;
} else if (opr == "/") {
    result = num1 / num2;
}
alert (result)
