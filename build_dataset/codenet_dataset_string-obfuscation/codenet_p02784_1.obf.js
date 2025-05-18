function a0_0x452a(MByGhh, key) {
    var stringArray = a0_0x3dd1();
    a0_0x452a = function (index, key) {
        index = index - 0x9b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x452a(MByGhh, key);
}
var a0_0x4f3de6 = a0_0x452a;
function a0_0x3dd1() {
    var _0x193bcc = [
        '144044BaGtbq',
        'Yes',
        '30714hQitqi',
        '23800uiTQEC',
        'readFileSync',
        'map',
        'log',
        '434692kDsDfK',
        '326841RCEAJp',
        '194210XDWztA',
        '1078DLsMWJ',
        'split',
        'ceil',
        '2374146pHbvzu',
        '365SXqeIz',
        '517HnnSyg',
        '9xKWHBW'
    ];
    a0_0x3dd1 = function () {
        return _0x193bcc;
    };
    return a0_0x3dd1();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x31457f = a0_0x452a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x31457f(0x9b)) / 0x1 + parseInt(_0x31457f(0xa4)) / 0x2 + -parseInt(_0x31457f(0xa3)) / 0x3 * (parseInt(_0x31457f(0xab)) / 0x4) + -parseInt(_0x31457f(0xa1)) / 0x5 * (-parseInt(_0x31457f(0xa6)) / 0x6) + parseInt(_0x31457f(0x9d)) / 0x7 * (parseInt(_0x31457f(0xa7)) / 0x8) + parseInt(_0x31457f(0xa0)) / 0x9 + parseInt(_0x31457f(0x9c)) / 0xa * (-parseInt(_0x31457f(0xa2)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3dd1, 0x3e6c8));
function main(input) {
    var _0x4db1ab = a0_0x452a;
    var line = input[_0x4db1ab(0x9e)](/\r?\n/g);
    var arr = line[0x0][_0x4db1ab(0x9e)]('\x20');
    const H = arr[0x0], N = arr[0x1];
    var A = line[0x1]['split']('\x20')[_0x4db1ab(0xa9)](Number);
    A = A['reduce']((A, x) => A + x);
    console[_0x4db1ab(0xaa)](0x1 < Math[_0x4db1ab(0x9f)](H / A) ? 'No' : _0x4db1ab(0xa5));
}
main(require('fs')[a0_0x4f3de6(0xa8)]('/dev/stdin', 'utf8'));