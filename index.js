function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let fib1 = 0;
  let fib2 = 1;
  let fibN;

  for (let i = 2; i <= n; i++) {
    fibN = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibN;
  }

  return fibN;
}

// Example usage:
const n = 10; // Change this to the desired Fibonacci number you want to calculate
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);
