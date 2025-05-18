var a0_0x375a75 = a0_0x2bc3;
(function (stringArrayFunction, comparisonValue) {
    var _0x45ceb7 = a0_0x2bc3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x45ceb7(0x123)) / 0x1 + parseInt(_0x45ceb7(0x11e)) / 0x2 + -parseInt(_0x45ceb7(0x125)) / 0x3 * (parseInt(_0x45ceb7(0x12c)) / 0x4) + -parseInt(_0x45ceb7(0x12a)) / 0x5 * (-parseInt(_0x45ceb7(0x128)) / 0x6) + -parseInt(_0x45ceb7(0x129)) / 0x7 + -parseInt(_0x45ceb7(0x12e)) / 0x8 * (-parseInt(_0x45ceb7(0x11f)) / 0x9) + -parseInt(_0x45ceb7(0x121)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5583, 0xcbce6));
var input = require('fs')[a0_0x375a75(0x127)](a0_0x375a75(0x130), a0_0x375a75(0x124));
var arr = input[a0_0x375a75(0x120)]()['split']('\x0a');
var n = arr[a0_0x375a75(0x12d)]() - 0x0;
var a = arr[a0_0x375a75(0x12d)]()[a0_0x375a75(0x122)]('\x20')['map'](Number);
var q = arr[a0_0x375a75(0x12d)]() - 0x0;
function a0_0x2bc3(YTLzCy, key) {
    var stringArray = a0_0x5583();
    a0_0x2bc3 = function (index, key) {
        index = index - 0x11e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2bc3(YTLzCy, key);
}
function a0_0x5583() {
    var _0x209eb1 = [
        'log',
        '80vfYnhN',
        'shift',
        '847096wFwjVY',
        'concat',
        '/dev/stdin',
        'slice',
        '45506tmiQep',
        '135KfqzRh',
        'trim',
        '12103200tXsgFM',
        'split',
        '1403762yZlNCC',
        'utf8',
        '76449ltCfDN',
        'reverse',
        'readFileSync',
        '102918eiyrQD',
        '5501699vqswqy',
        '95QQAZpt'
    ];
    a0_0x5583 = function () {
        return _0x209eb1;
    };
    return a0_0x5583();
}
var s = '';
for (var i = 0x0; i < q; i++) {
    var [b, e] = arr[i][a0_0x375a75(0x122)]('\x20')['map'](Number);
    var x = a[a0_0x375a75(0x131)](0x0, b);
    var y = a[a0_0x375a75(0x131)](b, e)[a0_0x375a75(0x126)]();
    var z = a[a0_0x375a75(0x131)](e);
    a = x[a0_0x375a75(0x12f)](y, z);
}
console[a0_0x375a75(0x12b)](a['join']('\x20'));