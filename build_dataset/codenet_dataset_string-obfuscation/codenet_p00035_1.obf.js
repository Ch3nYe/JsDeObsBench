var a0_0x190a0a = a0_0x2e43;
(function (stringArrayFunction, comparisonValue) {
    var _0x3d9316 = a0_0x2e43;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3d9316(0x128)) / 0x1 + -parseInt(_0x3d9316(0x134)) / 0x2 * (-parseInt(_0x3d9316(0x12f)) / 0x3) + parseInt(_0x3d9316(0x12b)) / 0x4 + -parseInt(_0x3d9316(0x138)) / 0x5 + -parseInt(_0x3d9316(0x139)) / 0x6 * (-parseInt(_0x3d9316(0x12d)) / 0x7) + -parseInt(_0x3d9316(0x137)) / 0x8 + parseInt(_0x3d9316(0x129)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42a0, 0xc88e7));
function heron(a, b, c) {
    var s = (a + b + c) / 0x2;
    var S = Math['sqrt'](s * (s - a) * (s - b) * (s - c));
    return S;
}
function a0_0x42a0() {
    var _0x1b83d1 = [
        '8436vHtlzo',
        'split',
        'apply',
        '4093712JREHGz',
        '6206810WeqAUt',
        '426BVcHJg',
        'abs',
        'pow',
        '105827NGDAOc',
        '9110601SWTPUv',
        'map',
        '1696016PITLTw',
        'length',
        '103943uCbxcj',
        'sqrt',
        '135HtjGUx',
        '/dev/stdin',
        'trim',
        'utf8',
        'readFileSync'
    ];
    a0_0x42a0 = function () {
        return _0x1b83d1;
    };
    return a0_0x42a0();
}
var input = require('fs')[a0_0x190a0a(0x133)](a0_0x190a0a(0x130), a0_0x190a0a(0x132));
var Arr = input[a0_0x190a0a(0x131)]()[a0_0x190a0a(0x135)]('\x0a');
function a0_0x2e43(PTmzoG, key) {
    var stringArray = a0_0x42a0();
    a0_0x2e43 = function (index, key) {
        index = index - 0x127;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e43(PTmzoG, key);
}
for (var i = 0x0; i < Arr[a0_0x190a0a(0x12c)]; i++) {
    var arr = Arr[i][a0_0x190a0a(0x135)](',')[a0_0x190a0a(0x12a)](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var _0x4d908a = a0_0x190a0a;
        var d12 = Math[_0x4d908a(0x12e)](Math[_0x4d908a(0x127)](x1 - x2, 0x2) + Math[_0x4d908a(0x127)](y1 - y2, 0x2));
        var d23 = Math[_0x4d908a(0x12e)](Math[_0x4d908a(0x127)](x2 - x3, 0x2) + Math[_0x4d908a(0x127)](y2 - y3, 0x2));
        var d34 = Math['sqrt'](Math[_0x4d908a(0x127)](x3 - x4, 0x2) + Math['pow'](y3 - y4, 0x2));
        var d41 = Math[_0x4d908a(0x12e)](Math['pow'](x4 - x1, 0x2) + Math[_0x4d908a(0x127)](y4 - y1, 0x2));
        var d13 = Math[_0x4d908a(0x12e)](Math[_0x4d908a(0x127)](x1 - x3, 0x2) + Math['pow'](y1 - y3, 0x2));
        var d24 = Math[_0x4d908a(0x12e)](Math[_0x4d908a(0x127)](x2 - x4, 0x2) + Math[_0x4d908a(0x127)](y2 - y4, 0x2));
        var A = heron(d12, d24, d41) + heron(d23, d34, d24);
        var B = heron(d12, d23, d13) + heron(d13, d34, d41);
        var ans = Math[_0x4d908a(0x13a)](A - B) < 0.00001 ? 'YES' : 'NO';
        console['log'](ans);
    }[a0_0x190a0a(0x136)](null, arr));
}