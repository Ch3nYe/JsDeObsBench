function a0_0x4099() {
    var _0x9d33f9 = [
        '976sUlgLh',
        'split',
        '6yOCAGW',
        '2599509pYxNiJ',
        '72iLqYqV',
        '7917iyWBIN',
        '5187yFwOTz',
        '1GsZhfL',
        'map',
        '19944WFHdWn',
        'utf8',
        '129409jmTJPn',
        '255410oVFnig',
        '855ipnYKB',
        '/dev/stdin',
        'forEach',
        'log',
        '59550RiRcgm',
        '391735YRnReU',
        'shift'
    ];
    a0_0x4099 = function () {
        return _0x9d33f9;
    };
    return a0_0x4099();
}
var a0_0xc71bee = a0_0x5c0c;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b09c8 = a0_0x5c0c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5b09c8(0x1f3)) / 0x1 * (parseInt(_0x5b09c8(0x1f8)) / 0x2) + parseInt(_0x5b09c8(0x1f1)) / 0x3 * (-parseInt(_0x5b09c8(0x1ec)) / 0x4) + -parseInt(_0x5b09c8(0x1fe)) / 0x5 * (-parseInt(_0x5b09c8(0x1ee)) / 0x6) + -parseInt(_0x5b09c8(0x1f7)) / 0x7 * (parseInt(_0x5b09c8(0x1f0)) / 0x8) + -parseInt(_0x5b09c8(0x1f9)) / 0x9 * (-parseInt(_0x5b09c8(0x1fd)) / 0xa) + -parseInt(_0x5b09c8(0x1ef)) / 0xb + -parseInt(_0x5b09c8(0x1f5)) / 0xc * (-parseInt(_0x5b09c8(0x1f2)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4099, 0x5ecc9));
function a0_0x5c0c(wKugxg, key) {
    var stringArray = a0_0x4099();
    a0_0x5c0c = function (index, key) {
        index = index - 0x1ec;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c0c(wKugxg, key);
}
var input = require('fs')['readFileSync'](a0_0xc71bee(0x1fa), a0_0xc71bee(0x1f6));
var Arr = input['replace'](/\n$/, '')[a0_0xc71bee(0x1ed)]('\x0a');
while (!![]) {
    var n = Arr[a0_0xc71bee(0x1ff)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0xc71bee(0x1ff)]()[a0_0xc71bee(0x1ed)]('\x20')[a0_0xc71bee(0x1f4)](Number);
    var sum = 0x0;
    var flag = ![];
    arr[a0_0xc71bee(0x1fb)](function (v) {
        if (v != 0x0)
            sum += 0x1;
        if (v >= 0x2)
            flag = !![];
    });
    console[a0_0xc71bee(0x1fc)](flag ? sum + 0x1 : 'NA');
}