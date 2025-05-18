var a0_0x2ca379 = a0_0x5db6;
(function (stringArrayFunction, comparisonValue) {
    var _0x3f2619 = a0_0x5db6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3f2619(0xf1)) / 0x1 * (parseInt(_0x3f2619(0xf4)) / 0x2) + -parseInt(_0x3f2619(0xee)) / 0x3 * (parseInt(_0x3f2619(0xf8)) / 0x4) + -parseInt(_0x3f2619(0x101)) / 0x5 * (-parseInt(_0x3f2619(0xf2)) / 0x6) + parseInt(_0x3f2619(0xf0)) / 0x7 * (-parseInt(_0x3f2619(0xff)) / 0x8) + parseInt(_0x3f2619(0xfb)) / 0x9 * (-parseInt(_0x3f2619(0xfd)) / 0xa) + -parseInt(_0x3f2619(0xfa)) / 0xb + parseInt(_0x3f2619(0xf5)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4ad9, 0x2ff78));
process[a0_0x2ca379(0xf7)][a0_0x2ca379(0xfe)]();
process[a0_0x2ca379(0xf7)][a0_0x2ca379(0xfc)](a0_0x2ca379(0xf3));
function a0_0x4ad9() {
    var _0x2a432d = [
        'utf8',
        '1504qtOQPd',
        '13877916MMwpQG',
        'shift',
        'stdin',
        '52JPZlia',
        'log',
        '3944028AsDPlk',
        '8019eOOgra',
        'setEncoding',
        '3770APUwBa',
        'resume',
        '8ULuvJe',
        'split',
        '7455qsUYKf',
        'toString',
        '62019hcwBwz',
        'data',
        '766745hNnQfA',
        '92JOUkSp',
        '732CAgbUo'
    ];
    a0_0x4ad9 = function () {
        return _0x2a432d;
    };
    return a0_0x4ad9();
}
function a0_0x5db6(WpOSck, key) {
    var stringArray = a0_0x4ad9();
    a0_0x5db6 = function (index, key) {
        index = index - 0xee;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5db6(WpOSck, key);
}
process[a0_0x2ca379(0xf7)]['on'](a0_0x2ca379(0xef), function (chunk) {
    var _0x287d85 = a0_0x2ca379;
    var aaa = chunk[_0x287d85(0x102)]();
    var line = aaa[_0x287d85(0x100)]('\x0a');
    line[_0x287d85(0xf6)]();
    for (var i in line) {
        var l = line[i][_0x287d85(0x100)]('\x20');
        for (var i in l) {
            l[i] = new Number(l[i]);
        }
        l['sort'](function (a, b) {
            if (a > b)
                return -0x1;
            if (a < b)
                return 0x1;
            return 0x0;
        });
        var num1 = new Number(l[0x0]) * new Number(l[0x0]);
        var num2 = new Number(l[0x1]) * new Number(l[0x1]);
        var num3 = new Number(l[0x2]) * new Number(l[0x2]);
        var num4 = num2 + num3;
        if (num1 === num4) {
            console[_0x287d85(0xf9)]('YES');
        } else {
            console[_0x287d85(0xf9)]('NO');
        }
    }
});