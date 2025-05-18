var a0_0xe95b0c = a0_0xf2b1;
function a0_0xf2b1(SEHeVB, key) {
    var stringArray = a0_0x4f25();
    a0_0xf2b1 = function (index, key) {
        index = index - 0x1ec;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf2b1(SEHeVB, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x502142 = a0_0xf2b1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x502142(0x1f1)) / 0x1 * (-parseInt(_0x502142(0x1f8)) / 0x2) + parseInt(_0x502142(0x1f2)) / 0x3 * (-parseInt(_0x502142(0x1ec)) / 0x4) + -parseInt(_0x502142(0x1f9)) / 0x5 * (parseInt(_0x502142(0x1fc)) / 0x6) + -parseInt(_0x502142(0x1f5)) / 0x7 + parseInt(_0x502142(0x1ee)) / 0x8 + -parseInt(_0x502142(0x1f3)) / 0x9 * (-parseInt(_0x502142(0x1f4)) / 0xa) + parseInt(_0x502142(0x1ef)) / 0xb * (parseInt(_0x502142(0x1ed)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4f25, 0xb5502));
var input = require('fs')[a0_0xe95b0c(0x1fb)]('/dev/stdin', a0_0xe95b0c(0x1f6));
var [x, y] = input[a0_0xe95b0c(0x1f0)]()[a0_0xe95b0c(0x1f7)]('\x20')['map'](Number);
var cnt = 0x0;
for (var i = 0x0; i <= x; i++) {
    if (y * i * 0x2 / (x * 0x2) % 0x1 === 0x0)
        cnt++;
}
function a0_0x4f25() {
    var _0x5b548e = [
        '245694aEcOFR',
        '4TNHsuX',
        '23950572IPUeKX',
        '5254520uWqtGs',
        '11gVzCsF',
        'trim',
        '6JiRIRB',
        '2552955obTiub',
        '108MOhhRQ',
        '82490dnUYaP',
        '7094682htWlUp',
        'utf8',
        'split',
        '34522xmhtzE',
        '5fyBYGo',
        'log',
        'readFileSync'
    ];
    a0_0x4f25 = function () {
        return _0x5b548e;
    };
    return a0_0x4f25();
}
console[a0_0xe95b0c(0x1fa)](x + 0x1 + y + 0x1 - cnt);