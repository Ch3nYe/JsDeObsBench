function a0_0x345b(ENmILA, key) {
    var stringArray = a0_0x5051();
    a0_0x345b = function (index, key) {
        index = index - 0xbc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x345b(ENmILA, key);
}
var a0_0x26cca2 = a0_0x345b;
(function (stringArrayFunction, comparisonValue) {
    var _0x192188 = a0_0x345b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x192188(0xc8)) / 0x1 + -parseInt(_0x192188(0xc2)) / 0x2 * (parseInt(_0x192188(0xc4)) / 0x3) + parseInt(_0x192188(0xbd)) / 0x4 + parseInt(_0x192188(0xc5)) / 0x5 + -parseInt(_0x192188(0xc6)) / 0x6 + -parseInt(_0x192188(0xbe)) / 0x7 * (-parseInt(_0x192188(0xbc)) / 0x8) + -parseInt(_0x192188(0xbf)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5051, 0x30299));
function main(arg) {
    var _0x4c8998 = a0_0x345b;
    var arg2 = arg[_0x4c8998(0xc1)]('\x0a')[0x1][_0x4c8998(0xc1)](/\s/g);
    var kazoe = [];
    for (i = 0x0; i < arg['split']('\x0a')[0x0]; i++) {
        if (!kazoe[arg2[i]]) {
            kazoe[arg2[i]] = 0x0;
        }
        kazoe[arg2[i]] += 0x1;
    }
    var ans = 0x1;
    for (j = 0x0; j < kazoe[_0x4c8998(0xc7)]; j++) {
        if (j > 0x1) {
            ans = ans * Math[_0x4c8998(0xc0)](kazoe[j - 0x1], kazoe[j]);
        }
        if (!kazoe[j]) {
            ans = 0x0;
            break;
        }
    }
    console[_0x4c8998(0xc3)](ans % 0x3b800001);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x26cca2(0xc9)));
function a0_0x5051() {
    var _0x6dd42f = [
        '280MOaMZE',
        '1109728VhTNqx',
        '62797IWVTpq',
        '5016591kzPHGQ',
        'pow',
        'split',
        '10bgLFeu',
        'log',
        '133818ekowsF',
        '1768390VUJimS',
        '535224nSYuqe',
        'length',
        '121811ETveZx',
        'utf8'
    ];
    a0_0x5051 = function () {
        return _0x6dd42f;
    };
    return a0_0x5051();
}