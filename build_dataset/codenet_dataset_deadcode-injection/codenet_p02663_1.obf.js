const a0_0x431113 = a0_0x3f64;
const input = require('fs')[a0_0x431113(0x0)](a0_0x431113(0x1), a0_0x431113(0x2));
function a0_0x44a2() {
    const _0x4c65b1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'slice',
        'map',
        'log'
    ];
    a0_0x44a2 = function () {
        return _0x4c65b1;
    };
    return a0_0x44a2();
}
function a0_0x3f64(EEpShU, key) {
    const stringArray = a0_0x44a2();
    a0_0x3f64 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3f64(EEpShU, key);
}
let cin = input[a0_0x431113(0x3)](/ |\n/), cid = 0x0;
const next = () => cin[cid++];
const nexts = n => cin[a0_0x431113(0x4)](cid, cid += n)[a0_0x431113(0x5)](i => parseInt(i));
const [H1, M1, H2, M2, K] = nexts(0x5);
const time = H2 * 0x3c + M2 - (H1 * 0x3c + M1) - K;
time > 0x0 ? console[a0_0x431113(0x6)](time) : console[a0_0x431113(0x6)](0x0);