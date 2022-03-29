console.clear();

// 1.Reversing a string
// Return a string in reverse

// Solution 1:
// Using array method split("") to make an array out of the string
// Using reverse()  to reverse the array
// Using join("") to join the array together
// in other words: join("") returns a new string that is  concatenating all elements in the  string
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("Hello"));


//2. Remove duplicate numbers from array 
// Solution 1 approach with : 
// Using the "new" keywoard to create a new instance of an object 
// assigining it to a constant called unique
// lastly wrapping it in array and using the spread operator to create an array   
let arr = [1,2,3,3,3,4,5,5,6,7,8,9,9]
const unique = [...new Set(arr)]

console.log(unique)





module.exports = reverseString;
