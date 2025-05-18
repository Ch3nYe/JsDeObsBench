var a0_0x345ff8 = a0_0x4e00;
(function (stringArrayFunction, comparisonValue) {
    var _0x1b1a27 = a0_0x4e00;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1b1a27(0x1c5)) / 0x1 + -parseInt(_0x1b1a27(0x1bf)) / 0x2 + -parseInt(_0x1b1a27(0x1cd)) / 0x3 * (-parseInt(_0x1b1a27(0x1ca)) / 0x4) + -parseInt(_0x1b1a27(0x1d1)) / 0x5 + parseInt(_0x1b1a27(0x1c8)) / 0x6 * (parseInt(_0x1b1a27(0x1d3)) / 0x7) + parseInt(_0x1b1a27(0x1c9)) / 0x8 + parseInt(_0x1b1a27(0x1cf)) / 0x9 * (parseInt(_0x1b1a27(0x1d4)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x32bc, 0xb650f));
var input = require('fs')[a0_0x345ff8(0x1c7)](a0_0x345ff8(0x1d0), 'utf8');
var Arr = input[a0_0x345ff8(0x1c3)](/\n$/, '')[a0_0x345ff8(0x1cb)]('\x0a');
function a0_0x32bc() {
    var _0x3b7d46 = [
        'map',
        'replace',
        '0\x200',
        '1487005fualpS',
        'concat',
        'readFileSync',
        '579030yhYlLZ',
        '9787144wKkCtd',
        '315148fNDHfm',
        'split',
        'log',
        '33GhEdpr',
        'sort',
        '9gWHGzI',
        '/dev/stdin',
        '6705845QqqFoP',
        'max',
        '77ICAjLE',
        '7286270snxmqd',
        '610582GzMQSH',
        'abs',
        'shift'
    ];
    a0_0x32bc = function () {
        return _0x3b7d46;
    };
    return a0_0x32bc();
}
function a0_0x4e00(iyGOhv, key) {
    var stringArray = a0_0x32bc();
    a0_0x4e00 = function (index, key) {
        index = index - 0x1bf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e00(iyGOhv, key);
}
while (!![]) {
    var str = Arr[a0_0x345ff8(0x1c1)]();
    if (str == a0_0x345ff8(0x1c4))
        break;
    var arr = str[a0_0x345ff8(0x1cb)]('\x20');
    var data = [0x0];
    if (arr[0x0] > 0x0)
        data = data[a0_0x345ff8(0x1c6)](Arr['shift']()[a0_0x345ff8(0x1cb)]('\x20')[a0_0x345ff8(0x1c2)](Number));
    if (arr[0x1] > 0x0)
        data = data[a0_0x345ff8(0x1c6)](Arr[a0_0x345ff8(0x1c1)]()[a0_0x345ff8(0x1cb)]('\x20')[a0_0x345ff8(0x1c2)](Number));
    data[a0_0x345ff8(0x1ce)](function (a, b) {
        return a - b;
    });
    var max = 0x0;
    data['reduce'](function (a, b) {
        var _0x47f944 = a0_0x345ff8;
        max = Math[_0x47f944(0x1d2)](max, Math[_0x47f944(0x1c0)](a - b));
        return b;
    });
    console[a0_0x345ff8(0x1cc)](max);
}