var a0_0x1a31f3 = a0_0x3f9b;
function main(input) {
    var _0x1604c3 = a0_0x3f9b;
    input = input['split']('\x0a');
    var values = input[_0x1604c3(0x0)](function (v) {
        return parseInt(v);
    });
    var min = Number[_0x1604c3(0x1)], val = -Number[_0x1604c3(0x1)];
    var N = values[0x0];
    for (var i = 0x1; i <= N - 0x1; i++) {
        if (min >= values[i]) {
            min = values[i];
        }
        if (values[i + 0x1] - min >= val) {
            val = values[i + 0x1] - min;
        }
    }
    console['log'](val);
    return val;
}
main(require('fs')[a0_0x1a31f3(0x2)](a0_0x1a31f3(0x3), a0_0x1a31f3(0x4)));
function a0_0x3f9b(yVhNOt, key) {
    var stringArray = a0_0x565b();
    a0_0x3f9b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f9b(yVhNOt, key);
}
function a0_0x565b() {
    var _0x5769b7 = [
        'map',
        'MAX_VALUE',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x565b = function () {
        return _0x5769b7;
    };
    return a0_0x565b();
}