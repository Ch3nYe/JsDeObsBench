function a0_0x1481() {
    var _0x2bec26 = [
        'readFileSync',
        '7190bVEeUY',
        'log',
        '6724384vzsfBv',
        '1812622ruiDZD',
        '785Cljpsy',
        '36444miKcQf',
        '/dev/stdin',
        '19849247uvCZSn',
        '6kJsZnw',
        'shift',
        '71206tzUPLp',
        '4TGowXo',
        '8226TukAbP',
        '1216731xRPoYZ',
        '12qNWBVN',
        'split'
    ];
    a0_0x1481 = function () {
        return _0x2bec26;
    };
    return a0_0x1481();
}
var a0_0x5e5720 = a0_0x13f1;
(function (stringArrayFunction, comparisonValue) {
    var _0x13c2fb = a0_0x13f1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x13c2fb(0x13f)) / 0x1 * (parseInt(_0x13c2fb(0x13d)) / 0x2) + -parseInt(_0x13c2fb(0x142)) / 0x3 * (-parseInt(_0x13c2fb(0x140)) / 0x4) + parseInt(_0x13c2fb(0x139)) / 0x5 * (parseInt(_0x13c2fb(0x13a)) / 0x6) + -parseInt(_0x13c2fb(0x138)) / 0x7 + parseInt(_0x13c2fb(0x137)) / 0x8 + -parseInt(_0x13c2fb(0x141)) / 0x9 * (-parseInt(_0x13c2fb(0x135)) / 0xa) + -parseInt(_0x13c2fb(0x13c)) / 0xb * (parseInt(_0x13c2fb(0x143)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1481, 0x8d91c));
input = require('fs')[a0_0x5e5720(0x145)](a0_0x5e5720(0x13b), 'utf8');
lines = input['split']('\x0a');
function a0_0x13f1(UdBenh, key) {
    var stringArray = a0_0x1481();
    a0_0x13f1 = function (index, key) {
        index = index - 0x135;
        var value = stringArray[index];
        return value;
    };
    return a0_0x13f1(UdBenh, key);
}
N = lines[a0_0x5e5720(0x13e)]() * 0x1;
A = lines[a0_0x5e5720(0x13e)]()[a0_0x5e5720(0x144)]('\x20');
h = 0x0;
cnt = 0x0;
for (i = 0x0; i < N; i++) {
    if (h <= A[i]) {
        cnt++;
        h = A[i];
    }
}
console[a0_0x5e5720(0x136)](cnt);