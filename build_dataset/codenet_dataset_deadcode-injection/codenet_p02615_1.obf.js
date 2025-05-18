function a0_0x49aa() {
    const _0x209c70 = [
        'trim',
        'split',
        'map',
        'sort',
        'push',
        'reduce',
        'MYTEST',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x49aa = function () {
        return _0x209c70;
    };
    return a0_0x49aa();
}
const a0_0x45334b = a0_0x16f2;
function a0_0x16f2(yqLAuH, key) {
    const stringArray = a0_0x49aa();
    a0_0x16f2 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x16f2(yqLAuH, key);
}
const main = input => {
    const _0xcd03a4 = a0_0x16f2;
    input = input[_0xcd03a4(0x0)]()[_0xcd03a4(0x1)]('\x0a');
    let n = parseInt(input[0x0], 0xa) - 0x2;
    const nums = input[0x1][_0xcd03a4(0x1)]('\x20')[_0xcd03a4(0x2)](Number)[_0xcd03a4(0x3)]((a, b) => b - a);
    let r = [0x1];
    for (n; n >= 0x2; n -= 0x2)
        r[_0xcd03a4(0x4)](0x2);
    r[_0xcd03a4(0x4)](n);
    return console['log'](r[_0xcd03a4(0x5)]((a, b, i) => a + b * nums[i], 0x0));
};
process['env'][a0_0x45334b(0x6)] ? test() : main(require('fs')[a0_0x45334b(0x7)](a0_0x45334b(0x8), 'utf8'));