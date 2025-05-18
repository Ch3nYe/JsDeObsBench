var a0_0x3d1d77 = a0_0x1882;
(function (stringArrayFunction, comparisonValue) {
    var _0x543b1a = a0_0x1882;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x543b1a(0x77)) / 0x1 * (parseInt(_0x543b1a(0x87)) / 0x2) + -parseInt(_0x543b1a(0x85)) / 0x3 * (-parseInt(_0x543b1a(0x84)) / 0x4) + parseInt(_0x543b1a(0x78)) / 0x5 + parseInt(_0x543b1a(0x7c)) / 0x6 + -parseInt(_0x543b1a(0x7e)) / 0x7 * (parseInt(_0x543b1a(0x7b)) / 0x8) + -parseInt(_0x543b1a(0x7a)) / 0x9 + parseInt(_0x543b1a(0x76)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xc44d, 0x22cdf));
var input = require('fs')[a0_0x3d1d77(0x80)]('/dev/stdin', a0_0x3d1d77(0x82));
function a0_0xc44d() {
    var _0x434952 = [
        '76363gvmLuL',
        'length',
        'readFileSync',
        'trim',
        'utf8',
        'split',
        '4TkNcYY',
        '720327KuVeaD',
        'shift',
        '18GGRWIs',
        '1092410nPIZCh',
        '8583UqPKdj',
        '678400cjXTkY',
        'log',
        '2347920TIEJYv',
        '88mbIHev',
        '693930EWeEdj',
        'TIE'
    ];
    a0_0xc44d = function () {
        return _0x434952;
    };
    return a0_0xc44d();
}
var arr = input[a0_0x3d1d77(0x81)]()[a0_0x3d1d77(0x83)]('\x0a');
var ans = '';
function a0_0x1882(AuHRXM, key) {
    var stringArray = a0_0xc44d();
    a0_0x1882 = function (index, key) {
        index = index - 0x76;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1882(AuHRXM, key);
}
while (arr[a0_0x3d1d77(0x86)]() != 0x0) {
    var a = arr[a0_0x3d1d77(0x86)]()['split']('\x20');
    var obj = {};
    for (var i = 0x0; i < a[a0_0x3d1d77(0x7f)]; i++) {
        obj[a[i]] = obj[a[i]] + 0x1 || 0x1;
        var s = [];
        for (var k in obj)
            s['push']([
                obj[k],
                k
            ]);
        s['sort'](function (a, b) {
            return b[0x0] - a[0x0];
        });
        if (s[a0_0x3d1d77(0x7f)] == 0x1)
            s[0x1] = [0x0];
        if (s[0x0][0x0] > s[0x1][0x0] + a['length'] - (i + 0x1)) {
            ans += s[0x0][0x1] + '\x20' + (i + 0x1) + '\x0a';
            break;
        }
    }
    if (i == a[a0_0x3d1d77(0x7f)])
        ans += a0_0x3d1d77(0x7d) + '\x0a';
}
console[a0_0x3d1d77(0x79)](ans['trim']());