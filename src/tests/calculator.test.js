/**
 * Unit tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   + Addition
 *   - Subtraction
 *   * Multiplication
 *   / Division
 *   % Modulo
 *   ** Exponentiation
 *   sqrt Square root
 *
 * Includes edge cases such as division by zero, negatives, decimals, and
 * square root of negative numbers.
 */

const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds a positive and a negative number', () => expect(add(10, -3)).toBe(7));
  test('adds zero to a number', () => expect(add(7, 0)).toBe(7));
  test('adds decimal numbers', () => expect(add(1.5, 2.5)).toBeCloseTo(4));
});

// --- Subtraction ---
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('subtracts a larger number from a smaller (negative result)', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracts zero from a number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.5)).toBeCloseTo(3));
});

// --- Multiplication ---
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and a negative number', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10));
});

// --- Division ---
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides positive numbers', () => expect(divide(100, 4)).toBe(25));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides negative numbers', () => expect(divide(-12, -3)).toBe(4));
  test('divides a negative by a positive', () => expect(divide(-15, 5)).toBe(-3));
  test('divides zero by a number', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// --- Modulo ---
describe('modulo', () => {
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('returns zero when evenly divisible', () => expect(modulo(12, 4)).toBe(0));
  test('modulo with negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
  test('modulo with negative divisor', () => expect(modulo(7, -3)).toBe(1));
  test('modulo of zero', () => expect(modulo(0, 5)).toBe(0));
  test('modulo with decimal numbers', () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero');
  });
});

// --- Exponentiation ---
describe('exponentiate', () => {
  test('2 ** 3 = 8', () => expect(exponentiate(2, 3)).toBe(8));
  test('5 ** 2 = 25', () => expect(exponentiate(5, 2)).toBe(25));
  test('any number to the power of 0 is 1', () => expect(exponentiate(7, 0)).toBe(1));
  test('any number to the power of 1 is itself', () => expect(exponentiate(9, 1)).toBe(9));
  test('0 to any positive power is 0', () => expect(exponentiate(0, 5)).toBe(0));
  test('negative base with even exponent gives positive result', () => expect(exponentiate(-2, 4)).toBe(16));
  test('negative base with odd exponent gives negative result', () => expect(exponentiate(-2, 3)).toBe(-8));
  test('fractional exponent (square root)', () => expect(exponentiate(9, 0.5)).toBeCloseTo(3));
  test('negative exponent gives reciprocal', () => expect(exponentiate(2, -1)).toBeCloseTo(0.5));
});

// --- Square Root ---
describe('sqrt', () => {
  test('sqrt(9) = 3', () => expect(sqrt(9)).toBe(3));
  test('sqrt(16) = 4', () => expect(sqrt(16)).toBe(4));
  test('sqrt(2) is approximately 1.414', () => expect(sqrt(2)).toBeCloseTo(1.414, 3));
  test('sqrt(0) = 0', () => expect(sqrt(0)).toBe(0));
  test('sqrt(1) = 1', () => expect(sqrt(1)).toBe(1));
  test('sqrt of a decimal', () => expect(sqrt(0.25)).toBeCloseTo(0.5));

  // Edge case: square root of a negative number
  test('throws an error for square root of a negative number', () => {
    expect(() => sqrt(-1)).toThrow('Square root of negative number');
  });
  test('throws an error for square root of a large negative number', () => {
    expect(() => sqrt(-100)).toThrow('Square root of negative number');
  });
});
