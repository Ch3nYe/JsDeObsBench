function a0_0x4573(hRsNBc, key) {
    var stringArray = a0_0x3c72();
    a0_0x4573 = function (index, key) {
        index = index - 0x1ea;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4573(hRsNBc, key);
}
var a0_0x294370 = a0_0x4573;
function a0_0x3c72() {
    var _0x2bbd90 = [
        '12113NHOekG',
        '310724KAlsPS',
        '158ZKayPL',
        '8hXkClB',
        '/dev/stdin',
        '5450346dSRKYQ',
        '510yfwnqq',
        '649847WELwFZ',
        'readFileSync',
        '10170713nvuhqD',
        '5086494ddAgtq',
        'forEach',
        '15EiSVqY',
        '4006974wVPjly',
        'abs'
    ];
    a0_0x3c72 = function () {
        return _0x2bbd90;
    };
    return a0_0x3c72();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x20aca6 = a0_0x4573;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x20aca6(0x1f8)) / 0x1 * (-parseInt(_0x20aca6(0x1eb)) / 0x2) + -parseInt(_0x20aca6(0x1f6)) / 0x3 + -parseInt(_0x20aca6(0x1ea)) / 0x4 * (-parseInt(_0x20aca6(0x1f5)) / 0x5) + -parseInt(_0x20aca6(0x1f3)) / 0x6 + parseInt(_0x20aca6(0x1f2)) / 0x7 * (parseInt(_0x20aca6(0x1ec)) / 0x8) + -parseInt(_0x20aca6(0x1ee)) / 0x9 + parseInt(_0x20aca6(0x1ef)) / 0xa * (parseInt(_0x20aca6(0x1f0)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3c72, 0xe8aa9));
function Main(input) {
    var _0x79184b = a0_0x4573;
    input = input['split'](/\s/);
    input[_0x79184b(0x1f4)](function (e, i, a) {
        a[i] = Number(a[i]);
    });
    var ans = 'No';
    if (Math[_0x79184b(0x1f7)](input[0x0] - input[0x2]) <= input[0x3]) {
        ans = 'Yes';
    }
    if (Math['abs'](input[0x0] - input[0x1]) <= input[0x3] && Math[_0x79184b(0x1f7)](input[0x1] - input[0x2]) <= input[0x3]) {
        ans = 'Yes';
    }
    console['log'](ans);
}
Main(require('fs')[a0_0x294370(0x1f1)](a0_0x294370(0x1ed), 'utf8'));