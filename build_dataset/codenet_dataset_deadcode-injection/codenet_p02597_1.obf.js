function a0_0x4b4d(xnzdUk, key) {
    const stringArray = a0_0x3e37();
    a0_0x4b4d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4b4d(xnzdUk, key);
}
const a0_0x405730 = a0_0x4b4d;
function a0_0x3e37() {
    const _0x2ee718 = [
        'split',
        'length',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3e37 = function () {
        return _0x2ee718;
    };
    return a0_0x3e37();
}
function MainD(input) {
    const _0x4ebcea = a0_0x4b4d;
    const arr = input[_0x4ebcea(0x0)]('\x0a');
    const N = arr[0x0];
    const Ci = arr[0x1]['split']('');
    let answer = 0x0;
    let Wnum = 0x0;
    for (let i = 0x0; i < Ci[_0x4ebcea(0x1)]; i++) {
        if (Ci[i] === 'W') {
            Wnum++;
        }
    }
    if (Wnum === 0x0)
        return console[_0x4ebcea(0x2)](0x0);
    for (let i = Wnum - 0x1; i < Ci[_0x4ebcea(0x1)]; i++) {
        if (Ci[i] === 'R') {
            answer++;
        }
    }
    console[_0x4ebcea(0x2)](answer);
}
MainD(require('fs')['readFileSync'](a0_0x405730(0x3), a0_0x405730(0x4)));