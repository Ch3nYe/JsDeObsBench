const a0_0x142529 = a0_0x3b7d;
function a0_0x362b() {
    const _0x3157ee = [
        'log',
        'length',
        'fill',
        'utf8'
    ];
    a0_0x362b = function () {
        return _0x3157ee;
    };
    return a0_0x362b();
}
function a0_0x3b7d(mOVHtb, key) {
    const stringArray = a0_0x362b();
    a0_0x3b7d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b7d(mOVHtb, key);
}
console[a0_0x142529(0x0)]((args => {
    const _0x2badf6 = a0_0x3b7d;
    const s = args['trim']();
    const L = s[_0x2badf6(0x1)];
    const p = Array(L)[_0x2badf6(0x2)](0x0);
    for (let i = L; --i;)
        p[i - 0x1] = p[i] + (s[i] === 'p');
    let g = 0x0, w = 0x0;
    for (let i = 0x0; i < L; i++) {
        if (s[i] === 'g') {
            if (g > p[i]) {
                g--;
                w++;
            } else
                g++;
        } else
            g--;
    }
    return '' + w;
})(require('fs')['readFileSync']('/dev/stdin', a0_0x142529(0x3))));