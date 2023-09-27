function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage:
const n = 10; // Change this to the desired Fibonacci number you want to calculate
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);
