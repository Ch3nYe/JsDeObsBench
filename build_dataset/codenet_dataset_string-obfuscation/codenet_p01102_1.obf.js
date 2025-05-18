var a0_0x1a15ea = a0_0x3309;
function a0_0x3309(pEbLzl, key) {
    var stringArray = a0_0x1216();
    a0_0x3309 = function (index, key) {
        index = index - 0x91;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3309(pEbLzl, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1a2d5f = a0_0x3309;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1a2d5f(0x91)) / 0x1 * (-parseInt(_0x1a2d5f(0x94)) / 0x2) + -parseInt(_0x1a2d5f(0xa0)) / 0x3 + -parseInt(_0x1a2d5f(0x9d)) / 0x4 + parseInt(_0x1a2d5f(0xa2)) / 0x5 * (-parseInt(_0x1a2d5f(0x97)) / 0x6) + parseInt(_0x1a2d5f(0xa4)) / 0x7 * (-parseInt(_0x1a2d5f(0x92)) / 0x8) + parseInt(_0x1a2d5f(0x95)) / 0x9 * (parseInt(_0x1a2d5f(0x9e)) / 0xa) + parseInt(_0x1a2d5f(0x93)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1216, 0x9f6f9));
var input = require('fs')[a0_0x1a15ea(0x9f)](a0_0x1a15ea(0x9c), a0_0x1a15ea(0x9b));
var arr = input[a0_0x1a15ea(0xa3)]()[a0_0x1a15ea(0x9a)]('\x0a');
while (!![]) {
    var a = arr[a0_0x1a15ea(0xa1)]();
    if (a == '.')
        break;
    var b = arr['shift']();
    var memo = [];
    var aa = a['replace'](/".*?"/g, function (s) {
        memo['push'](s);
        return '\x22';
    });
    var cnt = 0x0;
    var bb = b['replace'](/".*?"/g, function (s) {
        var _0x3ce3ef = a0_0x1a15ea;
        if (s != memo[_0x3ce3ef(0xa1)]())
            cnt++;
        return '\x22';
    });
    if (aa == bb && cnt == 0x0)
        console[a0_0x1a15ea(0x99)](a0_0x1a15ea(0x96));
    else if (aa == bb && cnt == 0x1)
        console['log']('CLOSE');
    else if (aa != bb || aa == bb && cnt > 0x1)
        console[a0_0x1a15ea(0x99)](a0_0x1a15ea(0x98));
}
function a0_0x1216() {
    var _0x671555 = [
        '2cVGLWU',
        '162wOmmdr',
        'IDENTICAL',
        '12WGJAti',
        'DIFFERENT',
        'log',
        'split',
        'utf8',
        '/dev/stdin',
        '4861576KmNVNB',
        '179210LXvgbh',
        'readFileSync',
        '2360307bQRwCp',
        'shift',
        '1491235UolUYP',
        'trim',
        '1056594KFfICh',
        '417719lOnEEU',
        '40QwtxUV',
        '45117127sHsjWs'
    ];
    a0_0x1216 = function () {
        return _0x671555;
    };
    return a0_0x1216();
}