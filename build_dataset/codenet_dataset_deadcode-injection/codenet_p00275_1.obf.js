function a0_0x396e(KvrDCw, key) {
    var stringArray = a0_0x307f();
    a0_0x396e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x396e(KvrDCw, key);
}
var a0_0x335a6e = a0_0x396e;
function a0_0x307f() {
    var _0x5e0fb3 = [
        'utf8',
        'split',
        'shift',
        'length',
        'sort',
        'log',
        'join'
    ];
    a0_0x307f = function () {
        return _0x5e0fb3;
    };
    return a0_0x307f();
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x335a6e(0x0));
var Arr = input['trim']()[a0_0x335a6e(0x1)]('\x0a');
while (!![]) {
    var N = Arr[a0_0x335a6e(0x2)]() - 0x0;
    if (N == 0x0)
        break;
    var n = [];
    var p = 0x0;
    for (var i = 0x0; i < N; i++)
        n[i] = 0x0;
    var str = Arr['shift']();
    for (var i = 0x0; i < str[a0_0x335a6e(0x3)]; i++) {
        var v = str[i];
        var j = i % N;
        if (v == 'M')
            n[j]++;
        if (v == 'S') {
            p += n[j] + 0x1;
            n[j] = 0x0;
        }
        if (v == 'L') {
            n[j] += p + 0x1;
            p = 0x0;
        }
    }
    n[a0_0x335a6e(0x4)](function (a, b) {
        return a - b;
    });
    console[a0_0x335a6e(0x5)](n[a0_0x335a6e(0x6)]('\x20') + '\x20' + p);
}