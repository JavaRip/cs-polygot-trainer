use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    println!("ARGUMENTS");
    println!("{:?}", args);

    let primes_until: i32 = args[1].parse().unwrap();
    println!("{}", primes_until);

    let mut primes = Vec::new();
    for i in 2..primes_until {
        if is_prime(i) {
            primes.push(i);
        }
    }

    for prime in &primes {
        println!("{}", prime);
    }

    println!("number of primes: {}", primes.len());
}

fn is_prime(num: i32) -> bool {
    for i in 2..num {
        if num % i == 0 {
            return false;
        }
    }
    true
}
