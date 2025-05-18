'use strict'

function main(input){
  const lines = input.split('\n')
  const N = parseInt( lines.shift() );
  const F = [];
  for(let i=0; i<N;i++){
    F.push( lines[i].split(' ').map( x => parseInt(x) ) );
  }

  const P=[];
  for(let i=0; i<N;i++){
    P.push(lines[i+N].split(' ').map( x => parseInt(x)) );
  }

  let result = -Infinity;
  for(let i=1; i<1024;i++){
    let score = 0;
    for(let j=0; j<N;j++){
      let store = F[j];
      let p_index = (parseInt(store.join(''), 2) & i).toString(2).split('').map(x=>Number(x)).reduce((a,b)=>a+b,0)
      score += P[j][p_index];
    }
    if(score > result){result = score;}
  }

  console.log(result);
}



main(require('fs').readFileSync('/dev/stdin', 'utf8'));