function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
   newArr.push([...arr]);
    // push contents of arr into newArr using push()
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
