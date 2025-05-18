var a0_0x8e35de = a0_0x1355;
(function (stringArrayFunction, comparisonValue) {
    var _0xec4745 = a0_0x1355;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xec4745(0xb6)) / 0x1 + parseInt(_0xec4745(0xb2)) / 0x2 + -parseInt(_0xec4745(0xb7)) / 0x3 + -parseInt(_0xec4745(0xb1)) / 0x4 * (parseInt(_0xec4745(0xbf)) / 0x5) + parseInt(_0xec4745(0xb3)) / 0x6 + parseInt(_0xec4745(0xba)) / 0x7 + parseInt(_0xec4745(0xc0)) / 0x8 * (-parseInt(_0xec4745(0xb0)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4399, 0xcb237));
var input = require('fs')[a0_0x8e35de(0xb9)](a0_0x8e35de(0xb5), a0_0x8e35de(0xb4));
function a0_0x4399() {
    var _0x1670c4 = [
        'join',
        'split',
        '245925dLhimp',
        '21688onnCfP',
        'shift',
        'trim',
        'log',
        '4509QnLuTV',
        '36VAVIzg',
        '1193026ODoGBw',
        '3338094zulCgQ',
        'utf8',
        '/dev/stdin',
        '1331379gzoRmS',
        '906153faFoYZ',
        'repeat',
        'readFileSync',
        '3155187ZXToAs',
        'replace',
        'map'
    ];
    a0_0x4399 = function () {
        return _0x1670c4;
    };
    return a0_0x4399();
}
function a0_0x1355(esWNBS, key) {
    var stringArray = a0_0x4399();
    a0_0x1355 = function (index, key) {
        index = index - 0xae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1355(esWNBS, key);
}
var data = input[a0_0x8e35de(0xae)]()['split']('\x0a');
while (!![]) {
    var str = data[a0_0x8e35de(0xc1)]();
    if (str == '#')
        break;
    str = str[a0_0x8e35de(0xbb)](/\d/g, function (v) {
        var _0x567f71 = a0_0x8e35de;
        return 'n'[_0x567f71(0xb8)](v - 0x0);
    });
    var arr = str[a0_0x8e35de(0xbe)]('/');
    arr = arr[a0_0x8e35de(0xbc)](v => v['split'](''));
    var [a, b, c, d] = data['shift']()[a0_0x8e35de(0xbe)]('\x20')[a0_0x8e35de(0xbc)](Number);
    arr[a - 0x1][b - 0x1] = 'n';
    arr[c - 0x1][d - 0x1] = 'b';
    arr = arr['map'](v => v[a0_0x8e35de(0xbd)](''));
    str = arr[a0_0x8e35de(0xbd)]('/');
    str = str[a0_0x8e35de(0xbb)](/n+/g, function (v) {
        return v['length'];
    });
    console[a0_0x8e35de(0xaf)](str);
}