var a0_0x5e74de = a0_0x5bc2;
function a0_0xaecd() {
    var _0x1ffc65 = [
        '799605oNvUOr',
        'length',
        '333998pwvBsb',
        'trim',
        '1664300BsyImc',
        'utf8',
        '18cQoFXK',
        '/dev/stdin',
        '11007prSZCo',
        '976JBOJzu',
        '7178408lqXXeE',
        '7173fShJpn',
        'readFileSync',
        '1354520AghLRW',
        'map',
        '2070oIVGga',
        'split'
    ];
    a0_0xaecd = function () {
        return _0x1ffc65;
    };
    return a0_0xaecd();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x47a866 = a0_0x5bc2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x47a866(0x1fc)) / 0x1 + parseInt(_0x47a866(0x1f4)) / 0x2 * (-parseInt(_0x47a866(0x1f6)) / 0x3) + parseInt(_0x47a866(0x1f8)) / 0x4 + -parseInt(_0x47a866(0x1ef)) / 0x5 + parseInt(_0x47a866(0x1f1)) / 0x6 * (-parseInt(_0x47a866(0x1fe)) / 0x7) + parseInt(_0x47a866(0x1f5)) / 0x8 + -parseInt(_0x47a866(0x1f3)) / 0x9 * (-parseInt(_0x47a866(0x1fa)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xaecd, 0x9daff));
function a0_0x5bc2(BuvSot, key) {
    var stringArray = a0_0xaecd();
    a0_0x5bc2 = function (index, key) {
        index = index - 0x1ef;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5bc2(BuvSot, key);
}
function Main(input) {
    var _0x2098a4 = a0_0x5bc2;
    var max = 0x0;
    var ans = 0x0;
    input = input['split']('\x0a');
    for (var i = 0x1; i < input[_0x2098a4(0x1fd)]; i++) {
        var mem = input[i][_0x2098a4(0x1fb)]('\x20')[_0x2098a4(0x1f9)](Number);
        if (max < mem[0x0]) {
            max = mem[0x0];
            ans = mem[0x0] + mem[0x1];
        }
    }
    console['log'](ans);
}
Main(require('fs')[a0_0x5e74de(0x1f7)](a0_0x5e74de(0x1f2), a0_0x5e74de(0x1f0))[a0_0x5e74de(0x1ff)]());