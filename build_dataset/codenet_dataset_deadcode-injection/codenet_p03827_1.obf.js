function a0_0xd727(EfltUF, key) {
    var stringArray = a0_0x4ce8();
    a0_0xd727 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd727(EfltUF, key);
}
function a0_0x4ce8() {
    var _0x2688ad = [
        'split',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4ce8 = function () {
        return _0x2688ad;
    };
    return a0_0x4ce8();
}
var a0_0x12998a = a0_0xd727;
function Main(input) {
    var _0x236fce = a0_0xd727;
    input = input[_0x236fce(0x0)]('\x0a');
    var num = input[0x0];
    var character = input[0x1];
    var max = 0x0;
    var x = 0x0;
    for (var i = 0x0; i < character[_0x236fce(0x1)]; i++) {
        if (character[i] === 'I') {
            x++;
        } else {
            x--;
        }
        if (max < x) {
            max = x;
        }
    }
    console['log'](max);
}
Main(require('fs')[a0_0x12998a(0x2)](a0_0x12998a(0x3), a0_0x12998a(0x4)));