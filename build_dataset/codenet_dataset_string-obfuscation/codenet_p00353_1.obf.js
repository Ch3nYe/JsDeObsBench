function a0_0x3ce6(GThxXw, key) {
    var stringArray = a0_0x5896();
    a0_0x3ce6 = function (index, key) {
        index = index - 0x140;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3ce6(GThxXw, key);
}
function a0_0x5896() {
    var _0x462a5d = [
        '124716QtscsV',
        '6tAwAmn',
        '227020senYrY',
        '1379015MegSUw',
        '819qbIItc',
        '40BBzozh',
        '2728gagHvl',
        '11854ulBosX',
        'split',
        '144HFksVj',
        '10qdxARP',
        'utf8',
        '6MkXFcq',
        'map',
        '/dev/stdin',
        'log',
        'readFileSync',
        '862743SvhFUK',
        '828640XULBEX'
    ];
    a0_0x5896 = function () {
        return _0x462a5d;
    };
    return a0_0x5896();
}
var a0_0x398179 = a0_0x3ce6;
(function (stringArrayFunction, comparisonValue) {
    var _0x28074b = a0_0x3ce6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x28074b(0x148)) / 0x1 * (parseInt(_0x28074b(0x146)) / 0x2) + parseInt(_0x28074b(0x14d)) / 0x3 * (parseInt(_0x28074b(0x143)) / 0x4) + -parseInt(_0x28074b(0x140)) / 0x5 * (parseInt(_0x28074b(0x142)) / 0x6) + -parseInt(_0x28074b(0x152)) / 0x7 + -parseInt(_0x28074b(0x147)) / 0x8 * (-parseInt(_0x28074b(0x14a)) / 0x9) + parseInt(_0x28074b(0x14b)) / 0xa * (-parseInt(_0x28074b(0x144)) / 0xb) + parseInt(_0x28074b(0x141)) / 0xc * (parseInt(_0x28074b(0x145)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5896, 0x1ddbf));
var input = require('fs')[a0_0x398179(0x151)](a0_0x398179(0x14f), a0_0x398179(0x14c));
var [m, f, b] = input['trim']()[a0_0x398179(0x149)]('\x20')[a0_0x398179(0x14e)](Number);
if (m >= b)
    console[a0_0x398179(0x150)](0x0);
else if (m + f < b)
    console['log']('NA');
else
    console['log'](b - m);