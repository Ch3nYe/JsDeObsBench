var a0_0x1bc751 = a0_0x509f;
(function (stringArrayFunction, comparisonValue) {
    var _0x32e205 = a0_0x509f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x32e205(0xe5)) / 0x1 + -parseInt(_0x32e205(0xe8)) / 0x2 * (parseInt(_0x32e205(0xf3)) / 0x3) + parseInt(_0x32e205(0xf4)) / 0x4 * (-parseInt(_0x32e205(0xee)) / 0x5) + -parseInt(_0x32e205(0xec)) / 0x6 + parseInt(_0x32e205(0xed)) / 0x7 + -parseInt(_0x32e205(0xe6)) / 0x8 * (parseInt(_0x32e205(0xeb)) / 0x9) + parseInt(_0x32e205(0xe7)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1a4a, 0xc3a4e));
var input = require('fs')[a0_0x1bc751(0xe9)](a0_0x1bc751(0xf0), 'utf8');
function a0_0x509f(HiXkpQ, key) {
    var stringArray = a0_0x1a4a();
    a0_0x509f = function (index, key) {
        index = index - 0xe5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x509f(HiXkpQ, key);
}
function a0_0x1a4a() {
    var _0x2c9c8f = [
        'readFileSync',
        'split',
        '9cfEDZq',
        '7351302qYiKOV',
        '1407DUNBsF',
        '35NPFSnI',
        'trim',
        '/dev/stdin',
        'shift',
        'min',
        '1884WwHnau',
        '600824LOFIjd',
        'log',
        '1175417INRWgg',
        '12200008SYyYDW',
        '38085960xyQuDl',
        '1214JsxVmc'
    ];
    a0_0x1a4a = function () {
        return _0x2c9c8f;
    };
    return a0_0x1a4a();
}
var Arr = input[a0_0x1bc751(0xef)]()[a0_0x1bc751(0xea)]('\x0a');
while (!![]) {
    var nS = Arr[a0_0x1bc751(0xf1)]()['split']('\x20')['map'](Number);
    var n = nS[0x0];
    var S = nS[0x1];
    if (n == 0x0 && S == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i <= 0x64; i++)
        arr[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr[a0_0x1bc751(0xf1)]() - 0x0;
        arr[v]++;
    }
    var cnt = 0x0;
    for (var i = 0x0; i <= 0x64; i++) {
        for (var j = i + 0x1; j <= 0x64; j++) {
            if (i + j > S)
                cnt += Math[a0_0x1bc751(0xf2)](arr[i], arr[j]);
        }
    }
    console[a0_0x1bc751(0xf5)](cnt);
}