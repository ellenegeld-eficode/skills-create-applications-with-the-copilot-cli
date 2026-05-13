/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + Addition
 *   - Subtraction
 *   * Multiplication
 *   / Division
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [, , arg1, operator, arg2] = process.argv;

  if (!arg1 || !operator || !arg2) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: + - * /');
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
  }

  let result;
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    default:
      console.error(`Error: Unsupported operator '${operator}'. Use +, -, *, or /.`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
