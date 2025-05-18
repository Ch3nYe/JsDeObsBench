'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    let X = []
    let Y = []
    let Z = []
    input.slice(1, N + 1).forEach(v => {
        let tmp = v.split(' ').map(j => parseInt(j))
        X.push(tmp[0])
        Y.push(tmp[1])
        Z.push(tmp[2])
    })

    const MAX = 100
    for(let y = 0; y <= MAX; y++){
        for(let x = 0; x <= MAX; x++){
            let needH = -1
            for(let i = 0; i < N; i++){
                let tmp = Z[i] + Math.abs(Y[i] - y) + Math.abs(X[i] - x)
                if(needH === -1){
                    needH = tmp
                }else if(needH !== tmp){
                    needH = -2
                    break
                }
            }
            if(needH === -2) continue
            console.log('%d %d %d', x, y, needH)
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))