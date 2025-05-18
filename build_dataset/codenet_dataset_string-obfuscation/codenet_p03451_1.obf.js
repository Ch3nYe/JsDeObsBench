var a0_0x5031d7 = a0_0x3342;
(function (stringArrayFunction, comparisonValue) {
    var _0x5611ce = a0_0x3342;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5611ce(0xf1)) / 0x1 + parseInt(_0x5611ce(0xf2)) / 0x2 * (-parseInt(_0x5611ce(0xeb)) / 0x3) + -parseInt(_0x5611ce(0xec)) / 0x4 + parseInt(_0x5611ce(0xf6)) / 0x5 + -parseInt(_0x5611ce(0xf5)) / 0x6 + -parseInt(_0x5611ce(0xea)) / 0x7 * (-parseInt(_0x5611ce(0xef)) / 0x8) + -parseInt(_0x5611ce(0xe9)) / 0x9 * (-parseInt(_0x5611ce(0xf3)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4c04, 0xed7bd));
function a0_0x3342(EgemPp, key) {
    var stringArray = a0_0x4c04();
    a0_0x3342 = function (index, key) {
        index = index - 0xe7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3342(EgemPp, key);
}
function a0_0x4c04() {
    var _0x2557b9 = [
        '6479112QqGTsa',
        'slice',
        'utf8',
        '1771584BbzoFO',
        'readFileSync',
        '1437174qQbunb',
        '42808vdjkct',
        '20nbyIfF',
        'length',
        '2950866LZeWXE',
        '1416220hFRjFa',
        'log',
        'map',
        'split',
        '/dev/stdin',
        '1729206CGgVGP',
        '56iPaNHT',
        '111dvBzlp'
    ];
    a0_0x4c04 = function () {
        return _0x2557b9;
    };
    return a0_0x4c04();
}
function Main(input) {
    var _0x200332 = a0_0x3342;
    input = input['split']('\x0a');
    var a1 = input[0x1][_0x200332(0xe7)]('\x20')[_0x200332(0xf8)](e => {
        return parseInt(e);
    });
    var a2 = input[0x2][_0x200332(0xe7)]('\x20')[_0x200332(0xf8)](e => {
        return parseInt(e);
    });
    var j = a1[_0x200332(0xf4)] - 0x1;
    var m = 0x0, n = a1[_0x200332(0xf4)] - 0x2;
    var r = 0x0;
    var temp;
    for (var i = j; i >= m; i--) {
        temp = sum(a1[_0x200332(0xed)](m, i + 0x1)) + sum(a2[_0x200332(0xed)](i));
        if (r < temp)
            r = temp;
    }
    function sum(arr) {
        var _0x369ae3 = _0x200332;
        var r = 0x0;
        for (var i = 0x0; i < arr[_0x369ae3(0xf4)]; i++) {
            r += arr[i];
        }
        return r;
    }
    console[_0x200332(0xf7)](r);
}
Main(require('fs')[a0_0x5031d7(0xf0)](a0_0x5031d7(0xe8), a0_0x5031d7(0xee)));