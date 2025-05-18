'use strict'

const main = (input) => {
    input = input.split('\n')
    const nums = input[0].split(' ').map(i => parseInt(i))
    const K = parseInt(input[1])

    nums.sort((a, b) => a - b)
    let n = nums.pop()
    n = n * Math.pow(2, K)
    nums.push(n)
    console.log(nums.reduce((p, c) => p + c))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))