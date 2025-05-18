function a0_0x14b7(OwfZJc, key) {
    var stringArray = a0_0x16aa();
    a0_0x14b7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x14b7(OwfZJc, key);
}
function a0_0x16aa() {
    var _0x1ad675 = [
        'split',
        'readFileSync',
        'utf8'
    ];
    a0_0x16aa = function () {
        return _0x1ad675;
    };
    return a0_0x16aa();
}
var a0_0x5d6b3b = a0_0x14b7;
function Main(input) {
    var _0xd58ced = a0_0x14b7;
    var str = input['trim']();
    var h = str[_0xd58ced(0x0)]('\x20');
    var n = h[0x0];
    var k = h[0x1];
    var kekka = 0x0;
    var kekka = n - k + 0x1;
    console['log'](kekka);
}
Main(require('fs')[a0_0x5d6b3b(0x1)]('/dev/stdin', a0_0x5d6b3b(0x2)));