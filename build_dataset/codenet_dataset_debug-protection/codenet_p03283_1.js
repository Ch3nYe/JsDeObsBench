"use strict";
function Main(input) {
    let lines = input.split("\n");
    let nmq = lines.shift().split(/\s/).map((v) => v - 0);
    let N = nmq[0], M = nmq[1], Q = nmq[2];
    let T = new Array(N+1).fill(0).map(() => new Array(N+1).fill(0));
    for (let m = 0; m < M; m++) {
        let lr = lines.shift().split(/\s/).map((v) => v - 0);
        T[lr[0]][lr[1]] += 1;
    }
    for (let p = 1; p <= N; p++) {
        for (let q = 1; q <= N; q++) {
            T[p][q] += T[p - 1][q];
            T[p][q] += T[p][q - 1];
            T[p][q] -= T[p - 1][q - 1];
        }
    }
    for (let n = 0; n < Q; n++) {
        let pq = lines.shift().split(/\s/).map((v) => v - 0);
        let p = pq[0], q = pq[1];
        console.log(T[q][q] - T[p - 1][q]);
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));