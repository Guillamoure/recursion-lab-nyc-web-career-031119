// Code your solution here!

function printString(myString){
  console.log(myString[0])
  
  if (myString.length > 1){
    let mySubString = myString.substring(1, myString.legnth)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(string){
  if (string.length === 1) { 
    return string
  }
  
  let subString = string.substring(0, string.length - 1)
  return string[string.length-1] + reverseString(subString)
}

function isPalindrome(string){
  // return string === reverseString(string) ? true : false
  if (string.length <= 1){
    return true
  }
  if (string[0] === string[])
}