var a0_0x26e771 = a0_0x5ce9;
(function (stringArrayFunction, comparisonValue) {
    var _0x1589a1 = a0_0x5ce9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1589a1(0x1df)) / 0x1 * (parseInt(_0x1589a1(0x1e3)) / 0x2) + parseInt(_0x1589a1(0x1e0)) / 0x3 * (-parseInt(_0x1589a1(0x1e7)) / 0x4) + -parseInt(_0x1589a1(0x1da)) / 0x5 + parseInt(_0x1589a1(0x1e8)) / 0x6 + -parseInt(_0x1589a1(0x1e4)) / 0x7 + parseInt(_0x1589a1(0x1e1)) / 0x8 + parseInt(_0x1589a1(0x1de)) / 0x9 * (parseInt(_0x1589a1(0x1db)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x76eb, 0xafd5e));
var input = require('fs')[a0_0x26e771(0x1e6)]('/dev/stdin', a0_0x26e771(0x1e9));
var Arr = input[a0_0x26e771(0x1e2)]()[a0_0x26e771(0x1ea)]('\x0a');
function a0_0x5ce9(bMYkod, key) {
    var stringArray = a0_0x76eb();
    a0_0x5ce9 = function (index, key) {
        index = index - 0x1da;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ce9(bMYkod, key);
}
var cnt = 0x0;
Arr[a0_0x26e771(0x1dd)](function (v) {
    var _0x4c9ea4 = a0_0x26e771;
    var str = v[_0x4c9ea4(0x1ea)]('')[_0x4c9ea4(0x1dc)]()[_0x4c9ea4(0x1e5)]('');
    if (str == v)
        cnt++;
});
function a0_0x76eb() {
    var _0x30a1c4 = [
        '6101720PAasPo',
        'trim',
        '605732sbbvow',
        '2183538yDGvwY',
        'join',
        'readFileSync',
        '200VrRMcD',
        '5033034XcNjcQ',
        'utf8',
        'split',
        '5881390nIFzMf',
        '7960GaWUGo',
        'reverse',
        'forEach',
        '19206OmuzoA',
        '1EcFUlu',
        '83679prUScG'
    ];
    a0_0x76eb = function () {
        return _0x30a1c4;
    };
    return a0_0x76eb();
}
console['log'](cnt);