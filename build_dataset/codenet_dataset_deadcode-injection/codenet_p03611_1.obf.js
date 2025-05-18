'use strict';
const a0_0xea279c = a0_0x303f;
function a0_0x4347() {
    const _0x429c5e = [
        'trim',
        'split',
        'map',
        'has',
        'add',
        'abs',
        'log',
        'readFileSync'
    ];
    a0_0x4347 = function () {
        return _0x429c5e;
    };
    return a0_0x4347();
}
const main = arg => {
    const _0x4fd113 = a0_0x303f;
    arg = arg[_0x4fd113(0x0)]()[_0x4fd113(0x1)]('\x0a');
    const N = parseInt(arg[0x0]);
    const a = arg[0x1]['split']('\x20')[_0x4fd113(0x2)](n => parseInt(n))['sort']((a, b) => a - b);
    const set = new Set();
    let max = 0x0;
    for (let i = 0x0; i < N; i++) {
        let cnt = 0x0;
        if (set[_0x4fd113(0x3)](a[i])) {
            continue;
        }
        set[_0x4fd113(0x4)](a[i]);
        for (let j = 0x0; j < N; j++) {
            if (Math[_0x4fd113(0x5)](a[j] - a[i]) <= 0x1) {
                cnt++;
            }
        }
        if (cnt > max) {
            max = cnt;
        }
    }
    console[_0x4fd113(0x6)](max);
};
function a0_0x303f(DCSYoY, key) {
    const stringArray = a0_0x4347();
    a0_0x303f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x303f(DCSYoY, key);
}
main(require('fs')[a0_0xea279c(0x7)]('/dev/stdin', 'utf8'));