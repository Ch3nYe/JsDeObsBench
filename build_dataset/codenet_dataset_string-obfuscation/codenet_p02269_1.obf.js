function a0_0x1edb(KZCwNg, key) {
    var stringArray = a0_0x221c();
    a0_0x1edb = function (index, key) {
        index = index - 0x141;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1edb(KZCwNg, key);
}
var a0_0x57e199 = a0_0x1edb;
(function (stringArrayFunction, comparisonValue) {
    var _0x50d255 = a0_0x1edb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x50d255(0x14f)) / 0x1 + -parseInt(_0x50d255(0x145)) / 0x2 * (-parseInt(_0x50d255(0x148)) / 0x3) + parseInt(_0x50d255(0x150)) / 0x4 * (-parseInt(_0x50d255(0x14b)) / 0x5) + parseInt(_0x50d255(0x149)) / 0x6 + -parseInt(_0x50d255(0x14d)) / 0x7 * (-parseInt(_0x50d255(0x14c)) / 0x8) + parseInt(_0x50d255(0x152)) / 0x9 * (parseInt(_0x50d255(0x147)) / 0xa) + -parseInt(_0x50d255(0x153)) / 0xb * (parseInt(_0x50d255(0x14e)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x221c, 0x79f07));
var input = require('fs')['readFileSync'](a0_0x57e199(0x142), 'utf8');
var Arr = input['trim']()[a0_0x57e199(0x146)]('\x0a');
Arr[a0_0x57e199(0x143)]();
var obj = {};
function a0_0x221c() {
    var _0x453a30 = [
        '694648xjTnNz',
        'split',
        '26210nPjrfZ',
        '3kRxTxS',
        '2927832RZIFdx',
        'insert',
        '178080PLXulq',
        '572624JFBxyR',
        '35hGAKgP',
        '108BcTrho',
        '928556YhIBcE',
        '68YDGOok',
        'forEach',
        '3096Gvpoij',
        '2344749rcptax',
        'log',
        'hasOwnProperty',
        '/dev/stdin',
        'shift',
        'yes'
    ];
    a0_0x221c = function () {
        return _0x453a30;
    };
    return a0_0x221c();
}
Arr[a0_0x57e199(0x151)](function (v) {
    var _0x52d11c = a0_0x57e199;
    var arr = v['split']('\x20');
    if (arr[0x0] == _0x52d11c(0x14a))
        obj[arr[0x1]] = !![];
    if (arr[0x0] == 'find')
        console[_0x52d11c(0x154)](obj[_0x52d11c(0x141)](arr[0x1]) ? _0x52d11c(0x144) : 'no');
});