var a0_0x3531f6 = a0_0x5374;
function a0_0x466a() {
    var _0x59de05 = [
        '18fLWyvq',
        '56JjNmIp',
        '51438HnElRN',
        '4938350yIYKtm',
        '2yjwSGD',
        '121194mLXzCS',
        '860520bVHeow',
        '/dev/stdin',
        '4090555hOrtBy',
        'trim',
        '235BXxuAL',
        '9448857ilDkTk',
        '49113aeOjGV',
        'log'
    ];
    a0_0x466a = function () {
        return _0x59de05;
    };
    return a0_0x466a();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5b19ea = a0_0x5374;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5b19ea(0x192)) / 0x1 * (parseInt(_0x5b19ea(0x190)) / 0x2) + -parseInt(_0x5b19ea(0x18c)) / 0x3 * (-parseInt(_0x5b19ea(0x18f)) / 0x4) + -parseInt(_0x5b19ea(0x18a)) / 0x5 * (parseInt(_0x5b19ea(0x185)) / 0x6) + parseInt(_0x5b19ea(0x188)) / 0x7 + parseInt(_0x5b19ea(0x186)) / 0x8 * (parseInt(_0x5b19ea(0x18e)) / 0x9) + -parseInt(_0x5b19ea(0x191)) / 0xa + parseInt(_0x5b19ea(0x18b)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x466a, 0x79136));
var input = require('fs')['readFileSync'](a0_0x3531f6(0x187), 'utf8');
var n = input[a0_0x3531f6(0x189)]() - 0x0;
var ans = [
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0
];
var i = 0x0;
function a0_0x5374(xHLwxV, key) {
    var stringArray = a0_0x466a();
    a0_0x5374 = function (index, key) {
        index = index - 0x185;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5374(xHLwxV, key);
}
while (!![]) {
    i++;
    var cnt = 0x0;
    for (var j = i; j >= 0x1; j--) {
        if (i % j == 0x0)
            cnt++;
    }
    if (ans[cnt - 0x1] == 0x0) {
        ans[cnt - 0x1] = i;
        if (!ans['includes'](0x0))
            break;
    }
}
console[a0_0x3531f6(0x18d)](ans[n - 0x1]);