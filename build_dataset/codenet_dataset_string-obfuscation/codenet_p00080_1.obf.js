var a0_0x3178fb = a0_0x4b92;
(function (stringArrayFunction, comparisonValue) {
    var _0x408936 = a0_0x4b92;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x408936(0x7e)) / 0x1 + parseInt(_0x408936(0x82)) / 0x2 + parseInt(_0x408936(0x79)) / 0x3 * (parseInt(_0x408936(0x78)) / 0x4) + -parseInt(_0x408936(0x75)) / 0x5 * (-parseInt(_0x408936(0x76)) / 0x6) + -parseInt(_0x408936(0x77)) / 0x7 * (parseInt(_0x408936(0x7c)) / 0x8) + parseInt(_0x408936(0x7b)) / 0x9 + -parseInt(_0x408936(0x85)) / 0xa * (parseInt(_0x408936(0x7a)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x24fe, 0x997ce));
function a0_0x4b92(VLvPTY, key) {
    var stringArray = a0_0x24fe();
    a0_0x4b92 = function (index, key) {
        index = index - 0x74;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b92(VLvPTY, key);
}
var input = require('fs')[a0_0x3178fb(0x7d)](a0_0x3178fb(0x81), a0_0x3178fb(0x7f));
function a0_0x24fe() {
    var _0x4d7251 = [
        'utf8',
        'abs',
        '/dev/stdin',
        '1931098GrdUCH',
        'pow',
        'log',
        '5460330VTzSYg',
        'toFixed',
        '2331365pqxQTt',
        '12WetPHb',
        '309771dTIAOC',
        '164BCvfmT',
        '54426qhcRgP',
        '11NiAzrT',
        '871308JwdUlY',
        '184DvhzDC',
        'readFileSync',
        '546191VUDaFC'
    ];
    a0_0x24fe = function () {
        return _0x4d7251;
    };
    return a0_0x24fe();
}
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var Q = Arr['shift']() - 0x0;
    if (Q == -0x1)
        break;
    var x = Q / 0x2;
    while (Math[a0_0x3178fb(0x80)](Math[a0_0x3178fb(0x83)](x, 0x3) - Q) >= 0.00001 * Q) {
        x = x - (Math[a0_0x3178fb(0x83)](x, 0x3) - Q) / (0x3 * Math[a0_0x3178fb(0x83)](x, 0x2));
    }
    console[a0_0x3178fb(0x84)](x[a0_0x3178fb(0x74)](0x6));
}