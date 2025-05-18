function a0_0x1c05() {
    var _0x1f453d = [
        'concat',
        '3455864hByDUc',
        '1vGNpJU',
        '67614yOJHCB',
        '888682CYiRqJ',
        '56rbxUoR',
        'split',
        'push',
        '3553530CjtUZG',
        'input',
        '5poETKk',
        '8694657gJqSTG',
        'readFileSync',
        'newline',
        '513224ByIIxo',
        'max',
        '5550084aAHlvZ'
    ];
    a0_0x1c05 = function () {
        return _0x1f453d;
    };
    return a0_0x1c05();
}
var a0_0x1b4193 = a0_0x1de4;
(function (stringArrayFunction, comparisonValue) {
    var _0x2b1e93 = a0_0x1de4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2b1e93(0x1bb)) / 0x1 * (parseInt(_0x2b1e93(0x1bd)) / 0x2) + parseInt(_0x2b1e93(0x1bc)) / 0x3 + parseInt(_0x2b1e93(0x1ba)) / 0x4 * (-parseInt(_0x2b1e93(0x1c3)) / 0x5) + parseInt(_0x2b1e93(0x1b8)) / 0x6 + parseInt(_0x2b1e93(0x1be)) / 0x7 * (-parseInt(_0x2b1e93(0x1c7)) / 0x8) + parseInt(_0x2b1e93(0x1c4)) / 0x9 + -parseInt(_0x2b1e93(0x1c1)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c05, 0x98b0f));
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const MAX = 0x32;
map0 = [];
for (i = 0x0; i <= MAX; i++)
    map0[a0_0x1b4193(0x1c0)](0x0);
map1 = [][a0_0x1b4193(0x1b9)](map0);
map2 = [][a0_0x1b4193(0x1b9)](map1);
map3 = [][a0_0x1b4193(0x1b9)](map2);
function a0_0x1de4(QZOaAH, key) {
    var stringArray = a0_0x1c05();
    a0_0x1de4 = function (index, key) {
        index = index - 0x1b7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1de4(QZOaAH, key);
}
for (i = 0x0; i <= 0x9; i++)
    map0[i] = 0x1;
function expand_map(map, smaller) {
    var _0x5b8232 = a0_0x1b4193;
    for (var i = 0x0; i < MAX; i++) {
        for (var j = Math[_0x5b8232(0x1b7)](0x0, i - 0x9); j <= i; j++) {
            map[i] += smaller[j];
        }
    }
}
expand_map(map1, map0);
expand_map(map2, map1);
expand_map(map3, map2);
require('fs')[a0_0x1b4193(0x1c5)](config[a0_0x1b4193(0x1c2)], 'ascii')['trim']()[a0_0x1b4193(0x1bf)](config[a0_0x1b4193(0x1c6)])['forEach'](function (line) {
    console['log'](map3[parseInt(line)]);
});