const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr = input.split(/\n/);
const numbers = arr[1].split(" ").map(Number);
let min = numbers[0];
let max = numbers[0];
let sum = 0;

numbers.forEach(number => {
  if(min > number) min = number;
  if(max < number) max = number;
  sum += number;
})

console.log(min + " " + max + " " + sum);


