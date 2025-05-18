var a0_0x3bf762 = a0_0x23c6;
function Main(input) {
    var _0x3d1075 = a0_0x23c6;
    input = input[_0x3d1075(0x0)]('\x0a');
    var line = input[0x0]['split']('\x20');
    var m = parseInt(line[0x0]);
    var n = parseInt(line[0x1]);
    var ans = (m - 0x1) * (n - 0x1);
    console[_0x3d1075(0x1)](ans);
}
function a0_0x23c6(PzNjGp, key) {
    var stringArray = a0_0x245b();
    a0_0x23c6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x23c6(PzNjGp, key);
}
function a0_0x245b() {
    var _0x4a8961 = [
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x245b = function () {
        return _0x4a8961;
    };
    return a0_0x245b();
}
Main(require('fs')['readFileSync'](a0_0x3bf762(0x2), a0_0x3bf762(0x3)));