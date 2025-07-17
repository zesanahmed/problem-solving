function sumOfEvenNumbers(numbers: number[]): number {
  return numbers.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const result = sumOfEvenNumbers(nums);
console.log(result); // Output: 20 (2 + 4 + 6 + 8)
