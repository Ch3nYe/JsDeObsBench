var a0_0x3d9b2f = a0_0x3daf;
(function (stringArrayFunction, comparisonValue) {
    var _0x593342 = a0_0x3daf;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x593342(0xdb)) / 0x1 * (parseInt(_0x593342(0xe4)) / 0x2) + -parseInt(_0x593342(0xd8)) / 0x3 + parseInt(_0x593342(0xd5)) / 0x4 + parseInt(_0x593342(0xd3)) / 0x5 * (-parseInt(_0x593342(0xdf)) / 0x6) + -parseInt(_0x593342(0xe1)) / 0x7 + parseInt(_0x593342(0xd6)) / 0x8 * (-parseInt(_0x593342(0xd7)) / 0x9) + parseInt(_0x593342(0xdd)) / 0xa * (parseInt(_0x593342(0xd4)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x33bd, 0xc6911));
function a0_0x3daf(TQNVno, key) {
    var stringArray = a0_0x33bd();
    a0_0x3daf = function (index, key) {
        index = index - 0xd0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3daf(TQNVno, key);
}
function a0_0x33bd() {
    var _0x2790c0 = [
        '4644476DzrPso',
        '368XCTiDh',
        '25641lCIazP',
        '465186uThlOT',
        'shift',
        '/dev/stdin',
        '227693otDcLl',
        'indexOf',
        '419810HVFidF',
        'readFileSync',
        '11076hhJJAz',
        'split',
        '5079123jmLDgP',
        'utf8',
        'push',
        '4oPxWIV',
        'length',
        'trim',
        'log',
        '2540FkshfQ',
        '539QktKzf'
    ];
    a0_0x33bd = function () {
        return _0x2790c0;
    };
    return a0_0x33bd();
}
var input = require('fs')[a0_0x3d9b2f(0xde)](a0_0x3d9b2f(0xda), a0_0x3d9b2f(0xe2));
var Arr = input[a0_0x3d9b2f(0xd1)]()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x3d9b2f(0xd9)]() - 0x0;
    if (n == 0x0)
        break;
    var m = Arr['shift']() - 0x0;
    var N = [];
    for (var i = 0x0; i < n; i++) {
        N[i] = [];
        for (var j = 0x0; j < n; j++) {
            N[i][j] = Infinity;
            if (i == j)
                N[i][j] = 0x0;
        }
    }
    var arr = [];
    for (var i = 0x0; i < m; i++) {
        var abc = Arr[a0_0x3d9b2f(0xd9)]()[a0_0x3d9b2f(0xe0)](',')['map'](Number);
        var a = abc[0x0];
        var b = abc[0x1];
        var c = abc[0x2] / 0x64;
        N[a][b] = c;
        N[b][a] = c;
    }
    var city = [0x0];
    var cost = 0x0;
    while (!![]) {
        if (city[a0_0x3d9b2f(0xd0)] == n)
            break;
        var min = Infinity;
        var select = -0x1;
        for (var i = 0x0; i < city[a0_0x3d9b2f(0xd0)]; i++) {
            for (var j = 0x0; j < n; j++) {
                if (city[a0_0x3d9b2f(0xdc)](j) != -0x1)
                    continue;
                if (N[city[i]][j] < min) {
                    select = j;
                    min = N[city[i]][j] - 0x1;
                }
            }
        }
        if (select != -0x1) {
            cost += min;
            city[a0_0x3d9b2f(0xe3)](select);
        }
    }
    console[a0_0x3d9b2f(0xd2)](cost);
}