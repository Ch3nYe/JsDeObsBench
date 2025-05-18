function a0_0x5233() {
    var _0x4300e9 = [
        'trim',
        'utf8',
        'shift',
        '21gzCkyz',
        '1627890eJGaxI',
        '20bexFXe',
        'split',
        '12565539NKVRAt',
        'readFileSync',
        '519lMFGcd',
        'map',
        '587800Laihjs',
        '3063852UPNWzh',
        '10732EBQLbv',
        '833471ofWUvl',
        '3214845iZahuK'
    ];
    a0_0x5233 = function () {
        return _0x4300e9;
    };
    return a0_0x5233();
}
var a0_0x4fb0c2 = a0_0x3429;
function a0_0x3429(RzMoMv, key) {
    var stringArray = a0_0x5233();
    a0_0x3429 = function (index, key) {
        index = index - 0x84;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3429(RzMoMv, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x29063f = a0_0x3429;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x29063f(0x90)) / 0x1 + -parseInt(_0x29063f(0x86)) / 0x2 + parseInt(_0x29063f(0x8b)) / 0x3 * (-parseInt(_0x29063f(0x8f)) / 0x4) + parseInt(_0x29063f(0x91)) / 0x5 + -parseInt(_0x29063f(0x8e)) / 0x6 + -parseInt(_0x29063f(0x85)) / 0x7 * (parseInt(_0x29063f(0x8d)) / 0x8) + -parseInt(_0x29063f(0x89)) / 0x9 * (-parseInt(_0x29063f(0x87)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5233, 0x90b1d));
var input = require('fs')[a0_0x4fb0c2(0x8a)]('/dev/stdin', a0_0x4fb0c2(0x93));
var Arr = input[a0_0x4fb0c2(0x92)]()[a0_0x4fb0c2(0x88)]('\x0a');
while (!![]) {
    var t = Arr['shift']() - 0x0;
    if (t == 0x0)
        break;
    var n = Arr[a0_0x4fb0c2(0x84)]() - 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20')[a0_0x4fb0c2(0x8c)](Number);
        sum += arr[0x1] - arr[0x0];
    }
    console['log'](t <= sum ? 'OK' : t - sum);
}