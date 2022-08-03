// Name of program mainreturn.cpp
#include <iostream>
#include <vector>
using namespace std;

bool isPrime(int num) {
  for (int i = 2; i < num; i += 1) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

int main(int argc, char** argv) {
  cout << "ARGUMENTS:\n";
	for (int i = 0; i < argc; ++i)
		cout << argv[i] << "\n";

  int primesUntil = stoi(argv[1]);

  cout << primesUntil;
  cout << "\n\n";

  vector<int> primes;

  for (int i = 2; i < primesUntil; i += 1) {
    if (isPrime(i) == true) {
      primes.push_back(i);
    }
  }

  for (int i = 0; i < primes.size(); i += 1) {
    cout << primes[i];
    cout << "\n";
  }

  cout << "\n";
  cout << "number of primes: ";
  cout << primes.size();
  cout << "\n";

	return 0;
}

