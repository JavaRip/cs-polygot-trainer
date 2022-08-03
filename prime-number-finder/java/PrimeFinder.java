import java.util.LinkedList;

class PrimeFinder {
  public static void main(String[] args) {
    printArgs(args);

    int primesTo = Integer.parseInt(args[0]);
    LinkedList<Integer> primes = new LinkedList<>();

    for (int i = 2; i < primesTo; i += 1) {
      if (isPrime(i)) {
        primes.add(i);
      }
    }

    printPrimes(primes);
    System.out.print("number of primes: ");
    System.out.println(primes.size());
  }

  static void printPrimes(LinkedList<Integer> primes) {
    for (int i = 0; i < primes.size(); i += 1) {
      System.out.println(primes.get(i));
    }
  }

  static boolean isPrime(int number) {
    for (int i = 2; i < number; i += 1) {
      if (number % i == 0) return false;
    }
    return true;
  }

  static void printArgs(String[] args) {
    System.out.println("");
    System.out.println("ARGUMENTS:");

    for (String str: args) {
      System.out.println(str);
    }
    System.out.println("");
  }
}
