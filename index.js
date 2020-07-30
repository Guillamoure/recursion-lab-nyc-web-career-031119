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
  if (string[0] === string[string.length - 1]){
    let subString = string.substring(1, string.length-1)
    return isPalindrome(subString)
  } else {
    return false
  }
}

function addUpTo(array, i){
  let firstIndex = array[0]
  array.shift()
  if (i === 0){
    return firstIndex
  } else {
    i--
    return firstIndex + addUpTo(array, i)
  }
}

function maxOf(array){
  if (array.length > 1){
    if (array[0] > array[1]){
      array.splice(1, 1)
      return maxOf(array)
    } else {
      array.shift()
      return maxOf(array)
    }
  } else {
    return array[0]
  }
}

function includesNumber(array){
  
}

