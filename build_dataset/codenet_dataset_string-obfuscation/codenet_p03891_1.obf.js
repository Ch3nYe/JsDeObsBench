function a0_0x5573(ifCnTu, key) {
    var stringArray = a0_0x9c1f();
    a0_0x5573 = function (index, key) {
        index = index - 0x1f4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5573(ifCnTu, key);
}
var a0_0x4ca733 = a0_0x5573;
function a0_0x9c1f() {
    var _0x967f96 = [
        'readFileSync',
        '1081494fteWwn',
        '2120hVbyLp',
        '210950mFedbL',
        '273IXlHTB',
        '1077096juxyjj',
        '730124wkPVkH',
        '2181543jkocEy',
        '15tfqjMB',
        '90GufCyA',
        '/dev/stdin',
        '16AxERDY',
        '30moUReZ',
        '3547302RsXYBX',
        'utf8',
        '102VpbBDu',
        'map',
        'log'
    ];
    a0_0x9c1f = function () {
        return _0x967f96;
    };
    return a0_0x9c1f();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x586a1e = a0_0x5573;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x586a1e(0x204)) / 0x1 * (-parseInt(_0x586a1e(0x1f9)) / 0x2) + parseInt(_0x586a1e(0x1f8)) / 0x3 * (parseInt(_0x586a1e(0x1f6)) / 0x4) + parseInt(_0x586a1e(0x205)) / 0x5 * (parseInt(_0x586a1e(0x1ff)) / 0x6) + -parseInt(_0x586a1e(0x1f7)) / 0x7 * (-parseInt(_0x586a1e(0x1fb)) / 0x8) + parseInt(_0x586a1e(0x203)) / 0x9 * (parseInt(_0x586a1e(0x1fc)) / 0xa) + -parseInt(_0x586a1e(0x1fd)) / 0xb + -parseInt(_0x586a1e(0x1f5)) / 0xc * (parseInt(_0x586a1e(0x1f4)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x9c1f, 0x7a7b1));
function Main(input) {
    var _0x292711 = a0_0x5573;
    var data = input['split'](/\a\n|\a|\n/)[_0x292711(0x200)](function (s) {
        return parseInt(s);
    });
    var x = [
        [
            data[0x0],
            data[0x1],
            0x0
        ],
        [
            0x0,
            data[0x2],
            0x0
        ],
        [
            0x0,
            0x0,
            0x0
        ]
    ];
    var sum = 0x3 * x[0x1][0x1];
    x[0x0][0x2] = sum - x[0x0][0x0] - x[0x0][0x1];
    x[0x2][0x1] = sum - x[0x0][0x1] - x[0x1][0x1];
    x[0x2][0x2] = sum - x[0x0][0x0] - x[0x1][0x1];
    x[0x2][0x0] = sum - x[0x2][0x1] - x[0x2][0x2];
    x[0x1][0x0] = sum - x[0x0][0x0] - x[0x2][0x0];
    x[0x1][0x2] = sum - x[0x0][0x2] - x[0x2][0x2];
    console[_0x292711(0x201)](x[0x0][0x0] + '\x20' + x[0x0][0x1] + '\x20' + x[0x0][0x2]);
    console[_0x292711(0x201)](x[0x1][0x0] + '\x20' + x[0x1][0x1] + '\x20' + x[0x1][0x2]);
    console[_0x292711(0x201)](x[0x2][0x0] + '\x20' + x[0x2][0x1] + '\x20' + x[0x2][0x2]);
}
Main(require('fs')[a0_0x4ca733(0x202)](a0_0x4ca733(0x1fa), a0_0x4ca733(0x1fe)));