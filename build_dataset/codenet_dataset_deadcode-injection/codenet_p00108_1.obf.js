function a0_0x6910() {
    var _0x3c7521 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'map',
        'length',
        'join',
        'slice',
        'log'
    ];
    a0_0x6910 = function () {
        return _0x3c7521;
    };
    return a0_0x6910();
}
function a0_0x3575(yoTohb, key) {
    var stringArray = a0_0x6910();
    a0_0x3575 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3575(yoTohb, key);
}
var a0_0x4a0a19 = a0_0x3575;
var input = require('fs')[a0_0x4a0a19(0x0)](a0_0x4a0a19(0x1), a0_0x4a0a19(0x2));
var Arr = input[a0_0x4a0a19(0x3)]()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x4a0a19(0x4)]();
    if (n == '0')
        break;
    var arr = Arr[a0_0x4a0a19(0x4)]()['split']('\x20')[a0_0x4a0a19(0x5)](Number);
    var k = 0x0;
    var S = [];
    while (!![]) {
        for (var i = 0x0; i < arr[a0_0x4a0a19(0x6)]; i++) {
            var cnt = 0x0;
            for (var j = 0x0; j < arr[a0_0x4a0a19(0x6)]; j++) {
                if (arr[i] == arr[j])
                    cnt++;
            }
            S['push'](cnt);
        }
        if (S['join']('\x20') == arr[a0_0x4a0a19(0x7)]('\x20'))
            break;
        arr = S[a0_0x4a0a19(0x8)]();
        S = [];
        k++;
    }
    console[a0_0x4a0a19(0x9)](k);
    console[a0_0x4a0a19(0x9)](S[a0_0x4a0a19(0x7)]('\x20'));
}