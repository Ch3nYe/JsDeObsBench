var a0_0x8e37e7 = a0_0x5da2;
(function (stringArrayFunction, comparisonValue) {
    var _0x23351b = a0_0x5da2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x23351b(0x77)) / 0x1 + -parseInt(_0x23351b(0x70)) / 0x2 + parseInt(_0x23351b(0x73)) / 0x3 + -parseInt(_0x23351b(0x76)) / 0x4 + -parseInt(_0x23351b(0x75)) / 0x5 * (-parseInt(_0x23351b(0x7b)) / 0x6) + -parseInt(_0x23351b(0x6f)) / 0x7 * (-parseInt(_0x23351b(0x79)) / 0x8) + -parseInt(_0x23351b(0x71)) / 0x9 * (-parseInt(_0x23351b(0x72)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4724, 0xd795c));
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[a0_0x8e37e7(0x6e)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x31f341 = a0_0x8e37e7;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x31f341(0x78)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var _0x15b6b8 = a0_0x8e37e7;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x15b6b8(0x78)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0x8e37e7(0x74)]('/dev/stdin', a0_0x8e37e7(0x7c)));
function a0_0x5da2(ysPxER, key) {
    var stringArray = a0_0x4724();
    a0_0x5da2 = function (index, key) {
        index = index - 0x6e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5da2(ysPxER, key);
}
function a0_0x4724() {
    var _0xbabc77 = [
        '5963516VpqjDb',
        '150618usMYeE',
        'length',
        '56ypXzRh',
        'split',
        '9146910bUuspy',
        'utf8',
        'map',
        '736113MUDChD',
        '2822314NwIteh',
        '5020020GegqLO',
        '10wzfxGS',
        '2448228dBQCdi',
        'readFileSync',
        '5tNEbmW'
    ];
    a0_0x4724 = function () {
        return _0xbabc77;
    };
    return a0_0x4724();
}
function Main(input) {
    var _0x48261d = a0_0x8e37e7;
    var input = input[_0x48261d(0x7a)]('\x0a');
    var n = toInt(input[0x0]);
    var as = toIntArr(input[0x1]['split']('\x20'));
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        sum += as[i];
    }
    var bs = as[_0x48261d(0x6e)]((el, ind, arr) => abs(sum - n * el));
    var ans = 0x0;
    var min = bs[0x0];
    for (var i = 0x1; i < n; i++) {
        if (bs[i] < min) {
            min = bs[i];
            ans = i;
        }
    }
    console['log'](ans);
}