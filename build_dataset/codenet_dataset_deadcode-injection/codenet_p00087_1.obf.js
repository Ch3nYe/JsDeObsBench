function a0_0x1386() {
    var _0xbfbfeb = [
        'trim',
        'length',
        'forEach',
        'test',
        'unshift',
        'shift',
        'log',
        'toFixed'
    ];
    a0_0x1386 = function () {
        return _0xbfbfeb;
    };
    return a0_0x1386();
}
var a0_0x3f60c7 = a0_0x1756;
function a0_0x1756(tSHfzK, key) {
    var stringArray = a0_0x1386();
    a0_0x1756 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1756(tSHfzK, key);
}
x = require('fs')['readFileSync']('/dev/stdin', 'utf8');
y = x[a0_0x3f60c7(0x0)]()['split']('\x0a');
while (!![]) {
    if (y[a0_0x3f60c7(0x1)] == 0x0)
        break;
    var z = y['shift']()['split']('\x20');
    var s = [];
    z[a0_0x3f60c7(0x2)](function (v) {
        var _0x515a1f = a0_0x1756;
        if (/\d/[_0x515a1f(0x3)](v)) {
            s[_0x515a1f(0x4)](v - 0x0);
        } else {
            a = s[_0x515a1f(0x5)]();
            b = s[_0x515a1f(0x5)]();
            if (v == '+')
                s[_0x515a1f(0x4)](b + a);
            if (v == '-')
                s[_0x515a1f(0x4)](b - a);
            if (v == '*')
                s[_0x515a1f(0x4)](b * a);
            if (v == '/')
                s['unshift'](b / a);
        }
    });
    console[a0_0x3f60c7(0x6)](s[0x0][a0_0x3f60c7(0x7)](0x6));
}