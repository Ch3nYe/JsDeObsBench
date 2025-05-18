function a0_0x5b71(VyjRuV, key) {
    var stringArray = a0_0x3cec();
    a0_0x5b71 = function (index, key) {
        index = index - 0x19b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b71(VyjRuV, key);
}
var a0_0x33274d = a0_0x5b71;
(function (stringArrayFunction, comparisonValue) {
    var _0x425f68 = a0_0x5b71;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x425f68(0x1a7)) / 0x1 + -parseInt(_0x425f68(0x1a3)) / 0x2 * (parseInt(_0x425f68(0x1a5)) / 0x3) + parseInt(_0x425f68(0x1a0)) / 0x4 + -parseInt(_0x425f68(0x19d)) / 0x5 * (parseInt(_0x425f68(0x19e)) / 0x6) + parseInt(_0x425f68(0x1a1)) / 0x7 * (parseInt(_0x425f68(0x1a6)) / 0x8) + parseInt(_0x425f68(0x19b)) / 0x9 + parseInt(_0x425f68(0x1a9)) / 0xa * (parseInt(_0x425f68(0x1a2)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3cec, 0x3cbd8));
var input = require('fs')['readFileSync'](a0_0x33274d(0x1a8), 'utf8');
var Arr = input[a0_0x33274d(0x19c)]()[a0_0x33274d(0x19f)]('\x0a');
function a0_0x3cec() {
    var _0x1fc767 = [
        '88ZrayjD',
        '61108dlLZnY',
        'shift',
        '24eSYuvX',
        '66216lcGiXZ',
        '473416aHERRv',
        '/dev/stdin',
        '686870vvgMGv',
        'log',
        'slice',
        '1159821ZExrcO',
        'trim',
        '240GStwrP',
        '3570SrqQCJ',
        'split',
        '174776LPOhMf',
        '231WQDNDD'
    ];
    a0_0x3cec = function () {
        return _0x1fc767;
    };
    return a0_0x3cec();
}
var L = Arr[a0_0x33274d(0x1a4)]() - 0x0;
for (var i = 0x0; i < L; i++) {
    var str = Arr[i];
    str = str[a0_0x33274d(0x1ab)](0x0, -0x1);
    var num = eval(str);
    console[a0_0x33274d(0x1aa)](parseInt(num, 0xa));
}