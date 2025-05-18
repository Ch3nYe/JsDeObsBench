
function main(lines) {
    const [N] = parseNumberLine(lines[0])
    const numbers = parseNumberLine(lines[1])
    const [Q] = parseNumberLine(lines[2])
    const operationLines = lines.slice(3)

    let result = numbers.reduce((t, v) => t + v, 0)
    for (let i = 0; i < Q; ++i) {
        const [B, C] = parseNumberLine(operationLines[i])

        while (true) {
            const index = numbers.indexOf(B)
            if (index < 0) break

            numbers[index] = C
            result += C - B
        }

        console.log(result)
    }
}

function parseNumberLine(line, radix = 10) {
    return line.split(/\s+/).map(_ => parseInt(_, radix))
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"))
