'use strict';
var a0_0x4bcf00 = a0_0x31aa;
(function (stringArrayFunction, comparisonValue) {
    var _0xb755cc = a0_0x31aa;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xb755cc(0x14c)) / 0x1 * (parseInt(_0xb755cc(0x147)) / 0x2) + parseInt(_0xb755cc(0x150)) / 0x3 * (-parseInt(_0xb755cc(0x13c)) / 0x4) + parseInt(_0xb755cc(0x13e)) / 0x5 * (parseInt(_0xb755cc(0x14d)) / 0x6) + -parseInt(_0xb755cc(0x152)) / 0x7 * (parseInt(_0xb755cc(0x14b)) / 0x8) + -parseInt(_0xb755cc(0x14f)) / 0x9 * (parseInt(_0xb755cc(0x141)) / 0xa) + parseInt(_0xb755cc(0x140)) / 0xb * (-parseInt(_0xb755cc(0x148)) / 0xc) + parseInt(_0xb755cc(0x142)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x16ee, 0x6a69b));
function a0_0x16ee() {
    var _0x43510e = [
        'print',
        '47792Lfcrnd',
        'reverse',
        '65Zvzpbn',
        'readFileSync',
        '1205809PSDaaP',
        '140fDMSrE',
        '46123298QoSdym',
        'split',
        'log',
        'utf8',
        'shift',
        '13276PiHdlH',
        '72tDykbs',
        'replace',
        'join',
        '240TTEYVP',
        '109NkUnet',
        '65034FoQGUz',
        '/dev/stdin',
        '433737WsQZMb',
        '213QtzMre',
        'slice',
        '81368GajKmb'
    ];
    a0_0x16ee = function () {
        return _0x43510e;
    };
    return a0_0x16ee();
}
main(require('fs')[a0_0x4bcf00(0x13f)](a0_0x4bcf00(0x14e), a0_0x4bcf00(0x145))['replace'](/\r?\n$/, '')[a0_0x4bcf00(0x143)](/\r?\n/));
function a0_0x31aa(VdVANM, key) {
    var stringArray = a0_0x16ee();
    a0_0x31aa = function (index, key) {
        index = index - 0x13c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x31aa(VdVANM, key);
}
function main(lines) {
    var _0x4312c8 = a0_0x4bcf00;
    var str = lines[_0x4312c8(0x146)]();
    lines[_0x4312c8(0x146)]();
    var code;
    while (code = lines[_0x4312c8(0x146)]()) {
        code = code['split']('\x20');
        var from = +code[0x1], to = +code[0x2];
        switch (code[0x0]) {
        case _0x4312c8(0x153):
            console[_0x4312c8(0x144)](str[_0x4312c8(0x151)](from, to + 0x1));
            break;
        case _0x4312c8(0x149):
            str = str[_0x4312c8(0x151)](0x0, from) + code[0x3] + str[_0x4312c8(0x151)](to + 0x1);
            break;
        case _0x4312c8(0x13d):
            str = str[_0x4312c8(0x151)](0x0, from) + str[_0x4312c8(0x151)](from, to + 0x1)['split']('')[_0x4312c8(0x13d)]()[_0x4312c8(0x14a)]('') + str[_0x4312c8(0x151)](to + 0x1);
            break;
        }
    }
}