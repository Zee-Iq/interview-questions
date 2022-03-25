console.clear();

// Reversing a string
// Return a string in reverse

// Solution 1:
// Using array method split("") to make an array out of the string
// Using reverse() to reverse() to reverse the array
// Using join("") to join the array together
// in other words: join("") returns a new string that is  concatenating all elements in the  string   
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("Good evening!"));
