"use strict"

const arg_str = require('fs').readFileSync('/dev/stdin', 'UTF-8')
const args_lines = arg_str.split('\n')
const n_m = args_lines[0].split(' ')
const N = n_m[0]
const M = n_m[1]
let A_array = args_lines[1].split(' ')
A_array = A_array.map(x=>parseInt(x))

for(let i=0;i<M;i++){
  const max_value = Math.max.apply(null,A_array)
    const max_index = A_array.indexOf(max_value)

    A_array[max_index] = A_array[max_index] / 2
}

const result = A_array.map(x=>Math.floor(x)).reduce((a,x) => a+=x,0)
console.log(result)
