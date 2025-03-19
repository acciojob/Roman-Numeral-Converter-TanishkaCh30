function convertToRoman(num) {
  	const arr = [
	['M',1000], 
	['D', 500], 
	['C', 100], 
    ['L', 50], 
	['X', 10], 
	['V', 5], 
	['I', 1]
	];
  let result = '';

    // Iterate over the symbols
    for (let i = 0; i < arr.length; i++) {
        const [symbol, value] = arr[i];

        // While the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value; // Subtract the value from the number
        }
    }

    return result; // 
}


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
