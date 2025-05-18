function a0_0x2074(GGKkhk, key) {
    var stringArray = a0_0x1f4a();
    a0_0x2074 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2074(GGKkhk, key);
}
var a0_0x529b09 = a0_0x2074;
function a0_0x1f4a() {
    var _0x92db8 = [
        'split',
        'floor',
        'sqrt',
        'Yes',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1f4a = function () {
        return _0x92db8;
    };
    return a0_0x1f4a();
}
function Main(input) {
    var _0x308dcb = a0_0x2074;
    var inp = input[_0x308dcb(0x0)]('\x20');
    var a = inp[0x0];
    var b = inp[0x1];
    var n = parseInt(a + b);
    var flsqn = Math[_0x308dcb(0x1)](Math[_0x308dcb(0x2)](n));
    flsqn * flsqn === n ? console['log'](_0x308dcb(0x3)) : console[_0x308dcb(0x4)]('No');
}
Main(require('fs')[a0_0x529b09(0x5)](a0_0x529b09(0x6), a0_0x529b09(0x7)));