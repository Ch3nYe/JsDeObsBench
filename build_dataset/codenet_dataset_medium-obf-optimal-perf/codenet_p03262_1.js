'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0].split(' ')[0])
    const X = parseInt(input[0].split(' ')[1])
    const arr = input[1].split(' ').map(v => parseInt(v)).sort((a, b) => a - b)
    let mostNear = 100000000000
    arr.forEach(v => {
        let dist = Math.abs(X - v)
        if(dist < mostNear){
            mostNear = dist
        }
    })

    for(let i = mostNear; i >= 0; i--){
        for(let v of arr){
            let diff = Math.abs(v - X)
            if(diff % mostNear !== 0){
                break
            }
            console.log(i)
            return
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))