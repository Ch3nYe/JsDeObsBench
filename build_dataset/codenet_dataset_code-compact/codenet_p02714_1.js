process.stdin.resume();
process.stdin.setEncoding('utf8');

const lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line)
});
reader.on('close', () => {
  const inputLength = Number(lines[0])
  const inputString = lines[1]
  const inputArray = inputString.split('')
  const rArray = inputArray.filter(element => element === 'R')
  const gArray = inputArray.filter(element => element === 'G')
  const bArray = inputArray.filter(element => element === 'B')

  let sum = 0
  for (let i = 1; i < Number(inputLength) + 1; i++) {
    for (let j = i + 1; j < Number(inputLength) + 1; j++) {
      const k = j + j - i 

      if(k <= inputLength && inputArray[i - 1] !== inputArray[j - 1]  && inputArray[j - 1] !== inputArray[k - 1] && inputArray[i - 1] !== inputArray[k - 1]){
        sum = sum + 1
      }
    }
  }

  console.log(rArray.length * gArray.length * bArray.length - sum)

});