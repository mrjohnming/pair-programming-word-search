// W2D3 - Pair Programming - Word Search
// Partners: John Ngai & Pouya Elish

const wordSearch = (letters, word) => {
    
  // Return undefined when the word parameter is not a string.
  if (typeof word !== 'string') {
    return undefined
  }
    
  // Joins each letter in the subarrays into one string/element, and reduces the double array into a single array.
  const horizontalJoin = letters.map(ls => ls.join(''))

  // Loop through each element in the horizontalJoin array,
  for (l of horizontalJoin) {

    // if the current element (e.g. 'ACFRANKW') includes the word (e.g. 'FRANK'), then return true.
    if (l.includes(word)) {
      return true; // should return true if the word is present
    }
  }

  // Declare a verticalJoin variable equal to an empty array,
  const verticalJoin = [];

  // If the letters array is not empty,
  if (letters.length > 0) {
    // Loop through index (i) = 0 to the number of indexes contained within the inner arrays of the letter array,
    for (let i = 0; i < letters[0].length; i++) {
            
      // Declare a string variable / reset the variable back into an empty string before incrementing the index of the loop,
      let string = '';
    
      // Loop through each outer array of the letters array.
      for (const ls of letters) {
                
        // Concatenate the element (letter) found within the same index of each inner array into the string variable,
        string += ls[i];
      }
    
      // Push the vertically joined string of letters into the verticalJoin array.
      verticalJoin.push(string);
    }
  }


  // Loop through each element in the verticalJoin array,
  for (l of verticalJoin) {

    // if the current element (e.g. 'ACFRANKW') includes the word (e.g. 'FRANK'), then return true.
    if (l.includes(word)) {
      return true; // should return true if the word is present
    }
  }

  return false; //should return false if the word is not present
}

module.exports = wordSearch
