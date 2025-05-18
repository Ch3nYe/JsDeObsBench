var a0_0x3c4d7b = a0_0x183a;
function a0_0x183a(EqcQor, key) {
    var stringArray = a0_0x2de8();
    a0_0x183a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x183a(EqcQor, key);
}
function Main(input) {
    var _0x25845d = a0_0x183a;
    input = input[_0x25845d(0x0)]('\x0a');
    var n = Number(input[0x0]);
    var d = Number(input[0x1][_0x25845d(0x0)]('\x20')[0x0]);
    var x = Number(input[0x1]['split']('\x20')[0x1]);
    var array = [];
    for (var i = 0x0; i < input[_0x25845d(0x1)] - 0x2; i++) {
        array[_0x25845d(0x2)](Number(input[i + 0x2]));
    }
    var total = [];
    for (var j = 0x0; j < array[_0x25845d(0x1)]; j++) {
        for (var k = 0x1; k < 0x64; k++) {
            if (d >= k * array[j] + 0x1) {
                total[_0x25845d(0x2)](k * array[j] + 0x1);
            }
        }
    }
    console[_0x25845d(0x3)](total[_0x25845d(0x1)] + n + x);
}
Main(require('fs')['readFileSync'](a0_0x3c4d7b(0x4), a0_0x3c4d7b(0x5)));
function a0_0x2de8() {
    var _0x3656ba = [
        'split',
        'length',
        'push',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2de8 = function () {
        return _0x3656ba;
    };
    return a0_0x2de8();
}