var a0_0x5b5308 = a0_0xf48f;
(function (stringArrayFunction, comparisonValue) {
    var _0xee9099 = a0_0xf48f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xee9099(0xaf)) / 0x1 + parseInt(_0xee9099(0xb2)) / 0x2 + parseInt(_0xee9099(0xa9)) / 0x3 + -parseInt(_0xee9099(0xb7)) / 0x4 * (parseInt(_0xee9099(0xaa)) / 0x5) + parseInt(_0xee9099(0xb3)) / 0x6 * (-parseInt(_0xee9099(0xac)) / 0x7) + -parseInt(_0xee9099(0xb6)) / 0x8 * (-parseInt(_0xee9099(0xb1)) / 0x9) + parseInt(_0xee9099(0xad)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4631, 0x8561e));
var input = require('fs')[a0_0x5b5308(0xae)](a0_0x5b5308(0xab), a0_0x5b5308(0xb5))['trim']();
var lines = input[a0_0x5b5308(0xb0)]('\x0a');
var inning = +lines['shift']();
function a0_0x4631() {
    var _0x5e0a37 = [
        '440604EHwRSP',
        'HOMERUN',
        'utf8',
        '24pjbzvX',
        '4ngrYMd',
        '549756IhMWGP',
        '333565aalzCU',
        '/dev/stdin',
        '21Mqitim',
        '10651650eXYleP',
        'readFileSync',
        '1043651kAxyjs',
        'split',
        '1505583mJdrJz',
        '253444VBTjbc'
    ];
    a0_0x4631 = function () {
        return _0x5e0a37;
    };
    return a0_0x4631();
}
var out = 0x0;
var score = 0x0;
var runner = 0x0;
var line;
function a0_0xf48f(anoAfK, key) {
    var stringArray = a0_0x4631();
    a0_0xf48f = function (index, key) {
        index = index - 0xa9;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf48f(anoAfK, key);
}
while (line = lines['shift']()) {
    if (line == 'HIT') {
        runner++;
        if (runner > 0x3) {
            score++;
            runner--;
        }
    } else if (line == a0_0x5b5308(0xb4)) {
        score += runner + 0x1;
        runner = 0x0;
    } else {
        out++;
        if (out == 0x3) {
            console['log'](score);
            out = 0x0;
            score = 0x0;
            runner = 0x0;
            continue;
        }
    }
}