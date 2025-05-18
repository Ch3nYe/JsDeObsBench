function main(input) {
    "use strict";
    const lines = input.split("\n");
    const firstLine = lines[0].split(" ").map((value) => +value);
    const L = firstLine[0];
    const N = firstLine[1];
    let xn = lines.slice(1).filter((value) => value).map((value) => +value);

    let costs = [];
    const search = (x, xn, sum) => {
        if (xn.length === 0) {
            costs.push(sum);
            return;
        }
        const leftDistance = xn[0] >= x ? xn[0] - x : (L - x) + xn[0];
        const rightDistance = xn[xn.length - 1] <= x ? x - xn[xn.length - 1] : x + (L - xn[xn.length - 1]);
        const left = xn.concat();
        const leftX = left.shift();
        const right = xn.concat();
        const rightX = right.pop();
        search(leftX, left, sum + leftDistance);
        search(rightX, right, sum + rightDistance);
    }

    search(0, xn, 0);
    console.log(Math.max.apply(null, costs));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));