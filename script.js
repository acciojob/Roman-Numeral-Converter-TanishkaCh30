function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  let result = '';

    // Iterate over the symbols
    for (let i = 0; i < obj.length; i++) {
        const [symbol, value] = obj[i];

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
