// You are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let numbers = num.toString().split('');
  let square = numbers.map( a => Math.pow(a, 2));
  let parsed = square.join("") ;
  return parseInt(parsed, 0);
}
