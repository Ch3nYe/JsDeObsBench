var a0_0x2d7032 = a0_0x1ec6;
function a0_0x2ca9() {
    var _0x5798ff = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'forEach',
        'split',
        'reverse',
        'join',
        'log'
    ];
    a0_0x2ca9 = function () {
        return _0x5798ff;
    };
    return a0_0x2ca9();
}
function a0_0x1ec6(aRjBpN, key) {
    var stringArray = a0_0x2ca9();
    a0_0x1ec6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ec6(aRjBpN, key);
}
var input = require('fs')[a0_0x2d7032(0x0)](a0_0x2d7032(0x1), a0_0x2d7032(0x2));
var Arr = input['trim']()['split']('\x0a');
var cnt = 0x0;
Arr[a0_0x2d7032(0x3)](function (v) {
    var _0x3d96c9 = a0_0x1ec6;
    var str = v[_0x3d96c9(0x4)]('')[_0x3d96c9(0x5)]()[_0x3d96c9(0x6)]('');
    if (str == v)
        cnt++;
});
console[a0_0x2d7032(0x7)](cnt);