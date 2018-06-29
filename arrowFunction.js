const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  
  const squaredIntegers = arr
  .filter((a) => a >= 0 &&Number.isInteger(a)) //this filters the array checking if the number is greater or equal to zero(positive)and if number is an integer(not decimal)
  .map((a) => a*a);                            //multiply's number by itself to get square root.
  
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
