/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + Addition
 *   - Subtraction
 *   * Multiplication
 *   / Division
 *   % Modulo
 *   ** Exponentiation
 *   sqrt Square root
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 *        node calculator.js sqrt <number>
 * Example: node calculator.js 10 + 5
 *          node calculator.js 9 ** 2
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
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Exponentiation: returns a raised to the power of b
function exponentiate(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a
// Throws an error if a is negative
function sqrt(a) {
  if (a < 0) throw new Error('Square root of negative number');
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, sqrt };

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  // Handle sqrt (single-operand operation)
  if (args[0] === 'sqrt') {
    if (args.length < 2) {
      console.error('Usage: node calculator.js sqrt <number>');
      process.exit(1);
    }
    const a = parseFloat(args[1]);
    if (isNaN(a)) {
      console.error('Error: Argument must be a valid number.');
      process.exit(1);
    }
    try {
      const result = sqrt(a);
      console.log(`sqrt(${a}) = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  // Handle two-operand operations
  const [arg1, operator, arg2] = args;

  if (!arg1 || !operator || !arg2) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: + - * / % **');
    console.error('Usage: node calculator.js sqrt <number>');
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
    case '%':
      try {
        result = modulo(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case '**':
      result = exponentiate(a, b);
      break;
    default:
      console.error(`Error: Unsupported operator '${operator}'. Use +, -, *, /, %, or **.`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
