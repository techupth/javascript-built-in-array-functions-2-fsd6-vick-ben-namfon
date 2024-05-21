function isPalindrome(string) {
  // Start coding here
  let reversedString = string.split("").toReversed().join("");
  return reversedString === string;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
