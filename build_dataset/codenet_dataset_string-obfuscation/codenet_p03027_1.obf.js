var a0_0x5324fa = a0_0x4264;
function a0_0x4264(OvUHjP, key) {
    var stringArray = a0_0x4009();
    a0_0x4264 = function (index, key) {
        index = index - 0x13e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4264(OvUHjP, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x29278e = a0_0x4264;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x29278e(0x14c)) / 0x1 + -parseInt(_0x29278e(0x149)) / 0x2 + -parseInt(_0x29278e(0x14b)) / 0x3 * (-parseInt(_0x29278e(0x13f)) / 0x4) + parseInt(_0x29278e(0x146)) / 0x5 + -parseInt(_0x29278e(0x14a)) / 0x6 * (-parseInt(_0x29278e(0x145)) / 0x7) + -parseInt(_0x29278e(0x148)) / 0x8 + -parseInt(_0x29278e(0x143)) / 0x9 * (parseInt(_0x29278e(0x13e)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4009, 0xdc242));
function a0_0x4009() {
    var _0x2b807d = [
        '5464347CPstZo',
        '4745560zDsEVk',
        'map',
        '1606624VVYHxT',
        '3218442Njwaxv',
        '6cHglxs',
        '413091vGFtim',
        '1057121fXDmVE',
        'split',
        '9012890pklTFw',
        '24zitSiT',
        'fill',
        'log',
        'utf8',
        '9evuaoP',
        '/dev/stdin'
    ];
    a0_0x4009 = function () {
        return _0x2b807d;
    };
    return a0_0x4009();
}
function Main(input) {
    var _0x34d4f7 = a0_0x4264;
    input = input[_0x34d4f7(0x14d)]('\x0a');
    var Q = parseInt(input[0x0]);
    var Qs = input['slice'](0x1, Q + 0x1)[_0x34d4f7(0x147)](x => x[_0x34d4f7(0x14d)]('\x20')[_0x34d4f7(0x147)](y => parseInt(y)));
    var ans = new Array(Q);
    ans[_0x34d4f7(0x140)](0x0);
    for (var i = 0x0; i < Qs['length']; i++) {
        for (var j = 0x0; j < Qs[i][0x2]; j++) {
            if (j == 0x0) {
                ans[i] = Qs[i][0x0] % 0xf4243;
            } else {
                ans[i] = ans[i] * (Qs[i][0x0] + j * Qs[i][0x1]) % 0xf4243;
            }
        }
        console[_0x34d4f7(0x141)](ans[i]);
    }
}
Main(require('fs')['readFileSync'](a0_0x5324fa(0x144), a0_0x5324fa(0x142)));