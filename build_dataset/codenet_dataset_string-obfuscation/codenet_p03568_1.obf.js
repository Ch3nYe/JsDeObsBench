function a0_0x175b(KQsWlP, key) {
    var stringArray = a0_0x1ce6();
    a0_0x175b = function (index, key) {
        index = index - 0x181;
        var value = stringArray[index];
        return value;
    };
    return a0_0x175b(KQsWlP, key);
}
function a0_0x1ce6() {
    var _0x359d6b = [
        '335OfBmIc',
        'map',
        'pow',
        '145551xFIHwL',
        '1552649JXGIMm',
        '/dev/stdin',
        '9TcWqMP',
        '8uXXPcA',
        'log',
        'forEach',
        'split',
        '1367692flmluC',
        'utf8',
        '3911121meinHl',
        '137118UMszRt',
        '23688JNmROl',
        '4891890PxHILQ'
    ];
    a0_0x1ce6 = function () {
        return _0x359d6b;
    };
    return a0_0x1ce6();
}
var a0_0x461076 = a0_0x175b;
(function (stringArrayFunction, comparisonValue) {
    var _0x55cc1d = a0_0x175b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x55cc1d(0x18e)) / 0x1 + -parseInt(_0x55cc1d(0x188)) / 0x2 * (parseInt(_0x55cc1d(0x191)) / 0x3) + -parseInt(_0x55cc1d(0x185)) / 0x4 + -parseInt(_0x55cc1d(0x18b)) / 0x5 * (-parseInt(_0x55cc1d(0x189)) / 0x6) + -parseInt(_0x55cc1d(0x18f)) / 0x7 + parseInt(_0x55cc1d(0x181)) / 0x8 * (parseInt(_0x55cc1d(0x187)) / 0x9) + parseInt(_0x55cc1d(0x18a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1ce6, 0x42ba4));
function Main(input) {
    var _0xe346ab = a0_0x175b;
    input = input[_0xe346ab(0x184)]('\x0a');
    var n = Math[_0xe346ab(0x18d)](0x3, input[0x0]);
    var sum = 0x1;
    var arr = input[0x1][_0xe346ab(0x184)]('\x20')[_0xe346ab(0x18c)](Number);
    arr[_0xe346ab(0x183)](function (val) {
        if (val % 0x2 == 0x0)
            sum *= 0x2;
    });
    console[_0xe346ab(0x182)](n - sum);
}
Main(require('fs')['readFileSync'](a0_0x461076(0x190), a0_0x461076(0x186))['trim']());