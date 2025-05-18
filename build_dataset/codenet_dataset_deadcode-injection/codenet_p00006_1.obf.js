var a0_0x3d1dde = a0_0x19ae;
var input = require('fs')[a0_0x3d1dde(0x0)](a0_0x3d1dde(0x1), 'utf8');
var string = input[a0_0x3d1dde(0x2)]();
console[a0_0x3d1dde(0x3)](reverse(string));
function a0_0x4763() {
    var _0x5d18a4 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'log',
        'split'
    ];
    a0_0x4763 = function () {
        return _0x5d18a4;
    };
    return a0_0x4763();
}
function a0_0x19ae(MxdYvW, key) {
    var stringArray = a0_0x4763();
    a0_0x19ae = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19ae(MxdYvW, key);
}
function reverse(s) {
    var _0x3e9a67 = a0_0x19ae;
    return string[_0x3e9a67(0x4)]('')['reverse']()['join']('');
}