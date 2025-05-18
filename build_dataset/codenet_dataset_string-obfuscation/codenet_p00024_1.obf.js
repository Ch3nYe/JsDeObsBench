'use strict';
var a0_0x28a8c4 = a0_0x48b3;
(function (stringArrayFunction, comparisonValue) {
    var _0x2221e7 = a0_0x48b3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2221e7(0xbc)) / 0x1 * (parseInt(_0x2221e7(0xb8)) / 0x2) + parseInt(_0x2221e7(0xb9)) / 0x3 + parseInt(_0x2221e7(0xb6)) / 0x4 + -parseInt(_0x2221e7(0xbf)) / 0x5 + parseInt(_0x2221e7(0xbe)) / 0x6 * (-parseInt(_0x2221e7(0xbb)) / 0x7) + -parseInt(_0x2221e7(0xc0)) / 0x8 * (parseInt(_0x2221e7(0xbd)) / 0x9) + parseInt(_0x2221e7(0xc2)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x424c, 0x3820f));
function a0_0x424c() {
    var _0x1ba247 = [
        '1vOfYfR',
        '117PlDDcZ',
        '247398tcoRMr',
        '1195095dNWccC',
        '53816vPXRqp',
        'log',
        '2942660LpvCKD',
        'pow',
        '113956tNiNsg',
        'readFileSync',
        '393394NHQOCf',
        '481860SqQoCx',
        'trim',
        '21HMKeFl'
    ];
    a0_0x424c = function () {
        return _0x1ba247;
    };
    return a0_0x424c();
}
function a0_0x48b3(QbkyYj, key) {
    var stringArray = a0_0x424c();
    a0_0x48b3 = function (index, key) {
        index = index - 0xb6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x48b3(QbkyYj, key);
}
var input = require('fs')[a0_0x28a8c4(0xb7)]('/dev/stdin', 'utf8');
var minvs = input[a0_0x28a8c4(0xba)]()['split']('\x0a');
var minv;
while (minv = minvs['shift']()) {
    var floor = Math['ceil'](Math[a0_0x28a8c4(0xc3)](parseFloat(minv), 0x2) / 0x62 + 0x1);
    console[a0_0x28a8c4(0xc1)](floor);
}