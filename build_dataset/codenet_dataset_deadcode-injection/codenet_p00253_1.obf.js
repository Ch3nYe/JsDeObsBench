var a0_0x8b58b5 = a0_0x7a6d;
var input = require('fs')['readFileSync'](a0_0x8b58b5(0x0), 'utf8');
var Arr = input[a0_0x8b58b5(0x1)]()[a0_0x8b58b5(0x2)]('\x0a');
function a0_0x7a6d(kJXMRm, key) {
    var stringArray = a0_0x4140();
    a0_0x7a6d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7a6d(kJXMRm, key);
}
while (!![]) {
    var n = Arr[a0_0x8b58b5(0x3)]() - 0x0;
    if (n === 0x0)
        break;
    var arr = Arr[a0_0x8b58b5(0x3)]()['split']('\x20')[a0_0x8b58b5(0x4)](Number);
    for (var i = 0x0; i < n + 0x1; i++) {
        var a = arr[a0_0x8b58b5(0x5)](function (v, index) {
            return i != index;
        });
        var h = a[0x1] - a[0x0];
        var flag = !![];
        for (var j = 0x1; j < n; j++) {
            if (h != a[j] - a[j - 0x1])
                flag = ![];
        }
        if (flag == !![])
            break;
    }
    console[a0_0x8b58b5(0x6)](arr[i]);
}
function a0_0x4140() {
    var _0x12f20b = [
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'filter',
        'log'
    ];
    a0_0x4140 = function () {
        return _0x12f20b;
    };
    return a0_0x4140();
}