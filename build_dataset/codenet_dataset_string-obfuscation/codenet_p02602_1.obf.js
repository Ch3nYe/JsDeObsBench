var a0_0x369996 = a0_0x1158;
function a0_0x1158(akkqJd, key) {
    var stringArray = a0_0x29b5();
    a0_0x1158 = function (index, key) {
        index = index - 0x1d2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1158(akkqJd, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x6753c2 = a0_0x1158;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x6753c2(0x1dc)) / 0x1 + -parseInt(_0x6753c2(0x1d8)) / 0x2 * (-parseInt(_0x6753c2(0x1e3)) / 0x3) + -parseInt(_0x6753c2(0x1de)) / 0x4 * (-parseInt(_0x6753c2(0x1e0)) / 0x5) + -parseInt(_0x6753c2(0x1e4)) / 0x6 * (parseInt(_0x6753c2(0x1e1)) / 0x7) + parseInt(_0x6753c2(0x1e6)) / 0x8 * (-parseInt(_0x6753c2(0x1d6)) / 0x9) + parseInt(_0x6753c2(0x1dd)) / 0xa * (-parseInt(_0x6753c2(0x1d9)) / 0xb) + parseInt(_0x6753c2(0x1d7)) / 0xc * (parseInt(_0x6753c2(0x1db)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x29b5, 0xe6975));
function Main(input) {
    var _0x4a8df6 = a0_0x1158;
    input = input[_0x4a8df6(0x1d4)](/\n/g, '\x20');
    input = input[_0x4a8df6(0x1df)]('\x20');
    var A = Number(input[0x0]);
    var B = Number(input[0x1]);
    input = input['slice'](0x2);
    for (var i = 0x0; i < input[_0x4a8df6(0x1da)] - B; i++) {
        if (Number(input[i]) < Number(input[i + B])) {
            console[_0x4a8df6(0x1e5)](_0x4a8df6(0x1d3));
        } else {
            console['log']('No');
        }
    }
}
Main(require('fs')[a0_0x369996(0x1e2)](a0_0x369996(0x1d5), a0_0x369996(0x1d2)));
function a0_0x29b5() {
    var _0x21f700 = [
        '4015aVrnmV',
        'length',
        '13oRPocp',
        '742014QngXTU',
        '48610qmxZJa',
        '5938776ixnYfj',
        'split',
        '5jTznsn',
        '7nsuUkt',
        'readFileSync',
        '549663WHoheT',
        '807582ZFaVxc',
        'log',
        '2892912WEexPu',
        'utf8',
        'Yes',
        'replace',
        '/dev/stdin',
        '9zVePjb',
        '7461924RcQiyr',
        '4fKoBpY'
    ];
    a0_0x29b5 = function () {
        return _0x21f700;
    };
    return a0_0x29b5();
}