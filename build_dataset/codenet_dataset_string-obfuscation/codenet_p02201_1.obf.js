function a0_0xd698() {
    var _0x3ce3a8 = [
        '/dev/stdin',
        '7134192ObivlF',
        'log',
        '24yvBkUx',
        'shift',
        '108966WruWJi',
        '1234680djSYXl',
        '92540ZNoqDX',
        '584974xbaFZY',
        '42MJZXND',
        'E869120',
        'split',
        '630645lvjWwY',
        'trim',
        '24irzTHO',
        '50bnhhbE',
        '1401296BmWuYB',
        'utf8'
    ];
    a0_0xd698 = function () {
        return _0x3ce3a8;
    };
    return a0_0xd698();
}
var a0_0x1e3f2c = a0_0x5742;
function a0_0x5742(VpbUsg, key) {
    var stringArray = a0_0xd698();
    a0_0x5742 = function (index, key) {
        index = index - 0x144;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5742(VpbUsg, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0xdcffb0 = a0_0x5742;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xdcffb0(0x14c)) / 0x1 + -parseInt(_0xdcffb0(0x14b)) / 0x2 * (parseInt(_0xdcffb0(0x152)) / 0x3) + parseInt(_0xdcffb0(0x154)) / 0x4 + -parseInt(_0xdcffb0(0x150)) / 0x5 * (parseInt(_0xdcffb0(0x147)) / 0x6) + parseInt(_0xdcffb0(0x14d)) / 0x7 * (parseInt(_0xdcffb0(0x14a)) / 0x8) + parseInt(_0xdcffb0(0x145)) / 0x9 + parseInt(_0xdcffb0(0x153)) / 0xa * (-parseInt(_0xdcffb0(0x149)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xd698, 0x88ae2));
var input = require('fs')['readFileSync'](a0_0x1e3f2c(0x144), a0_0x1e3f2c(0x155));
var arr = input[a0_0x1e3f2c(0x151)]()[a0_0x1e3f2c(0x14f)]('\x0a');
var n = arr[a0_0x1e3f2c(0x148)]() - 0x0;
var cnt = 0x0;
arr['forEach'](v => {
    var _0x175923 = a0_0x1e3f2c;
    if (v == _0x175923(0x14e))
        cnt++;
});
console[a0_0x1e3f2c(0x146)](cnt);