var a0_0x27844f = a0_0x3225;
(function (stringArrayFunction, comparisonValue) {
    var _0x467fcc = a0_0x3225;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x467fcc(0x12f)) / 0x1 + parseInt(_0x467fcc(0x121)) / 0x2 + parseInt(_0x467fcc(0x12e)) / 0x3 + parseInt(_0x467fcc(0x12a)) / 0x4 * (parseInt(_0x467fcc(0x12c)) / 0x5) + parseInt(_0x467fcc(0x124)) / 0x6 * (parseInt(_0x467fcc(0x128)) / 0x7) + -parseInt(_0x467fcc(0x122)) / 0x8 * (-parseInt(_0x467fcc(0x123)) / 0x9) + parseInt(_0x467fcc(0x12d)) / 0xa * (-parseInt(_0x467fcc(0x12b)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x702d, 0x4473e));
var input = require('fs')[a0_0x27844f(0x126)]('/dev/stdin', 'utf8');
var arr = input[a0_0x27844f(0x130)]()['split']('\x0a');
var n = arr[a0_0x27844f(0x131)]() - 0x0;
function a0_0x702d() {
    var _0x55c6c2 = [
        'set',
        'readFileSync',
        'has',
        '106239GgDnIw',
        'log',
        '728164xQAlKP',
        '121MvKdxx',
        '5asqyDZ',
        '316670aKUSvF',
        '892608ldQaVe',
        '395926afMWQF',
        'trim',
        'shift',
        '46586HPyKCo',
        '88UjQvNZ',
        '339984AQiglI',
        '42bnXNVe'
    ];
    a0_0x702d = function () {
        return _0x55c6c2;
    };
    return a0_0x702d();
}
function a0_0x3225(uSTovI, key) {
    var stringArray = a0_0x702d();
    a0_0x3225 = function (index, key) {
        index = index - 0x121;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3225(uSTovI, key);
}
var a = arr[a0_0x27844f(0x131)]()['split']('\x20');
var myMap = new Map();
for (var i = 0x0; i < n; i++) {
    myMap[a0_0x27844f(0x125)](a[i], 0x0);
}
var q = arr[a0_0x27844f(0x131)]();
var s = '';
for (var i = 0x0; i < q; i++) {
    s += (myMap[a0_0x27844f(0x127)](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
console[a0_0x27844f(0x129)](s[a0_0x27844f(0x130)]());