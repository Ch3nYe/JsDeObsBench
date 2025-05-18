const input = require("fs").readFileSync("/dev/stdin", "utf8")

;(input => {

    const a = input - 0

    console.log(a + a * a + a * a * a)

})(input)
