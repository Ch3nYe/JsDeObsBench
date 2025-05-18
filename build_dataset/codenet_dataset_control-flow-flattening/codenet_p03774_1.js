'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0].split(' ')[0])
    const M = parseInt(input[0].split(' ')[1])
    let arr = input.slice(1, N + 1)
    let points = input.slice(N + 1, M + N + 1)

    const parse = (v) => {
        let temp = v.split(' ').map(vv => parseInt(vv))
        return {
            x: temp[0],
            y: temp[1]
        }
    }
    arr = arr.map(parse)
    points = points.map(parse)


    let indexArr = []
    arr.forEach((v, i) => {
        let minDist = 1000000000
        let index = 0
        points.forEach((w, j) => {
            let dist = Math.abs(v.x - w.x) + Math.abs(v.y - w.y)
            if(dist < minDist){
                minDist = dist
                index = j
            }
        })
        indexArr.push(index)
    })

    indexArr.forEach(v => console.log(v + 1))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))