'use strict'

function main(input){
  const lines = input.split('\n');
  const N = parseInt(lines.shift());
  const tasks = []
  for(let i=0;i<N;i++){
    tasks.push( lines[i].split(' ').map( x => parseInt(x) ) );
  }

  tasks.sort( (a,b) => a[1]-b[1])

  let result = 'Yes';
  let sum = 0
  for(let i=0;i<N;i++){
    sum += tasks[i][0]
    if(sum > tasks[i][1]){
      result = 'No';
      break;
    }
  }

  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
