// Constants
const elements = [0.1, 100, 30, 45, 5];
const probabilities = [0.3, 0.05, 0.1, 0.05, 0.5];
const binary_probabilities = [0.3, 0.35, 0.45, 0.5, 1];

// Uses binary search to choose an element based on probablity weight
function findRandomWeightedIndex(array, x, start=0, end=array.length) {
	if(end < start) return 1;
	else if(end === start) return end;

	const mid = Math.floor((start + end) / 2);
	if(x === array[mid]) return mid + 1;
	else if (x> array[mid]) return findRandomWeightedIndex(array, x, mid + 1, end);
	else return findRandomWeightedIndex(array, x, start, mid);
}

// Tests
for (let i=0; i<10; i++) {
	const randVal = Math.random();
	const index = findRandomWeightedIndex(binary_probabilities, randVal);

	console.log("Random Value:", randVal);
	console.log("Index:", index);
	console.log("Weighted Probability:", probabilities[index]);
	console.log("Binary Probability:", binary_probabilities[index]);
	console.log("Element", elements[index]);
	console.log();
}