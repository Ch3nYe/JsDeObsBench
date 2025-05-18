function a0_0xf4f7(XcdqzK, key) {
    var stringArray = a0_0x3993();
    a0_0xf4f7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf4f7(XcdqzK, key);
}
var a0_0x14cb66 = a0_0xf4f7;
function a0_0x3993() {
    var _0x3ba995 = [
        'split',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3993 = function () {
        return _0x3ba995;
    };
    return a0_0x3993();
}
function Main(input) {
    var _0x179763 = a0_0xf4f7;
    input = input[_0x179763(0x0)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var x = input[0x1][_0x179763(0x0)]('\x20');
    var y = new Array(n);
    var count = 0x0;
    var count2 = 0x0;
    var a = 0x3b9aca07;
    for (var i = 0x0; i < n; i++) {
        x[i] = parseInt(x[i], 0xa);
        y[i] = Math[_0x179763(0x1)](x[i] / 0x100000000);
        x[i] = x[i] % 0x100000000;
    }
    for (var i = 0x0; i < n - 0x1; i++) {
        for (var j = i + 0x1; j < n; j++) {
            count += x[i] ^ x[j];
            if (count > 0x100000000 / 0x2) {
                count = count % (0x100000000 / 0x2);
                count2 += 0.5;
            }
            count2 += y[i] ^ y[j];
        }
    }
    count = count + count2 * 0x100000000;
    console[_0x179763(0x2)](count % a);
}
Main(require('fs')[a0_0x14cb66(0x3)](a0_0x14cb66(0x4), a0_0x14cb66(0x5)));