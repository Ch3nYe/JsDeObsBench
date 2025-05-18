var a0_0x1bf6a5 = a0_0x4334;
(function (stringArrayFunction, comparisonValue) {
    var _0x4dc035 = a0_0x4334;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4dc035(0xbc)) / 0x1 * (parseInt(_0x4dc035(0xbe)) / 0x2) + -parseInt(_0x4dc035(0xbb)) / 0x3 * (-parseInt(_0x4dc035(0xae)) / 0x4) + parseInt(_0x4dc035(0xb2)) / 0x5 * (-parseInt(_0x4dc035(0xb9)) / 0x6) + -parseInt(_0x4dc035(0xb4)) / 0x7 + -parseInt(_0x4dc035(0xbf)) / 0x8 * (-parseInt(_0x4dc035(0xbd)) / 0x9) + parseInt(_0x4dc035(0xb7)) / 0xa + parseInt(_0x4dc035(0xb1)) / 0xb * (-parseInt(_0x4dc035(0xc1)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2640, 0xa99c9));
var input = require('fs')[a0_0x1bf6a5(0xc2)](a0_0x1bf6a5(0xb5), 'utf8');
var Arr = input[a0_0x1bf6a5(0xb3)]()['split']('\x0a');
var m = Arr[a0_0x1bf6a5(0xaf)]() - 0x0;
var n = Arr['shift']() - 0x0;
var M = [];
var check = [];
for (var i = 0x0; i < m; i++)
    M[i] = [];
function a0_0x4334(XenCdS, key) {
    var stringArray = a0_0x2640();
    a0_0x4334 = function (index, key) {
        index = index - 0xae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4334(XenCdS, key);
}
for (var i = 0x0; i < m; i++)
    check[i] = ![];
function a0_0x2640() {
    var _0x4e0450 = [
        '3405UyxNws',
        'trim',
        '5609786HKFazE',
        '/dev/stdin',
        'reverse',
        '9303330wzLwko',
        'map',
        '1542oUpkOa',
        'forEach',
        '2862FETajh',
        '2wdVXes',
        '27TAeqGa',
        '499354qSvbnL',
        '1303168wsOEKB',
        'push',
        '6998028bKXSpO',
        'readFileSync',
        '5596cuKwGS',
        'shift',
        'split',
        '11EEBmmn'
    ];
    a0_0x2640 = function () {
        return _0x4e0450;
    };
    return a0_0x2640();
}
for (var i = 0x0; i < n; i++) {
    var v = Arr[a0_0x1bf6a5(0xaf)]()[a0_0x1bf6a5(0xb0)]('\x20')[a0_0x1bf6a5(0xb8)](Number);
    M[v[0x0] - 0x1]['push'](v[0x1] - 0x1);
}
var L = [];
for (var i = 0x0; i < m; i++) {
    visit(i);
}
function visit(x) {
    var _0x196838 = a0_0x1bf6a5;
    if (check[x] == !![])
        return;
    else
        check[x] = !![];
    M[x][_0x196838(0xba)](function (v) {
        visit(v);
    });
    L[_0x196838(0xc0)](x);
}
L[a0_0x1bf6a5(0xb6)]();
L[a0_0x1bf6a5(0xba)](function (v) {
    console['log'](v + 0x1);
});