const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = input.trim().split("\n")

const nextDay = (y,m,d) => {
    d = d + 1
    if(y%3 === 0) {
        if(d > 20) {
            d = 1
            m += 1
            if(m === 11) {
                m = 1
                y++
            }
        }
    } else {
        if(d > 20) {
            d = 1
            m += 1
            if(m === 11) {
                m = 1
                y++
            }
        } else if(d > 19 && m %2 === 0) {
            d = 1
            m += 1
            if(m === 11) {
                m = 1
                y++
            }
        }
    }
    return [y,m,d]
}
lines.shift()
lines.forEach(line => {
    let [y,m,d] = line.trim().split(' ').map(Number)
    let count = 1
    while (y !== 1000 || m !== 1 || d !== 1) {
         [y,m,d] = nextDay(y,m,d)
        count++
    }
    console.log(count - 1)
})
