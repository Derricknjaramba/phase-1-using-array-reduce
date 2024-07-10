// Example 1: Using reduce() with a primitive return value
const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
    return element * 2 + accumulator;
  }, 0);
  console.log("Doubled and Summed:", doubledAndSummed); // Output: 12
  
  // Example 2: Using reduce() with an object as the return value
  const letters = ["a", "b", "c", "b", "a", "a"];
  const lettersCount = letters.reduce(function (countObj, currentLetter) {
    if (currentLetter in countObj) {
      countObj[currentLetter]++;
    } else {
      countObj[currentLetter] = 1;
    }
    return countObj;
  }, {});
  console.log("Letter Count:", lettersCount); // Output: { a: 3, b: 2, c: 1 }
  
  // Lab Task: Calculate the total number of batteries using reduce()
  const batteryBatches = [4, 5, 3, 6, 5, 8];
  const totalBatteries = batteryBatches.reduce(function (accumulator, batch) {
    return accumulator + batch;
  }, 0);
  console.log("Total Batteries:", totalBatteries); // Output: 28
  
  // Additional example: Using reduce() with objects and methods
  const artsShowcases = {
    Dance: [],
    Visual: [],
    Music: [],
    Theater: [],
    Writing: [],
  };
  
  const incomingStudents = ["Alice", "Bob", "Charlie", "David", "Eve"];
  
  // Example of reduce() with an object as return value
  incomingStudents.reduce(function (showcases, student) {
    // Simulating a method to assign showcase
    const showcase = student.length % 5 === 0 ? "Dance" : "Visual";
    showcases[showcase].push(student);
    return showcases;
  }, artsShowcases);
  
  console.log("Arts Showcases:", artsShowcases);
  
  // Export totalBatteries to be used in tests
  module.exports = {
    totalBatteries
  };
  