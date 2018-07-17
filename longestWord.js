function findLongestWordLength(str) {
    let count = 0;
  let arrStr = str.split(" ");


  for(let i=0; i< arrStr.length; i++){
    if(arrStr[i].length > count){
      count = arrStr[i].length;
    }
  }
  return count;
 //console.log(count);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
