var a0_0x5624b7 = a0_0x300f;
function a0_0x300f(RlysPo, key) {
    var stringArray = a0_0x4731();
    a0_0x300f = function (index, key) {
        index = index - 0x137;
        var value = stringArray[index];
        return value;
    };
    return a0_0x300f(RlysPo, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2e94ad = a0_0x300f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2e94ad(0x137)) / 0x1 + -parseInt(_0x2e94ad(0x13a)) / 0x2 + -parseInt(_0x2e94ad(0x13e)) / 0x3 + parseInt(_0x2e94ad(0x142)) / 0x4 + -parseInt(_0x2e94ad(0x13c)) / 0x5 * (-parseInt(_0x2e94ad(0x147)) / 0x6) + parseInt(_0x2e94ad(0x13f)) / 0x7 + -parseInt(_0x2e94ad(0x148)) / 0x8 * (parseInt(_0x2e94ad(0x144)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4731, 0xb435e));
var input = require('fs')['readFileSync'](a0_0x5624b7(0x145), a0_0x5624b7(0x146));
function a0_0x4731() {
    var _0x1ceac2 = [
        'map',
        '5fFQXMi',
        'split',
        '1991154cDBmDU',
        '8051946eEjigi',
        'length',
        'log',
        '4691960RmVmXk',
        'join',
        '28674qVlDgp',
        '/dev/stdin',
        'utf8',
        '7377324XsikJH',
        '3256vZwBgn',
        '496902gNtLpM',
        'push',
        'forEach',
        '2702324yOfApg'
    ];
    a0_0x4731 = function () {
        return _0x1ceac2;
    };
    return a0_0x4731();
}
var Arr = input['replace'](/\n$/, '')[a0_0x5624b7(0x13d)]('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()[a0_0x5624b7(0x13d)]('\x20')[a0_0x5624b7(0x13b)](Number);
    var x = arr[0x0];
    var ans = [[x]];
    for (var i = 0x1; i < n; i++) {
        if (x + 0x1 == arr[i])
            ans[ans['length'] - 0x1][a0_0x5624b7(0x138)](arr[i]);
        else
            ans[a0_0x5624b7(0x138)]([arr[i]]);
        x = arr[i];
    }
    ans[a0_0x5624b7(0x139)](function (v, i) {
        var _0x2907f3 = a0_0x5624b7;
        if (v[_0x2907f3(0x140)] !== 0x1)
            ans[i] = v[0x0] + '-' + v[v[_0x2907f3(0x140)] - 0x1];
        else
            ans[i] = v[0x0];
    });
    console[a0_0x5624b7(0x141)](ans[a0_0x5624b7(0x143)]('\x20'));
}