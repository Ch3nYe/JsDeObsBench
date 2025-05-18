function main(lines) {
    const [N, K] = parseNumberLine(lines[0])
    const prices = parseNumberLine(lines[1])
    	.sort((a, b) => a - b)

    let total = 0
    for (let i = 0; i < K; ++i) {
      total += prices[i]
    }
    console.log(total)
}

function parseNumberLine(line, radix = 10) {
    return line.split(/\s+/).map(_ => parseInt(_, radix))
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"))
