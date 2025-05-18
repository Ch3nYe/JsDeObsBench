var a0_0x5ed1dd = a0_0x18c2;
(function (stringArrayFunction, comparisonValue) {
    var _0x45e452 = a0_0x18c2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x45e452(0x112)) / 0x1 * (parseInt(_0x45e452(0x115)) / 0x2) + -parseInt(_0x45e452(0x114)) / 0x3 + -parseInt(_0x45e452(0x11a)) / 0x4 * (-parseInt(_0x45e452(0x116)) / 0x5) + parseInt(_0x45e452(0x110)) / 0x6 + parseInt(_0x45e452(0x118)) / 0x7 + -parseInt(_0x45e452(0x10e)) / 0x8 * (-parseInt(_0x45e452(0x111)) / 0x9) + parseInt(_0x45e452(0x113)) / 0xa * (parseInt(_0x45e452(0x11d)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x33a8, 0x29884));
function a0_0x18c2(VCAcbm, key) {
    var stringArray = a0_0x33a8();
    a0_0x18c2 = function (index, key) {
        index = index - 0x10e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18c2(VCAcbm, key);
}
function Main(input) {
    var _0x55d605 = a0_0x18c2;
    input = input[_0x55d605(0x11c)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var x = input[0x1][_0x55d605(0x11c)]('\x20');
    var y = new Array(n);
    var count = 0x0;
    var count2 = 0x0;
    var a = 0x3b9aca07;
    for (var i = 0x0; i < n; i++) {
        x[i] = parseInt(x[i], 0xa);
        y[i] = Math[_0x55d605(0x11e)](x[i] / 0x100000000);
        x[i] = x[i] % 0x100000000;
    }
    for (var i = 0x0; i < n - 0x1; i++) {
        for (var j = i + 0x1; j < n; j++) {
            count += x[i] ^ x[j];
            if (count > 0x100000000 / 0x2) {
                count = count % (0x100000000 / 0x2);
                count2 += 0.5;
            }
            count2 += y[i] ^ y[j];
        }
    }
    count = count + count2 * 0x100000000;
    console[_0x55d605(0x11b)](count % a);
}
Main(require('fs')[a0_0x5ed1dd(0x119)](a0_0x5ed1dd(0x117), a0_0x5ed1dd(0x10f)));
function a0_0x33a8() {
    var _0x12e5ef = [
        '/dev/stdin',
        '25641uUrMIC',
        'readFileSync',
        '262516EKefXB',
        'log',
        'split',
        '76549UMWskm',
        'floor',
        '8PrIPFv',
        'utf8',
        '491058KaYuRG',
        '644463pTZJgT',
        '22VlXYzc',
        '640LuAPDA',
        '616734cRmlmR',
        '26584HyZjJr',
        '5ceFqEG'
    ];
    a0_0x33a8 = function () {
        return _0x12e5ef;
    };
    return a0_0x33a8();
}