function a0_0x4ef8(pOTKmk, key) {
    var stringArray = a0_0x2a38();
    a0_0x4ef8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ef8(pOTKmk, key);
}
function a0_0x2a38() {
    var _0x563912 = [
        'utf8',
        'shift',
        'push',
        'sort',
        'reduce',
        'log'
    ];
    a0_0x2a38 = function () {
        return _0x563912;
    };
    return a0_0x2a38();
}
var a0_0x465e64 = a0_0x4ef8;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x465e64(0x0));
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x465e64(0x1)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        var v = Arr[a0_0x465e64(0x1)]() - 0x0;
        arr[a0_0x465e64(0x2)](v);
    }
    arr[a0_0x465e64(0x3)](function (a, b) {
        return a - b;
    });
    var wait = [];
    var time = 0x0;
    for (var i = 0x0; i < n; i++) {
        wait[a0_0x465e64(0x2)](time);
        time += arr[i];
    }
    var sum = wait[a0_0x465e64(0x4)](function (a, b) {
        return a + b;
    });
    console[a0_0x465e64(0x5)](sum);
}