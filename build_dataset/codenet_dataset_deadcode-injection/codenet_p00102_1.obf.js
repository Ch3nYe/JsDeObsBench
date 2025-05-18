function a0_0x37ff() {
    var _0x31c23e = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'length',
        'push',
        'slice',
        'log',
        'join',
        'reduce'
    ];
    a0_0x37ff = function () {
        return _0x31c23e;
    };
    return a0_0x37ff();
}
var a0_0x5a4f85 = a0_0xf482;
var input = require('fs')[a0_0x5a4f85(0x0)]('/dev/stdin', a0_0x5a4f85(0x1));
function a0_0xf482(ZcblUq, key) {
    var stringArray = a0_0x37ff();
    a0_0xf482 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf482(ZcblUq, key);
}
var Arr = input[a0_0x5a4f85(0x2)]()[a0_0x5a4f85(0x3)]('\x0a');
var data = [];
var N;
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i][a0_0x5a4f85(0x3)]('\x20')[a0_0x5a4f85(0x4)](Number);
    if (arr[a0_0x5a4f85(0x5)] == 0x1) {
        if (i == 0x0) {
            N = arr[0x0];
            continue;
        }
        var DATA = [];
        for (var j = 0x0; j < N + 0x1; j++) {
            DATA[a0_0x5a4f85(0x6)](0x0);
        }
        for (var k = 0x0; k < N; k++) {
            var v = data[k];
            for (var l = 0x0; l < N + 0x1; l++) {
                DATA[l] += v[l];
            }
            v = v['map'](function (val) {
                var _0x5a9383 = a0_0xf482;
                return ('\x20\x20\x20\x20\x20' + val)[_0x5a9383(0x7)](-0x5);
            });
            console[a0_0x5a4f85(0x8)](v[a0_0x5a4f85(0x9)](''));
        }
        DATA = DATA[a0_0x5a4f85(0x4)](function (val) {
            return ('\x20\x20\x20\x20\x20' + val)['slice'](-0x5);
        });
        console[a0_0x5a4f85(0x8)](DATA[a0_0x5a4f85(0x9)](''));
        if (arr[0x0] == 0x0)
            break;
        data = [];
        N = arr[0x0];
    } else {
        var sum = arr[a0_0x5a4f85(0xa)](function (a, b) {
            return a + b;
        });
        arr['push'](sum);
        data[a0_0x5a4f85(0x6)](arr);
    }
}