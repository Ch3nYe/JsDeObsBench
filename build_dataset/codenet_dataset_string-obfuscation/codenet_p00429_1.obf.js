var a0_0x34e69e = a0_0x46ea;
function a0_0x4bef() {
    var _0x39487a = [
        '247548WXAVzC',
        '6736AZTVyt',
        'length',
        '1091020ZneXue',
        '479645mIkTDf',
        '2ozkVKv',
        '18hgMrwj',
        '10050103Zitveg',
        '9900FsAhHz',
        'trim',
        '4096407OyRlYg',
        '287304zWOSRB',
        'split',
        '407AKzIVg',
        '4LwKiNZ',
        'readFileSync'
    ];
    a0_0x4bef = function () {
        return _0x39487a;
    };
    return a0_0x4bef();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4257f0 = a0_0x46ea;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4257f0(0xd9)) / 0x1 * (-parseInt(_0x4257f0(0xdf)) / 0x2) + parseInt(_0x4257f0(0xde)) / 0x3 * (parseInt(_0x4257f0(0xe2)) / 0x4) + parseInt(_0x4257f0(0xd8)) / 0x5 * (parseInt(_0x4257f0(0xda)) / 0x6) + -parseInt(_0x4257f0(0xdb)) / 0x7 + parseInt(_0x4257f0(0xd5)) / 0x8 * (parseInt(_0x4257f0(0xdc)) / 0x9) + parseInt(_0x4257f0(0xd7)) / 0xa + -parseInt(_0x4257f0(0xe1)) / 0xb * (parseInt(_0x4257f0(0xd4)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4bef, 0xbda9c));
var input = require('fs')[a0_0x34e69e(0xe3)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x34e69e(0xdd)]()[a0_0x34e69e(0xe0)]('\x0a');
function a0_0x46ea(sPtqds, key) {
    var stringArray = a0_0x4bef();
    a0_0x46ea = function (index, key) {
        index = index - 0xd4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x46ea(sPtqds, key);
}
for (var i = 0x0; i < Arr[a0_0x34e69e(0xd6)]; i = i + 0x2) {
    var n = Arr[i] - 0x0;
    var str = Arr[i + 0x1];
    for (var j = 0x0; j < n; j++) {
        str = str['replace'](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (s) {
            var _0x50b251 = a0_0x34e69e;
            return s[_0x50b251(0xd6)] + s[0x0];
        });
    }
    console['log'](str);
    if (Arr[i + 0x2] == '0')
        break;
}