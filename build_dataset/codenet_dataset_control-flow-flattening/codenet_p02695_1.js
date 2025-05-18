const input = require("fs").readFileSync("/dev/stdin", "utf8")
;(input => {
    const rows = input.split('\n')
    const [N, M, Q] = rows[0].split(' ').map(Number)
    const A = []
    for (let i = 0; i < Q; i++) {
        A[i] = rows[i + 1].split(' ').map(Number)
    }

    const ss = []
    const s = []
    let d = 0
    let v = 0
    while (v !== undefined) {
        if (d === N) {
            ss.push([...s])
            s.pop()
            v++
            d--
        } else if (v >= M) {
            v = s.pop()
            d--
        } else {
            s.push(v + 1)
            d++
        }
    }

    let res = 0
    ss.forEach(s => {
        let sum = 0
        A.forEach(a => {
            if (s[a[1] - 1] - s[a[0] - 1] === a[2]) {
                sum += a[3]
            }
        })
        res = Math.max(res, sum)
    })

    console.log(res)

})(input)
