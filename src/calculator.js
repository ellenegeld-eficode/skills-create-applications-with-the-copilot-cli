/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + Addition
 *   - Subtraction
 *   * Multiplication
 *   / Division
 *   % Modulo
 *   ** Exponentiation (power)
 *   sqrt Square root (single operand)
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 *        node calculator.js sqrt <number>
 * Example: node calculator.js 10 + 5
 *          node calculator.js 10 % 3
 *          node calculator.js 2 ** 8
 *          node calculator.js sqrt 16
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

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [, , arg1, operator, arg2] = process.argv;

  // Handle sqrt as a single-operand command: node calculator.js sqrt <n>
  if (arg1 === 'sqrt') {
    const n = parseFloat(operator);
    if (isNaN(n)) {
      console.error('Usage: node calculator.js sqrt <number>');
      process.exit(1);
    }
    try {
      console.log(`sqrt(${n}) = ${squareRoot(n)}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  if (!arg1 || !operator || !arg2) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: + - * / % **');
    console.error('       or: node calculator.js sqrt <number>');
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
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
        result = divide(a, b);
        break;
      case '%':
        result = modulo(a, b);
        break;
      case '**':
        result = power(a, b);
        break;
      default:
        console.error(`Error: Unsupported operator '${operator}'. Use +, -, *, /, %, or **.`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
