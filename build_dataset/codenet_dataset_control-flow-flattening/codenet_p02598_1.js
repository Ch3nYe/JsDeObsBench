//解説参照済み

function main(input) {
    const lines = input.split("\n");
    const K = 0 | lines[0].split(" ")[1];
    let arr = new Int32Array(lines[1].split(" "));

    let isOk = (t = 0, k = 0) => {
        arr.forEach((v) => {
            let d = 0 | v / t;
            if (v === d * t) { d--; }
            k -= d;
        })
        return k >= 0;
    }

    let l = 0;
    let r = Math.max(...arr);
    let mid = 0 | (r + l) * 0.5;
    let res = r;
    while (l < r) {
        if (isOk(mid, K)) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
        mid = 0 | (r + l) * 0.5;
    }
    return res;
}


//******************************
exports.main = main;

function Main(input) {
    console.log(main(input.trim()));
}

if (process.argv[2] !== "test") {
    Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}