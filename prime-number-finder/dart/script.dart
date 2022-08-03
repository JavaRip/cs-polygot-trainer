void main(List<String> arguments) {
  print('printing arguments');
  print(arguments);

  // will crash if argument is not parsable as int
  int primesUntil = int.parse(arguments[0]);
  List<int> primes = [];

  for (int i = 2; i < primesUntil; i += 1) {
    bool prime = true;
    for (int j = 2; j < i; j += 1) {
      if (i % j == 0) {
        prime = false;
      }
    }
    if (prime) {
      print('$i is prime');
      primes.add(i);
    }
  }

  print('');
  print('${primes.length} found');
}
