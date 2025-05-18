
"use strict"

function main(input) {
    input = input.split(/\r?\n/)
    input = input[1].split(' ').map(v => ~~v).sort((a, b) => b - a)

    let ans = 0
    let sticks = [] // 2本ずつ、2本ずつ、
    let prev = input[0]
    for (let i = 1; i < input.length; i++) {

        if (prev == input[i]) {
            sticks.push(prev)
            sticks.push(input[i])
            prev = 0
        } else {
            prev = input[i]
        }

    }
    if (sticks.length >= 4) {
        ans = sticks[0] * sticks[3]
        console.log(ans)
    } else {
        console.log(0)
    }

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));