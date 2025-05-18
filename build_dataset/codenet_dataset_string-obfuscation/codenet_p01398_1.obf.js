var a0_0x82ea48 = a0_0x5d77;
(function (stringArrayFunction, comparisonValue) {
    var _0x2b6ee3 = a0_0x5d77;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2b6ee3(0xb2)) / 0x1 + parseInt(_0x2b6ee3(0xa8)) / 0x2 + parseInt(_0x2b6ee3(0xad)) / 0x3 + parseInt(_0x2b6ee3(0xa6)) / 0x4 + parseInt(_0x2b6ee3(0xb8)) / 0x5 * (parseInt(_0x2b6ee3(0xa5)) / 0x6) + -parseInt(_0x2b6ee3(0xaf)) / 0x7 + parseInt(_0x2b6ee3(0xb4)) / 0x8 * (-parseInt(_0x2b6ee3(0xb6)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4612, 0x80e52));
var objStr = {};
var objNum = {};
var abc = a0_0x82ea48(0xa3)['split']('');
function a0_0x4612() {
    var _0x427690 = [
        'shift',
        '5032285zQJRay',
        'abcdefghijklmnopqrstuvwxyz',
        'push',
        '6fjeUhq',
        '1981732YPZyne',
        'reverse',
        '1569100KtJdGC',
        'utf8',
        'forEach',
        '/dev/stdin',
        'map',
        '2708529lOteru',
        'split',
        '1455055UwFlbR',
        'readFileSync',
        'trim',
        '869665WTuucD',
        'length',
        '11384qEtcca',
        'join',
        '10017CKUNgH'
    ];
    a0_0x4612 = function () {
        return _0x427690;
    };
    return a0_0x4612();
}
abc[a0_0x82ea48(0xaa)](function (v, i) {
    objStr[v] = i;
    objNum[i] = v;
});
var input = require('fs')[a0_0x82ea48(0xb0)](a0_0x82ea48(0xab), a0_0x82ea48(0xa9));
function a0_0x5d77(UScmox, key) {
    var stringArray = a0_0x4612();
    a0_0x5d77 = function (index, key) {
        index = index - 0xa3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5d77(UScmox, key);
}
var Arr = input[a0_0x82ea48(0xb1)]()['split']('\x0a');
while (!![]) {
    var N = Arr[a0_0x82ea48(0xb7)]() - 0x0;
    if (N == 0x0)
        break;
    var str = Arr[a0_0x82ea48(0xb7)]();
    var AB = [];
    for (var i = 0x0; i < N; i++) {
        var ab = Arr[a0_0x82ea48(0xb7)]()[a0_0x82ea48(0xae)]('\x20')[a0_0x82ea48(0xac)](Number);
        AB[a0_0x82ea48(0xa4)](ab);
    }
    AB[a0_0x82ea48(0xa7)]();
    var s = str[a0_0x82ea48(0xae)]('');
    for (var i = 0x0; i < N; i++) {
        var ab = AB[i];
        var plus = ab[0x1] - ab[0x0];
        var m1 = s[ab[0x0] - 0x1];
        var m2 = s[ab[0x1] - 0x1];
        var n1 = objStr[m1] + plus;
        var n2 = objStr[m2] + plus;
        s[ab[0x0] - 0x1] = objNum[n2 % abc[a0_0x82ea48(0xb3)]];
        s[ab[0x1] - 0x1] = objNum[n1 % abc['length']];
    }
    console['log'](s[a0_0x82ea48(0xb5)](''));
}