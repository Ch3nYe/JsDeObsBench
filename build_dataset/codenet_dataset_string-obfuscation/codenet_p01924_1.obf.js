var a0_0x2fb341 = a0_0x18ae;
(function (stringArrayFunction, comparisonValue) {
    var _0x1b5f1d = a0_0x18ae;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1b5f1d(0x190)) / 0x1 * (parseInt(_0x1b5f1d(0x196)) / 0x2) + parseInt(_0x1b5f1d(0x198)) / 0x3 + -parseInt(_0x1b5f1d(0x19c)) / 0x4 + -parseInt(_0x1b5f1d(0x19f)) / 0x5 + parseInt(_0x1b5f1d(0x19e)) / 0x6 + parseInt(_0x1b5f1d(0x19a)) / 0x7 * (parseInt(_0x1b5f1d(0x197)) / 0x8) + -parseInt(_0x1b5f1d(0x18f)) / 0x9 * (-parseInt(_0x1b5f1d(0x194)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c91, 0xafdd8));
var input = require('fs')[a0_0x2fb341(0x191)](a0_0x2fb341(0x195), a0_0x2fb341(0x193));
function a0_0x1c91() {
    var _0x529e3f = [
        '710WDwFCS',
        '/dev/stdin',
        '506tHuQZy',
        '32YIfSDx',
        '1709226uRnygq',
        'log',
        '618667vQMnnF',
        'split',
        '4509044AXMvyN',
        'map',
        '2411088xZLApY',
        '2274020WuggGx',
        'slice',
        '4356XwZEts',
        '3727HtqECq',
        'readFileSync',
        '0\x200\x200',
        'utf8'
    ];
    a0_0x1c91 = function () {
        return _0x529e3f;
    };
    return a0_0x1c91();
}
var arr = input['trim']()[a0_0x2fb341(0x19b)]('\x0a');
function a0_0x18ae(WyOGHP, key) {
    var stringArray = a0_0x1c91();
    a0_0x18ae = function (index, key) {
        index = index - 0x18e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18ae(WyOGHP, key);
}
while (!![]) {
    var tdl = arr[0x0];
    if (tdl == a0_0x2fb341(0x192))
        break;
    var [t, d, l] = tdl[a0_0x2fb341(0x19b)]('\x20')[a0_0x2fb341(0x19d)](Number);
    var cnt = 0x0;
    var time = 0x0;
    for (var i = 0x0; i < t; i++) {
        if (time != 0x0)
            cnt++;
        if (time > 0x0)
            time--;
        var x = arr[i + 0x1] - 0x0;
        if (x >= l)
            time = d;
    }
    console[a0_0x2fb341(0x199)](cnt);
    arr = arr[a0_0x2fb341(0x18e)](t + 0x1);
}