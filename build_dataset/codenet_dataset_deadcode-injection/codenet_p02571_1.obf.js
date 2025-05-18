function a0_0x5ef1() {
    const _0x162e75 = [
        'trim',
        'split',
        'length',
        'slice',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5ef1 = function () {
        return _0x162e75;
    };
    return a0_0x5ef1();
}
function a0_0x3d97(KRkyWj, key) {
    const stringArray = a0_0x5ef1();
    a0_0x3d97 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3d97(KRkyWj, key);
}
const a0_0xc96f3a = a0_0x3d97;
(input => {
    const _0x5e9334 = a0_0x3d97;
    const [S, T] = input[_0x5e9334(0x0)]()[_0x5e9334(0x1)]('\x0a');
    const sl = S[_0x5e9334(0x2)];
    const tl = T[_0x5e9334(0x2)];
    const range = sl - tl;
    let min = tl;
    for (let i = 0x0; i < range; i++) {
        const target = S[_0x5e9334(0x3)](i, tl + i);
        let diff = 0x0;
        for (let j = 0x0; j < tl; j++) {
            if (target[j] !== T[j])
                diff += 0x1;
        }
        if (min > diff) {
            min = diff;
        }
    }
    console[_0x5e9334(0x4)](min);
})(require('fs')[a0_0xc96f3a(0x5)](a0_0xc96f3a(0x6), a0_0xc96f3a(0x7)));