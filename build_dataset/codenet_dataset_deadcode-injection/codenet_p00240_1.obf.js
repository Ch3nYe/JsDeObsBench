var a0_0x48ce05 = a0_0x1da7;
function a0_0x1f47() {
    var _0x191bd5 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'shift',
        'map',
        'pow',
        'push',
        'max',
        'apply',
        'log',
        'indexOf'
    ];
    a0_0x1f47 = function () {
        return _0x191bd5;
    };
    return a0_0x1f47();
}
var input = require('fs')[a0_0x48ce05(0x0)](a0_0x48ce05(0x1), 'utf8');
function a0_0x1da7(mmSynO, key) {
    var stringArray = a0_0x1f47();
    a0_0x1da7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1da7(mmSynO, key);
}
var Arr = input['trim']()[a0_0x48ce05(0x2)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x48ce05(0x3)]() - 0x0;
    if (n == 0x0)
        break;
    var y = Arr['shift']() - 0x0;
    var S = [];
    var s = [];
    for (var i = 0x0; i < n; i++) {
        var brt = Arr['shift']()['split']('\x20')[a0_0x48ce05(0x4)](Number);
        var r = brt[0x1];
        var t = brt[0x2];
        var result;
        if (t == 0x1)
            result = 0x2710 * (0x1 + y * (r / 0x64));
        if (t == 0x2)
            result = 0x2710 * Math[a0_0x48ce05(0x5)](0x1 + r / 0x64, y);
        S[a0_0x48ce05(0x6)](brt[0x0]);
        s['push'](result);
    }
    var max = Math[a0_0x48ce05(0x7)][a0_0x48ce05(0x8)](null, s);
    console[a0_0x48ce05(0x9)](S[s[a0_0x48ce05(0xa)](max)]);
}