import { NKError } from "../errors";

/**
 * Adds all numbers in the array each other.
 *
 * @param {number[]} numbers - The numbers to be added.
 * @throws {Error} If the `numbers` array is less than two numbers long.
 * @throws {Error} If the `numbers` array contains any non-number values.
 * @return {number} The sum of all numbers in the array.
 */
export function addAll(numbers: number[]): number {
  if (numbers.length < 2) {
    throw new Error(NKError.ARRAY_LENGTH_LESS_THAN_TWO);
  }

  if (!numbers.every((n) => typeof n === "number")) {
    throw new Error(NKError.ARRAY_CONTAINS_NAN_VALUES);
  }

  let sum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
