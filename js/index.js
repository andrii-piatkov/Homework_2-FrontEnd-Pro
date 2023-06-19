const operation = prompt("What do you want to do? (add, sub, multi, div):");
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
let result;
let operator;

if (operation === "+") {
  result = num1 + num2;
  operator = "+";
} else if (operation === "-") {
  result = num1 - num2;
  operator = "-";
} else if (operation === "*") {
  result = num1 * num2;
  operator = "*";
} else if (operation === "/") {
  result = num1 / num2;
  operator = "/";
}

alert(`${num1} ${operator} ${num2} = ${result}`);
