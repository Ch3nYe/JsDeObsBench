const a0_0x3ffcb2 = a0_0x4c56;
function a0_0x1931() {
    const _0x359dcb = [
        'log',
        'trim',
        'split',
        'length',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1931 = function () {
        return _0x359dcb;
    };
    return a0_0x1931();
}
function a0_0x4c56(yCmRgT, key) {
    const stringArray = a0_0x1931();
    a0_0x4c56 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4c56(yCmRgT, key);
}
console[a0_0x3ffcb2(0x0)]((args => {
    const _0x444873 = a0_0x4c56;
    const [s, t] = args[_0x444873(0x1)]()[_0x444873(0x2)]`\n`;
    const sl = s[_0x444873(0x3)], tl = t[_0x444873(0x3)];
    let i = -0x1, cyc = 0x0;
    T:
        for (let j = 0x0; j < tl; j++) {
            for (let k = i + 0x1; k < sl; k++) {
                if (s[k] === t[j]) {
                    i = k;
                    continue T;
                }
            }
            if (i === -0x1)
                return '-1';
            cyc++;
            i = -0x1;
            j--;
        }
    return '' + (cyc * sl + i + 0x1);
})(require('fs')['readFileSync'](a0_0x3ffcb2(0x4), a0_0x3ffcb2(0x5))));