function isPrime(num) {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

//Lọc các số nguyên tố
const filterPrimes = (array) => {
	return array.filter(isPrime);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primeNumbers = filterPrimes(array);
console.log(primeNumbers);
