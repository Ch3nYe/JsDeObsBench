var a0_0xd6224f = a0_0x168f;
(function (stringArrayFunction, comparisonValue) {
    var _0x28c8c9 = a0_0x168f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x28c8c9(0x184)) / 0x1 + -parseInt(_0x28c8c9(0x17f)) / 0x2 + -parseInt(_0x28c8c9(0x185)) / 0x3 * (-parseInt(_0x28c8c9(0x189)) / 0x4) + -parseInt(_0x28c8c9(0x181)) / 0x5 * (parseInt(_0x28c8c9(0x188)) / 0x6) + parseInt(_0x28c8c9(0x18b)) / 0x7 + parseInt(_0x28c8c9(0x186)) / 0x8 + parseInt(_0x28c8c9(0x187)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3ed8, 0xb9ab3));
function a0_0x168f(Eviaim, key) {
    var stringArray = a0_0x3ed8();
    a0_0x168f = function (index, key) {
        index = index - 0x17f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x168f(Eviaim, key);
}
function Main(input) {
    var _0x39219a = a0_0x168f;
    var args = input[_0x39219a(0x18a)]()['split']('\x20')[_0x39219a(0x18c)](Number);
    var nums = args[0x1] * 0x2;
    var ans = 0x0;
    if (nums <= args[0x0]) {
        ans = args[0x0] - nums;
    }
    console[_0x39219a(0x18d)](ans);
}
function a0_0x3ed8() {
    var _0xee1730 = [
        '/dev/stdin',
        'utf8',
        '775708PNnTpU',
        '3VQCaRc',
        '7496288BDdmDi',
        '18073809vtKyUW',
        '6PaOIva',
        '4506812NMzLqw',
        'trim',
        '618352zQbSqx',
        'map',
        'log',
        '2287448yVqlIH',
        'readFileSync',
        '7401725KZGhjF'
    ];
    a0_0x3ed8 = function () {
        return _0xee1730;
    };
    return a0_0x3ed8();
}
Main(require('fs')[a0_0xd6224f(0x180)](a0_0xd6224f(0x182), a0_0xd6224f(0x183)));