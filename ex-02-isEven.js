/**
 * Ex-02: isEven()
 *
 * Write a function called isEvent that takes an integer and returns
 * true or false based on whether that integer is odd or even
 *
**/

function isEven (sumnum){
  var worthy = true
  if (sumnum % 2 > 0){
    worthy = false
  }
  return worthy 
}




//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert(isEven(1) === false )
console.assert(isEven(4) === true )
console.assert(isEven(10) === true )
console.assert(isEven(17) === false )
