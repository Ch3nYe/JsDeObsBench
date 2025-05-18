'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const W = input[0]
    const a = input[1]
    const b = input[2]
    const aw = a + W
    const bw = b + W

    let arr = []
    if(a <= b){
        arr = [a, aw, b, bw]
    }else{
        arr = [b, bw, a, aw]
    }
    if(arr[1] < arr[2]){
        console.log(arr[2] - arr[1])
    }else{
        console.log(0)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))