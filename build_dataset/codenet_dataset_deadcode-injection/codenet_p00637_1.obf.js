var a0_0x3679af = a0_0x1dae;
function a0_0x1dae(vinFrn, key) {
    var stringArray = a0_0x4305();
    a0_0x1dae = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1dae(vinFrn, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input[a0_0x3679af(0x0)](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0x3679af(0x1)]()[a0_0x3679af(0x2)]('\x20')['map'](Number);
    var x = arr[0x0];
    var ans = [[x]];
    for (var i = 0x1; i < n; i++) {
        if (x + 0x1 == arr[i])
            ans[ans[a0_0x3679af(0x3)] - 0x1][a0_0x3679af(0x4)](arr[i]);
        else
            ans['push']([arr[i]]);
        x = arr[i];
    }
    ans['forEach'](function (v, i) {
        var _0x275928 = a0_0x1dae;
        if (v[_0x275928(0x3)] !== 0x1)
            ans[i] = v[0x0] + '-' + v[v['length'] - 0x1];
        else
            ans[i] = v[0x0];
    });
    console[a0_0x3679af(0x5)](ans[a0_0x3679af(0x6)]('\x20'));
}
function a0_0x4305() {
    var _0x24cfa9 = [
        'replace',
        'shift',
        'split',
        'length',
        'push',
        'log',
        'join'
    ];
    a0_0x4305 = function () {
        return _0x24cfa9;
    };
    return a0_0x4305();
}