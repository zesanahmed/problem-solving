function square(n: number): number {
  return n * n;
}

function double(n: number): number {
  return n * 2;
}

function addFive(n: number): number {
  return n + 5;
}

function composedFunction(n: number): number {
  return addFive(double(square(n)));
}

const result = composedFunction(3);
console.log(result); // Output: 23
