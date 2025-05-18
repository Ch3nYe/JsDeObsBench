var a0_0x484fbe = a0_0x4741;
function a0_0x4741(bhCWdO, key) {
    var stringArray = a0_0x49e2();
    a0_0x4741 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4741(bhCWdO, key);
}
var input = require('fs')[a0_0x484fbe(0x0)]('/dev/stdin', a0_0x484fbe(0x1));
var arr = input[a0_0x484fbe(0x2)]()[a0_0x484fbe(0x3)]('\x0a');
var nq = arr[a0_0x484fbe(0x4)]()['split']('\x20')['map'](Number);
var player = [];
function a0_0x49e2() {
    var _0x6daf3f = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'forEach',
        'log'
    ];
    a0_0x49e2 = function () {
        return _0x6daf3f;
    };
    return a0_0x49e2();
}
var maxValue = 0x0;
var maxId = 0x0;
for (var i = 0x0; i < nq[0x0]; i++)
    player[i] = 0x0;
arr[a0_0x484fbe(0x5)](function (V) {
    var _0x1790b0 = a0_0x4741;
    var av = V[_0x1790b0(0x3)]('\x20')['map'](Number);
    var a = av[0x0] - 0x1;
    var v = av[0x1];
    player[a] += v;
    if (a == maxId && v >= 0x0)
        maxValue += v;
    else if (maxValue == player[a] && maxId > a)
        maxId = a;
    else if (maxValue < player[a]) {
        maxValue = player[a];
        maxId = a;
    } else if (a == maxId && v < 0x0) {
        var max = -0x1 * Infinity;
        player[_0x1790b0(0x5)](function (value, index) {
            if (max < value) {
                max = value;
                maxValue = value;
                maxId = index;
            }
        });
    }
    console[_0x1790b0(0x6)](maxId + 0x1 + '\x20' + maxValue);
});