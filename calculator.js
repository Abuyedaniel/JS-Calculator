num1 = parseInt(prompt("Number 1: "));
opr = prompt("Operator: ");
num2 = parseInt(prompt("Number 2: "));
result = "";

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
