console.log("printing arguments");
console.log(process.argv);
console.log(typeof Number(process.argv[2]));

if (isNaN(Number(process.argv[2]))) {
  throw new Error("invalid parameter");
}

const primes = [];

console.log("");

for (let i = 2; i <= Number(process.argv[2]); i += 1) {
  let prime = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      prime = false;
    }
  }
  if (prime) {
    console.log(`${i} is prime`);
    primes.push(i);
  }
}

console.log("");
console.log(`${primes.length} primes found`);
