var a0_0x1d2cf9 = a0_0x2618;
function a0_0x2618(sWqGlR, key) {
    var stringArray = a0_0x58cc();
    a0_0x2618 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2618(sWqGlR, key);
}
function main(input) {
    var _0x1a53b6 = a0_0x2618;
    var ans = 0x1;
    var inputNum = toInt(input);
    for (var i = 0x1; i <= input; i++) {
        ans = ans * i;
    }
    console[_0x1a53b6(0x0)](ans);
}
function toInt(str) {
    return parseInt(str, 0xa);
}
main(require('fs')[a0_0x1d2cf9(0x1)](a0_0x1d2cf9(0x2), a0_0x1d2cf9(0x3)));
function a0_0x58cc() {
    var _0x51e5e0 = [
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x58cc = function () {
        return _0x51e5e0;
    };
    return a0_0x58cc();
}