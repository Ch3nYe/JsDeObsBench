function a0_0x2610() {
    const _0x52231b = [
        'split',
        'map',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2610 = function () {
        return _0x52231b;
    };
    return a0_0x2610();
}
const a0_0x19f759 = a0_0x29fa;
function main(input) {
    const _0x5d39d1 = a0_0x29fa;
    let numarray = input[_0x5d39d1(0x0)]('\x20')[_0x5d39d1(0x1)](Number);
    let W, H, x, y, r;
    W = numarray[0x0];
    H = numarray[0x1];
    x = numarray[0x2];
    y = numarray[0x3];
    r = numarray[0x4];
    if (x < r || y < r || x + r > W || y + r > H) {
        console[_0x5d39d1(0x2)]('No');
    } else {
        console[_0x5d39d1(0x2)](_0x5d39d1(0x3));
    }
}
function a0_0x29fa(skVOwP, key) {
    const stringArray = a0_0x2610();
    a0_0x29fa = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x29fa(skVOwP, key);
}
main(require('fs')[a0_0x19f759(0x4)](a0_0x19f759(0x5), a0_0x19f759(0x6)));