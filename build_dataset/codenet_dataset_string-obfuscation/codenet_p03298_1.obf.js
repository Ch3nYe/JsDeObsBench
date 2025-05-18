var a0_0x4204df = a0_0x348d;
(function (stringArrayFunction, comparisonValue) {
    var _0x4f9411 = a0_0x348d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4f9411(0xb8)) / 0x1 * (-parseInt(_0x4f9411(0xbb)) / 0x2) + parseInt(_0x4f9411(0xbc)) / 0x3 + parseInt(_0x4f9411(0xbd)) / 0x4 * (parseInt(_0x4f9411(0xb6)) / 0x5) + parseInt(_0x4f9411(0xb7)) / 0x6 * (parseInt(_0x4f9411(0xb4)) / 0x7) + -parseInt(_0x4f9411(0xb5)) / 0x8 * (-parseInt(_0x4f9411(0xb9)) / 0x9) + parseInt(_0x4f9411(0xbe)) / 0xa + -parseInt(_0x4f9411(0xba)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c50, 0xed38f));
m = ('' + require('fs')[a0_0x4204df(0xb3)](0x0))['split']`
`;
n = m[a = 0x0];
s = m[0x1];
function a0_0x2c50() {
    var _0x5c48c4 = [
        'readFileSync',
        '652722tYjwhp',
        '10321192oKRZTA',
        '15ZnDFpM',
        '90YbuGJH',
        '1MVZANj',
        '9HqRjvu',
        '26622332yWSzxN',
        '3807644hnPTjO',
        '5099154YEnioD',
        '456236WligjL',
        '5649630DcFvOb'
    ];
    a0_0x2c50 = function () {
        return _0x5c48c4;
    };
    return a0_0x2c50();
}
function a0_0x348d(BMqjku, key) {
    var stringArray = a0_0x2c50();
    a0_0x348d = function (index, key) {
        index = index - 0xb3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x348d(BMqjku, key);
}
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[i] + u : u + s[i];
    m[u] = -~m[u];
}
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[0x2 * n + ~i] + u : u + s[0x2 * n + ~i];
    a += ~~m[u];
}
console['log'](a);