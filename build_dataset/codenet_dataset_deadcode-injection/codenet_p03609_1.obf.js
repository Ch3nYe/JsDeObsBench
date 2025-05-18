function a0_0x30dc(QcwnhA, key) {
    const stringArray = a0_0x2a1e();
    a0_0x30dc = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x30dc(QcwnhA, key);
}
const a0_0x10f17f = a0_0x30dc;
function main(input) {
    const _0x5006f1 = a0_0x30dc;
    input = input[_0x5006f1(0x0)]();
    const a = input[_0x5006f1(0x1)]('\x20')['map'](Number);
    if (a[0x0] <= a[0x1]) {
        console[_0x5006f1(0x2)]('0');
    } else {
        console[_0x5006f1(0x2)](a[0x0] - a[0x1]);
    }
}
function a0_0x2a1e() {
    const _0x323176 = [
        'trim',
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2a1e = function () {
        return _0x323176;
    };
    return a0_0x2a1e();
}
main(require('fs')['readFileSync'](a0_0x10f17f(0x3), a0_0x10f17f(0x4)));