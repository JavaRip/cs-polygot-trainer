import sys

print('args: ')
print(sys.argv[0])

primesUntil = int(sys.argv[1])

primes = []

for i in range(2, primesUntil):
    prime = True
    for j in range(2, i):
      if i % j == 0:
          prime = False
    if prime:
        primes.append(i)


for prime in primes:
    print(prime)

print('number of primes', len(primes))
