function a0_0x534a() {
    var _0x48c9e6 = [
        'splice',
        'length',
        'sort',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x534a = function () {
        return _0x48c9e6;
    };
    return a0_0x534a();
}
var a0_0x2d9ec4 = a0_0x5e5d;
function a0_0x5e5d(jbrbwK, key) {
    var stringArray = a0_0x534a();
    a0_0x5e5d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e5d(jbrbwK, key);
}
function Main(input) {
    var _0x126a80 = a0_0x5e5d;
    var lines = input['split']('\x0a');
    var s = lines[_0x126a80(0x0)](0x1, lines[_0x126a80(0x1)]);
    var s_sorted = s[_0x126a80(0x2)]((a, b) => a > b ? 0x1 : -0x1);
    console['log'](s_sorted[_0x126a80(0x3)](''));
}
Main(require('fs')[a0_0x2d9ec4(0x4)](a0_0x2d9ec4(0x5), a0_0x2d9ec4(0x6)));