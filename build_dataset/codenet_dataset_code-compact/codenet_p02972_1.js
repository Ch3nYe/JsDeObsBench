"use strict"

const arg_str = require('fs').readFileSync('/dev/stdin', 'UTF-8')
const args= arg_str.split('\n')
const N = parseInt(args[0])
const a_array = args[1].split(' ').map(x=>parseInt(x))

for(let i=N;i>=1;i--){
  let i_n = 0
  if(i==1){
    i_n = N
  }else{
    i_n = Math.sqrt(N)
  }
  for(let j=i_n;j>=1;j--){
    if(i < j){
      if(j % i == 0){
        a_array[i-1] ^= a_array[j-1]
      }
    }else{
      continue
    }
  }
}

const result = []
a_array.forEach((item, index)=>{
  if(item==1){
    result.push(index+1)
  }
})

console.log(result.length)
if(result.length > 0){
  console.log(result.join(' '))
}
