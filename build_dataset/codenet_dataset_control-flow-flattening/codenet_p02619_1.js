'use strict';

function Main(input) {
    const tmp = input.trim().split('\n');
    const D = Number(tmp[0]);
    const C = tmp[1].split(' ').map((v) => Number(v));
    const S = tmp.slice(2, 7).map((v) => v.split(' ').map((v) => Number(v)));
    const T = tmp.slice(-5).map((v) => Number(v));

    let LastContestDays = Array(26).fill(0); // コンテストの種類ごとの最終開催日
    let currnetContestLebels = Array(26).fill(0); // ある開催日のコンテストごとの満足度
    let lebel = 0; // 満足度の累計

    for (let i = 1; i <= D; i++) {
        LastContestDays[T[i - 1] - 1] = i;
        for (let j = 0; j < C.length; j++) {
            if (LastContestDays[j] === i) {
                currnetContestLebels[j] = S[i - 1][j];
            } else {
                currnetContestLebels[j] = C[j] * (i - LastContestDays[j]) * -1;
            }
        }
        lebel += currnetContestLebels.reduce((acc, cur) => acc + cur);
        console.log(String(lebel));
    }

    return;
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));