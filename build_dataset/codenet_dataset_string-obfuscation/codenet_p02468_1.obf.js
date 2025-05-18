function a0_0x5f0a(DVNUxU, key) {
    var stringArray = a0_0x2717();
    a0_0x5f0a = function (index, key) {
        index = index - 0x1ca;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f0a(DVNUxU, key);
}
function a0_0x2717() {
    var _0x23963f = [
        '1446LfofXe',
        'utf8',
        'trim',
        '8232ZvZSVa',
        'map',
        '1146OtBBDi',
        '1348020wYHcaf',
        '/dev/stdin',
        'split',
        '190lnulNw',
        '2127RhpamX',
        '240vGKleb',
        '2165232mvaMEf',
        'log',
        '448659kMklQI',
        '19236iSmXFu',
        '195635xtyiYs'
    ];
    a0_0x2717 = function () {
        return _0x23963f;
    };
    return a0_0x2717();
}
var a0_0x2e7453 = a0_0x5f0a;
(function (stringArrayFunction, comparisonValue) {
    var _0x2cc1c9 = a0_0x5f0a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2cc1c9(0x1d9)) / 0x1 + -parseInt(_0x2cc1c9(0x1cb)) / 0x2 * (parseInt(_0x2cc1c9(0x1d5)) / 0x3) + -parseInt(_0x2cc1c9(0x1da)) / 0x4 * (-parseInt(_0x2cc1c9(0x1d6)) / 0x5) + -parseInt(_0x2cc1c9(0x1d0)) / 0x6 * (parseInt(_0x2cc1c9(0x1ce)) / 0x7) + parseInt(_0x2cc1c9(0x1d7)) / 0x8 + -parseInt(_0x2cc1c9(0x1d1)) / 0x9 + -parseInt(_0x2cc1c9(0x1d4)) / 0xa * (-parseInt(_0x2cc1c9(0x1ca)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2717, 0x61ea1));
var input = require('fs')['readFileSync'](a0_0x2e7453(0x1d2), a0_0x2e7453(0x1cc))[a0_0x2e7453(0x1cd)]();
var nums = input[a0_0x2e7453(0x1d3)]('\x20')[a0_0x2e7453(0x1cf)](function (num) {
    return +num;
});
var n = nums[0x0];
var m = nums[0x1];
var mod = 0x1;
for (var i = 0x0; i < m; i++) {
    mod = mod * n % 0x3b9aca07;
}
console[a0_0x2e7453(0x1d8)](mod);