function a0_0x4a35(TqCmeP, key) {
    var stringArray = a0_0x5da0();
    a0_0x4a35 = function (index, key) {
        index = index - 0x152;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4a35(TqCmeP, key);
}
var a0_0x2851c5 = a0_0x4a35;
(function (stringArrayFunction, comparisonValue) {
    var _0x5d3f94 = a0_0x4a35;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5d3f94(0x15a)) / 0x1 + parseInt(_0x5d3f94(0x158)) / 0x2 * (parseInt(_0x5d3f94(0x15c)) / 0x3) + -parseInt(_0x5d3f94(0x156)) / 0x4 + -parseInt(_0x5d3f94(0x160)) / 0x5 + parseInt(_0x5d3f94(0x15d)) / 0x6 * (-parseInt(_0x5d3f94(0x157)) / 0x7) + -parseInt(_0x5d3f94(0x15f)) / 0x8 + parseInt(_0x5d3f94(0x159)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5da0, 0xe45c4));
function a0_0x5da0() {
    var _0x5db87f = [
        '/dev/stdin',
        'trim',
        '7081884oFDrbh',
        '301istBad',
        '1385944SnADpz',
        '24099147yKeYMC',
        '1676641FRmYgo',
        'slice',
        '6RUFrRP',
        '38358QNQxsx',
        'log',
        '13675152llGrvC',
        '5250700bDohIW',
        'split',
        'map'
    ];
    a0_0x5da0 = function () {
        return _0x5db87f;
    };
    return a0_0x5da0();
}
var input = require('fs')['readFileSync'](a0_0x2851c5(0x154), 'utf8');
var Arr = input[a0_0x2851c5(0x155)]()['split']('\x0a');
while (!![]) {
    var nm = Arr['shift']()[a0_0x2851c5(0x152)]('\x20')[a0_0x2851c5(0x153)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0)
        break;
    var obj = {};
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()[a0_0x2851c5(0x152)]('\x20');
        var v = arr[0x0]['replace'](/\*/g, '');
        obj[v] = arr[0x1] - 0x0;
    }
    var sum = 0x0;
    for (var i = 0x0; i < m; i++) {
        var v = Arr['shift']();
        for (var k in obj) {
            if (k == v[a0_0x2851c5(0x15b)](-0x1 * k['length']))
                sum += obj[k];
        }
    }
    console[a0_0x2851c5(0x15e)](sum);
}