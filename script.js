//1--
// You are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let numbers = num.toString().split('');
  let square = numbers.map( a => Math.pow(a, 2));
  let parsed = square.join("") ;
  return parseInt(parsed, 0);
}


//2---
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let sbStr = str.toLowerCase().split("");
  let strEv = sbStr.every((c, i) => sbStr.indexOf(c) === i);
   if ( strEv === true || str === "") {
     return true;
   }
   return false;
}

isIsogram("Dermatoglyphics");


// const uniqueArr = [];
// dataArr.forEach((item)=>{
//     //pushes only unique element
//       if(!uniqueArr.includes(item)){
//         uniqueArr.push(item);
//       }
   
// })




// function isIsogram(str){
//   let sbStr = str.split(''); 
//   // let indStr = sbStr.map((data, index) => {
//   //   return index; })
//   // console.log(indStr);
//   //splitting strings into array so we can iterate
//   let removed = sbStr.filter((data, index) => {
//     return sbStr.indexOf(data) === index;
//   })
//   console.log(sbStr === removed)
//   // if (indStr === removed || str === "") {
//   //   return true; } 
//   //   else {
//   //     return false; }
// }
