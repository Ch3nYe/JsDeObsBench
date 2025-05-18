function a0_0x5685() {
    var _0x52a862 = [
        'readFileSync',
        'hasOwnProperty',
        '1FiFwiE',
        '29024FwOklB',
        'join',
        '/dev/stdin',
        'split',
        '6fqXNDg',
        '7658240IpCssB',
        'shift',
        'forEach',
        '4669553AuXKOR',
        '512314qPFlnH',
        '1719BbwLSv',
        '1145405fIyPNo',
        '2796048omGfFh',
        'utf8',
        '1356788yXPbjz'
    ];
    a0_0x5685 = function () {
        return _0x52a862;
    };
    return a0_0x5685();
}
var a0_0x223bd4 = a0_0x1cd4;
function a0_0x1cd4(BqFjAG, key) {
    var stringArray = a0_0x5685();
    a0_0x1cd4 = function (index, key) {
        index = index - 0xd6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1cd4(BqFjAG, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x56127a = a0_0x1cd4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x56127a(0xe2)) / 0x1 * (-parseInt(_0x56127a(0xda)) / 0x2) + -parseInt(_0x56127a(0xdd)) / 0x3 + parseInt(_0x56127a(0xdf)) / 0x4 + parseInt(_0x56127a(0xdc)) / 0x5 + -parseInt(_0x56127a(0xe7)) / 0x6 * (-parseInt(_0x56127a(0xd9)) / 0x7) + -parseInt(_0x56127a(0xe3)) / 0x8 * (-parseInt(_0x56127a(0xdb)) / 0x9) + -parseInt(_0x56127a(0xd6)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5685, 0x76cde));
var input = require('fs')[a0_0x223bd4(0xe0)](a0_0x223bd4(0xe5), a0_0x223bd4(0xde));
var arr = input['trim']()[a0_0x223bd4(0xe6)]('\x0a');
while (!![]) {
    var a = arr[a0_0x223bd4(0xd7)]()['split']('');
    if (a[a0_0x223bd4(0xe4)]('') == '-')
        break;
    var b = arr[a0_0x223bd4(0xd7)]()[a0_0x223bd4(0xe6)]('');
    var c = arr[a0_0x223bd4(0xd7)]()[a0_0x223bd4(0xe6)]('');
    var obj = {};
    a[a0_0x223bd4(0xd8)](function (v) {
        obj[v] = !![];
    });
    var str = '';
    var m = '';
    c[a0_0x223bd4(0xd8)](function (v) {
        var _0x4124e8 = a0_0x223bd4;
        if (obj[_0x4124e8(0xe1)](v)) {
            if (m == '') {
                m = a[_0x4124e8(0xd7)]();
                m = a[_0x4124e8(0xd7)]();
            } else {
                m = a[_0x4124e8(0xd7)]();
            }
        } else {
            while (!![]) {
                if (m == v) {
                    m = a['shift']();
                    break;
                } else {
                    str += m;
                    m = b['shift']();
                }
            }
        }
    });
    str += m;
    str += b[a0_0x223bd4(0xe4)]('');
    console['log'](str);
}