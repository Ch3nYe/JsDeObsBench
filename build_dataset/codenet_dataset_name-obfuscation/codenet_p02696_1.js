const Main = (input) => {
    // array = input.split('\n')
    // ABN = array.shift().split(' ').map(item => parseInt(item))
    ABN = input.split(' ').map(item => parseInt(item))
    // array.pop()
    // console.log(array)
    // arrayInt = array.map(item => item.split(' ').map(value => parseInt(value)))
    // console.log(arrayInt)
    // arrayInt = array.map(item => parseInt(item))
    console.log(F(ABN[0], ABN[1], ABN[2]))
}

const F = (A, B, N) => {
    max = 0
    count = 0
    count0 = 0
    for (x = 0; x <= N; x++) {
        result = Math.floor(A * x / B) - A * Math.floor(x / B)
        if (result == 0) {
            count0++
        }
        if (count0 > 2) {
            break
        }
        // console.log(x, result, max)
        if (result > max) {
            max = result
            count = x
        }
    }
    return max
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
