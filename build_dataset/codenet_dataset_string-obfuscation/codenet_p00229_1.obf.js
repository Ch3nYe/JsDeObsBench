var a0_0x1ed891 = a0_0x31ef;
(function (stringArrayFunction, comparisonValue) {
    var _0x3a816d = a0_0x31ef;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3a816d(0x1da)) / 0x1 * (parseInt(_0x3a816d(0x1cf)) / 0x2) + parseInt(_0x3a816d(0x1d0)) / 0x3 + parseInt(_0x3a816d(0x1d6)) / 0x4 + -parseInt(_0x3a816d(0x1d2)) / 0x5 * (parseInt(_0x3a816d(0x1d9)) / 0x6) + parseInt(_0x3a816d(0x1d8)) / 0x7 * (parseInt(_0x3a816d(0x1d5)) / 0x8) + parseInt(_0x3a816d(0x1d3)) / 0x9 + -parseInt(_0x3a816d(0x1dc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5c25, 0x490ee));
function a0_0x31ef(iQRmZx, key) {
    var stringArray = a0_0x5c25();
    a0_0x31ef = function (index, key) {
        index = index - 0x1cf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x31ef(iQRmZx, key);
}
var input = require('fs')[a0_0x1ed891(0x1d4)]('/dev/stdin', a0_0x1ed891(0x1d1));
var Arr = input['trim']()[a0_0x1ed891(0x1d7)]('\x0a');
while (!![]) {
    var BR = Arr[a0_0x1ed891(0x1dd)]();
    if (BR == '0\x200\x200\x200\x200\x200')
        break;
    var br = BR[a0_0x1ed891(0x1d7)]('\x20')[a0_0x1ed891(0x1db)](Number);
    var b = br[0x0];
    var r = br[0x1];
    var g = br[0x2];
    var c = br[0x3];
    var s = br[0x4];
    var t = br[0x5];
    var sum = 0x64;
    sum += b * 0xf;
    sum += r * 0xf;
    sum += (b * 0x5 + r * 0x3) * 0xf;
    sum += g * 0x7;
    sum += c * 0x2;
    sum -= (b * 0x5 + r * 0x3) * 0x2;
    sum -= (t - s - (b * 0x5 + r * 0x3)) * 0x3;
    console['log'](sum);
}
function a0_0x5c25() {
    var _0x286caa = [
        '2465118palBrG',
        'readFileSync',
        '104CLZMjr',
        '2334336ERhGxR',
        'split',
        '170002xoZvSp',
        '13050omEIia',
        '172EmjbKp',
        'map',
        '14172530jzmifS',
        'shift',
        '4730DDzJsN',
        '1146870FeMnYb',
        'utf8',
        '565QAUfpY'
    ];
    a0_0x5c25 = function () {
        return _0x286caa;
    };
    return a0_0x5c25();
}