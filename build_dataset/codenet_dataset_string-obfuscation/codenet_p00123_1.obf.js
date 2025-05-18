function a0_0x196c() {
    var _0x4afbaa = [
        '35632490cFpHRy',
        '6720504KvnXPV',
        'split',
        'utf8',
        '/dev/stdin',
        '5XYXtsx',
        'map',
        '8763314JhHOce',
        'forEach',
        '6PEEygO',
        '1141004ZKEBlN',
        'AAA',
        '3187941GcalbX',
        '1234270IPHQVW',
        '18WBqcbO',
        '22kXqSKk',
        '6870708fTGDgt',
        'trim'
    ];
    a0_0x196c = function () {
        return _0x4afbaa;
    };
    return a0_0x196c();
}
var a0_0x21adcf = a0_0x5ab3;
(function (stringArrayFunction, comparisonValue) {
    var _0x561966 = a0_0x5ab3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x561966(0xb3)) / 0x1 + parseInt(_0x561966(0xb6)) / 0x2 + -parseInt(_0x561966(0xb5)) / 0x3 + -parseInt(_0x561966(0xb9)) / 0x4 * (parseInt(_0x561966(0xae)) / 0x5) + parseInt(_0x561966(0xb2)) / 0x6 * (-parseInt(_0x561966(0xb0)) / 0x7) + parseInt(_0x561966(0xaa)) / 0x8 * (-parseInt(_0x561966(0xb7)) / 0x9) + parseInt(_0x561966(0xbb)) / 0xa * (parseInt(_0x561966(0xb8)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x196c, 0xd95a5));
function a0_0x5ab3(XNHAmQ, key) {
    var stringArray = a0_0x196c();
    a0_0x5ab3 = function (index, key) {
        index = index - 0xaa;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ab3(XNHAmQ, key);
}
var input = require('fs')['readFileSync'](a0_0x21adcf(0xad), a0_0x21adcf(0xac));
var Arr = input[a0_0x21adcf(0xba)]()[a0_0x21adcf(0xab)]('\x0a');
Arr[a0_0x21adcf(0xb1)](function (v) {
    var _0x2e8a44 = a0_0x21adcf;
    var arr = v['split']('\x20')[_0x2e8a44(0xaf)](Number);
    var a = arr[0x0];
    var b = arr[0x1];
    var ans;
    if (35.5 > a && 0x47 > b)
        ans = _0x2e8a44(0xb4);
    else if (37.5 > a && 0x4d > b)
        ans = 'AA';
    else if (0x28 > a && 0x53 > b)
        ans = 'A';
    else if (0x2b > a && 0x59 > b)
        ans = 'B';
    else if (0x32 > a && 0x69 > b)
        ans = 'C';
    else if (0x37 > a && 0x74 > b)
        ans = 'D';
    else if (0x46 > a && 0x94 > b)
        ans = 'E';
    else
        ans = 'NA';
    console['log'](ans);
});