const a0_0x2b96a7 = a0_0x3b7d;
console[a0_0x2b96a7(0x0)]((args => {
    const _0x78f960 = a0_0x3b7d;
    const [[N], a] = args['trim']()[_0x78f960(0x1)]`\n`[_0x78f960(0x2)](r => r[_0x78f960(0x1)]` `['map'](v => v | 0x0));
    let odd = 0x0, p4 = 0x0;
    for (let i = 0x0; i < N; i++) {
        odd += a[i] & 0x1;
        p4 += !(a[i] % 0x4);
    }
    return odd - (odd + p4 === N) <= p4 ? _0x78f960(0x3) : 'No';
})(require('fs')[a0_0x2b96a7(0x4)](a0_0x2b96a7(0x5), a0_0x2b96a7(0x6))));
function a0_0x3b7d(KlfGZh, key) {
    const stringArray = a0_0x566e();
    a0_0x3b7d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b7d(KlfGZh, key);
}
function a0_0x566e() {
    const _0x2ff044 = [
        'log',
        'split',
        'map',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x566e = function () {
        return _0x2ff044;
    };
    return a0_0x566e();
}