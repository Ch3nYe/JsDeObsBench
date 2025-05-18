function a0_0x4d92(hRCAaP, key) {
    var stringArray = a0_0x23d7();
    a0_0x4d92 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4d92(hRCAaP, key);
}
function a0_0x23d7() {
    var _0x247e13 = [
        'toUpperCase',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x23d7 = function () {
        return _0x247e13;
    };
    return a0_0x23d7();
}
var a0_0x39facc = a0_0x4d92;
function Main(input) {
    var _0x19936a = a0_0x4d92;
    console['log']((input || '')['split'](/\s+/)['map'](function (entry) {
        var _0x31a5f5 = a0_0x4d92;
        return entry[0x0][_0x31a5f5(0x0)]();
    })[_0x19936a(0x1)](''));
}
Main(require('fs')[a0_0x39facc(0x2)](a0_0x39facc(0x3), a0_0x39facc(0x4)));