var a0_0x9de25f = a0_0x5485;
(function (stringArrayFunction, comparisonValue) {
    var _0x4c501e = a0_0x5485;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4c501e(0xa0)) / 0x1 * (parseInt(_0x4c501e(0x97)) / 0x2) + -parseInt(_0x4c501e(0x98)) / 0x3 * (parseInt(_0x4c501e(0x9c)) / 0x4) + parseInt(_0x4c501e(0x93)) / 0x5 * (parseInt(_0x4c501e(0x9d)) / 0x6) + parseInt(_0x4c501e(0x9b)) / 0x7 + parseInt(_0x4c501e(0xa1)) / 0x8 + -parseInt(_0x4c501e(0x94)) / 0x9 * (-parseInt(_0x4c501e(0x95)) / 0xa) + parseInt(_0x4c501e(0x9a)) / 0xb * (-parseInt(_0x4c501e(0x9f)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4720, 0x3ac7d));
var input = require('fs')[a0_0x9de25f(0x96)](a0_0x9de25f(0x92), 'utf8');
var [w, h, c] = input[a0_0x9de25f(0xa2)]()['split']('\x20');
function a0_0x4720() {
    var _0x18a844 = [
        '/dev/stdin',
        '197485dlUQEc',
        '9GynOGU',
        '3870350gdicYm',
        'readFileSync',
        '4pJFAgh',
        '442899JLXFPx',
        'repeat',
        '11aOKwem',
        '3112326lapUDa',
        '4bsoxOS',
        '6qOIGQa',
        'push',
        '9590208YJrcpd',
        '40759ZSZpfI',
        '3183600MUnscp',
        'trim'
    ];
    a0_0x4720 = function () {
        return _0x18a844;
    };
    return a0_0x4720();
}
w = w - 0x0;
h = h - 0x0;
var ans = [];
ans['push']('+' + '-'[a0_0x9de25f(0x99)](w - 0x2) + '+');
for (var i = 0x0; i < h - 0x2; i++)
    ans['push']('|' + '.'['repeat'](w - 0x2) + '|');
function a0_0x5485(vUtjRZ, key) {
    var stringArray = a0_0x4720();
    a0_0x5485 = function (index, key) {
        index = index - 0x92;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5485(vUtjRZ, key);
}
ans[a0_0x9de25f(0x9e)]('+' + '-'[a0_0x9de25f(0x99)](w - 0x2) + '+');
ans[Math['floor'](h / 0x2)] = '|' + '.'[a0_0x9de25f(0x99)]((w - 0x3) / 0x2) + c + '.'[a0_0x9de25f(0x99)]((w - 0x3) / 0x2) + '|';
console['log'](ans['join']('\x0a')[a0_0x9de25f(0xa2)]());