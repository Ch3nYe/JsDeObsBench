var a0_0x417188 = a0_0x5772;
function a0_0x2c69() {
    var _0x231a1c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'replace',
        'slice',
        'length'
    ];
    a0_0x2c69 = function () {
        return _0x231a1c;
    };
    return a0_0x2c69();
}
var input = require('fs')[a0_0x417188(0x0)](a0_0x417188(0x1), a0_0x417188(0x2));
function a0_0x5772(pOcvfh, key) {
    var stringArray = a0_0x2c69();
    a0_0x5772 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5772(pOcvfh, key);
}
var Arr = input[a0_0x417188(0x3)]()[a0_0x417188(0x4)]('\x0a');
while (!![]) {
    var nm = Arr[a0_0x417188(0x5)]()[a0_0x417188(0x4)]('\x20')[a0_0x417188(0x6)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0)
        break;
    var obj = {};
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x417188(0x5)]()['split']('\x20');
        var v = arr[0x0][a0_0x417188(0x7)](/\*/g, '');
        obj[v] = arr[0x1] - 0x0;
    }
    var sum = 0x0;
    for (var i = 0x0; i < m; i++) {
        var v = Arr['shift']();
        for (var k in obj) {
            if (k == v[a0_0x417188(0x8)](-0x1 * k[a0_0x417188(0x9)]))
                sum += obj[k];
        }
    }
    console['log'](sum);
}