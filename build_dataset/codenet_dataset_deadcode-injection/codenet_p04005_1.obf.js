var a0_0x2e1ce7 = a0_0x27b7;
function a0_0x27b7(KJqJWO, key) {
    var stringArray = a0_0x1c08();
    a0_0x27b7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x27b7(KJqJWO, key);
}
function Main(input) {
    var _0x377e1e = a0_0x27b7;
    input = input[_0x377e1e(0x0)]('\x20')[_0x377e1e(0x1)](Number);
    if (input[0x0] % 0x2 == 0x0 && input[0x1] % 0x2 == 0x0 && input[0x2] % 0x2 == 0x0) {
        console[_0x377e1e(0x2)](0x0);
    } else {
        input = input['sort'](function (a, b) {
            return a - b;
        });
        console['log'](input[0x1] * input[0x0]);
    }
}
Main(require('fs')[a0_0x2e1ce7(0x3)](a0_0x2e1ce7(0x4), a0_0x2e1ce7(0x5))['trim']());
function a0_0x1c08() {
    var _0xb5f859 = [
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1c08 = function () {
        return _0xb5f859;
    };
    return a0_0x1c08();
}