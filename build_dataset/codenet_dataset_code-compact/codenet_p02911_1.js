"use strict"
 
let arg_str = require('fs').readFileSync('/dev/stdin', 'UTF-8')
arg_str = arg_str.split('\n')
const arg_str_0 = arg_str[0].split(' ')
const N = arg_str_0[0]
const K = arg_str_0[1]
const Q = arg_str_0[2]
 
const A_array = arg_str.slice(1)
 
let result_val = []
 
for(let i=0;i<N;i++){
  result_val[i] = K
}
 
A_array.forEach((item, index)=>{
  for(let i=0;i<N;i++){
    if(item - 1 != i){
        result_val[i]--
    }
  }
})
 
result_val.map(x=>x>0 ? console.log('Yes') : console.log('No'))
