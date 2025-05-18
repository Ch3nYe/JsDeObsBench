var a0_0x49a658 = a0_0x21ac;
function a0_0x21ac(DfHedv, key) {
    var stringArray = a0_0x2180();
    a0_0x21ac = function (index, key) {
        index = index - 0x1ce;
        var value = stringArray[index];
        return value;
    };
    return a0_0x21ac(DfHedv, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x203198 = a0_0x21ac;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x203198(0x1d0)) / 0x1 + parseInt(_0x203198(0x1d7)) / 0x2 + -parseInt(_0x203198(0x1df)) / 0x3 + -parseInt(_0x203198(0x1da)) / 0x4 * (parseInt(_0x203198(0x1de)) / 0x5) + -parseInt(_0x203198(0x1d2)) / 0x6 + -parseInt(_0x203198(0x1db)) / 0x7 + parseInt(_0x203198(0x1cf)) / 0x8 * (parseInt(_0x203198(0x1d6)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2180, 0xaa333));
function a0_0x2180() {
    var _0x111571 = [
        'shift',
        '23415111rwXcak',
        '2504324WqTSWs',
        'filter',
        'log',
        '8aimoJU',
        '5511184baLfWl',
        '/dev/stdin',
        'split',
        '437455HXYjEY',
        '2000124eOdzjQ',
        'utf8',
        '8LwisrT',
        '1229323pQwkwY',
        'readFileSync',
        '1790262zuJaLG',
        'map',
        'trim'
    ];
    a0_0x2180 = function () {
        return _0x111571;
    };
    return a0_0x2180();
}
var input = require('fs')[a0_0x49a658(0x1d1)](a0_0x49a658(0x1dc), a0_0x49a658(0x1ce));
var Arr = input[a0_0x49a658(0x1d4)]()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x49a658(0x1d5)]() - 0x0;
    if (n === 0x0)
        break;
    var arr = Arr[a0_0x49a658(0x1d5)]()[a0_0x49a658(0x1dd)]('\x20')[a0_0x49a658(0x1d3)](Number);
    for (var i = 0x0; i < n + 0x1; i++) {
        var a = arr[a0_0x49a658(0x1d8)](function (v, index) {
            return i != index;
        });
        var h = a[0x1] - a[0x0];
        var flag = !![];
        for (var j = 0x1; j < n; j++) {
            if (h != a[j] - a[j - 0x1])
                flag = ![];
        }
        if (flag == !![])
            break;
    }
    console[a0_0x49a658(0x1d9)](arr[i]);
}