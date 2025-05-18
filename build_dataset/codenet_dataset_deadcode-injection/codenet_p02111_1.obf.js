function a0_0x5317(FbSOte, key) {
    var stringArray = a0_0x3976();
    a0_0x5317 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5317(FbSOte, key);
}
function a0_0x3976() {
    var _0x452954 = [
        'readFileSync',
        'utf8',
        'trim',
        'log'
    ];
    a0_0x3976 = function () {
        return _0x452954;
    };
    return a0_0x3976();
}
var a0_0x5e199c = a0_0x5317;
var input = require('fs')[a0_0x5e199c(0x0)]('/dev/stdin', a0_0x5e199c(0x1));
var x = input[a0_0x5e199c(0x2)]() - 0x0;
var time = 0xc * 0x3c / 0x168 * x;
var h = (time - time % 0x3c) / 0x3c;
var m = time % 0x3c;
console[a0_0x5e199c(0x3)](h + '\x20' + m);