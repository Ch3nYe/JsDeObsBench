"use strict"

const arg_str = require('fs').readFileSync('/dev/stdin', 'UTF-8')
const args_lines = arg_str.split('\n')
const n = args_lines[0]
const a = args_lines[1].split(' ').map(x=>parseInt(x))
const b = args_lines[2].split(' ').map(x=>parseInt(x))

let cnt = 0

let current_b = b

while (true){
    const max_index = current_b.indexOf(Math.max(...current_b))

    if(max_index == 0){
        current_b[max_index] = current_b[max_index] - current_b[1] - current_b[n - 1]
    }else if(max_index == (n - 1)){
        current_b[max_index] = current_b[max_index] - current_b[n - 2] - current_b[0]
    }else{
        current_b[max_index] = current_b[max_index] - current_b[max_index - 1] - current_b[max_index + 1]
    }
    cnt++
    if(JSON.stringify(current_b) == JSON.stringify(a)){
        console.log(cnt)
        break
    }
    if(current_b.find(x=>x<1)){
        console.log(-1)
        break
    }
}
