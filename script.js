function palindrome(str) {
  let alphanumeric = str.match(/[a-zA-Z0-9]+/g); // match only alphanumeric characters
  if (alphanumeric === null) {
    return true;  // if after this match nothing remains (there were no alphanumeric characters inside the given string), we are left with a null, which we treat as being a palindrome of itself
  }
  else {
    let firstWord = alphanumeric.join('')  // we join everthing together
    .toLowerCase()  // and convert to lower case

    let secondWord = firstWord
    .split('')  // we split again to individual letters
    .reverse()  // reverse the string letter by letter
    .join('')  // join it together again

    if (firstWord === secondWord){
      return true
    }
    else return false
  }
}

palindrome(annarobiiboranna)
