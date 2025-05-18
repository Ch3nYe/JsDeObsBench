const a0_0x16a4cf = a0_0x275a;
function a0_0x275a(TkNoBd, key) {
    const stringArray = a0_0x60fa();
    a0_0x275a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x275a(TkNoBd, key);
}
function a0_0x60fa() {
    const _0x64d9bf = [
        'trim',
        'length',
        'First',
        'log',
        'Second',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x60fa = function () {
        return _0x64d9bf;
    };
    return a0_0x60fa();
}
function Main(s) {
    const _0x481ea0 = a0_0x275a;
    s = s[_0x481ea0(0x0)]();
    const l = s[_0x481ea0(0x1)];
    if (l & 0x1 ^ s[0x0] === s[l - 0x1])
        console['log'](_0x481ea0(0x2));
    else
        console[_0x481ea0(0x3)](_0x481ea0(0x4));
}
Main(require('fs')[a0_0x16a4cf(0x5)](a0_0x16a4cf(0x6), a0_0x16a4cf(0x7)));