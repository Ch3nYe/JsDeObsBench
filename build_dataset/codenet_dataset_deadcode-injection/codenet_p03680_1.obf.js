'use strict';
function a0_0x2600() {
    const _0x2de8af = [
        'trim',
        'split',
        'slice',
        'map',
        'log',
        'utf8'
    ];
    a0_0x2600 = function () {
        return _0x2de8af;
    };
    return a0_0x2600();
}
function a0_0x1315(rTLnct, key) {
    const stringArray = a0_0x2600();
    a0_0x1315 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1315(rTLnct, key);
}
const a0_0x161beb = a0_0x1315;
const main = arg => {
    const _0x50e735 = a0_0x1315;
    arg = arg[_0x50e735(0x0)]()[_0x50e735(0x1)]('\x0a');
    const N = ~~arg[0x0];
    const S = arg[_0x50e735(0x2)](0x1, N + 0x1)[_0x50e735(0x3)](n => ~~n);
    let now = 0x1;
    let cnt = 0x0;
    while (now !== 0x2) {
        now = S[now - 0x1];
        cnt++;
        if (cnt > N) {
            console[_0x50e735(0x4)](-0x1);
            return;
        }
    }
    console[_0x50e735(0x4)](cnt);
};
main(require('fs')['readFileSync']('/dev/stdin', a0_0x161beb(0x5)));