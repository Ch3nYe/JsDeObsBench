var a0_0x4c55d7 = a0_0x58a5;
function a0_0x58a5(ZmDheG, key) {
    var stringArray = a0_0x1f61();
    a0_0x58a5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58a5(ZmDheG, key);
}
function a0_0x1f61() {
    var _0x8ab808 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'length',
        'map',
        'push',
        'log',
        'hasOwnProperty'
    ];
    a0_0x1f61 = function () {
        return _0x8ab808;
    };
    return a0_0x1f61();
}
var input = require('fs')[a0_0x4c55d7(0x0)](a0_0x4c55d7(0x1), 'utf8');
var Arr = input[a0_0x4c55d7(0x2)]()[a0_0x4c55d7(0x3)]('\x0a');
var obj = {};
for (var i = 0x0; i < Arr[a0_0x4c55d7(0x4)]; i++) {
    var arr = Arr[i][a0_0x4c55d7(0x3)]('\x20')[a0_0x4c55d7(0x5)](Number);
    if (i != 0x0 && arr[a0_0x4c55d7(0x4)] == 0x1) {
        var keys = [];
        for (var k in obj)
            keys[a0_0x4c55d7(0x6)](k - 0x0);
        var cnt = 0x0;
        for (var j = 0x0; j < keys[a0_0x4c55d7(0x4)]; j++) {
            if (obj[keys[j + '']] >= 0xf4240) {
                console[a0_0x4c55d7(0x7)](keys[j + '']);
                cnt++;
            }
        }
        if (cnt == 0x0)
            console[a0_0x4c55d7(0x7)]('NA');
        if (arr[0x0] == 0x0)
            break;
        obj = {};
    } else if (arr['length'] == 0x3) {
        if (!obj[a0_0x4c55d7(0x8)](arr[0x0]))
            obj[arr[0x0]] = arr[0x1] * arr[0x2];
        else
            obj[arr[0x0]] += arr[0x1] * arr[0x2];
    }
}