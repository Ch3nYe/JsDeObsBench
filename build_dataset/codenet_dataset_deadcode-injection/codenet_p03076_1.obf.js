'use strict';
function a0_0x5daf(Xfyova, key) {
    const stringArray = a0_0x1ea7();
    a0_0x5daf = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5daf(Xfyova, key);
}
function a0_0x1ea7() {
    const _0x2816b8 = [
        'trim',
        'split',
        'map',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1ea7 = function () {
        return _0x2816b8;
    };
    return a0_0x1ea7();
}
const a0_0x2ef6cf = a0_0x5daf;
const main = arg => {
    const _0x2bd957 = a0_0x5daf;
    const times = arg[_0x2bd957(0x0)]()[_0x2bd957(0x1)]('\x0a')[_0x2bd957(0x2)](n => parseInt(n));
    let min = 0xa;
    let sum = 0x0;
    for (let i = 0x0; i < times[_0x2bd957(0x3)]; i++) {
        let digitOne = String(times[i])['split']('');
        digitOne = parseInt(digitOne[digitOne[_0x2bd957(0x3)] - 0x1]);
        let digitMinus = 0xa - digitOne;
        sum += parseInt(times[i]);
        if (digitMinus !== 0xa) {
            sum += digitMinus;
        }
        if (digitMinus !== 0xa && digitOne < min) {
            min = digitOne;
        }
    }
    console[_0x2bd957(0x4)](parseInt(sum - (0xa - min)));
};
main(require('fs')[a0_0x2ef6cf(0x5)](a0_0x2ef6cf(0x6), 'utf8'));