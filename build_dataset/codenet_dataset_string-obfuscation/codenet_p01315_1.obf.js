var a0_0x1451c1 = a0_0x2440;
(function (stringArrayFunction, comparisonValue) {
    var _0x544235 = a0_0x2440;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x544235(0x189)) / 0x1 + -parseInt(_0x544235(0x196)) / 0x2 + -parseInt(_0x544235(0x188)) / 0x3 * (-parseInt(_0x544235(0x187)) / 0x4) + parseInt(_0x544235(0x198)) / 0x5 + parseInt(_0x544235(0x186)) / 0x6 * (parseInt(_0x544235(0x191)) / 0x7) + -parseInt(_0x544235(0x193)) / 0x8 * (-parseInt(_0x544235(0x194)) / 0x9) + -parseInt(_0x544235(0x18b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xde9d, 0xe8089));
function a0_0x2440(OHQLOm, key) {
    var stringArray = a0_0xde9d();
    a0_0x2440 = function (index, key) {
        index = index - 0x186;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2440(OHQLOm, key);
}
function a0_0xde9d() {
    var _0x55ca8e = [
        '1177576WIfXtA',
        '9YbXhKj',
        '803534FHkrtD',
        'map',
        '9643640gSEzFZ',
        'readFileSync',
        'split',
        'toString',
        'shift',
        'trim',
        '6959967BEzMUS',
        'log',
        '1995160OfuAfs',
        '27zLPdWD',
        'apply',
        '1241560yzrrrV',
        'forEach',
        '3567195xAQdlg',
        'push',
        '6GWngbH'
    ];
    a0_0xde9d = function () {
        return _0x55ca8e;
    };
    return a0_0xde9d();
}
var input = require('fs')[a0_0x1451c1(0x18c)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x1451c1(0x190)]()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x1451c1(0x18f)]() - 0x0;
    if (n === 0x0)
        break;
    var ans = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x1451c1(0x18f)]()[a0_0x1451c1(0x18d)]('\x20');
        var name = arr[a0_0x1451c1(0x18f)]();
        arr = arr[a0_0x1451c1(0x18a)](Number);
        arr['unshift'](name);
        (function (L, P, A, B, C, D, E, F, S, M) {
            var _0x41d5ea = a0_0x1451c1;
            var time = A + B + C + (D + E) * M;
            var money = F * S * M - P;
            ans[_0x41d5ea(0x199)]([
                L,
                money / time
            ]);
        }[a0_0x1451c1(0x195)](null, arr));
    }
    ans['sort'](function (a, b) {
        var _0x528a8f = a0_0x1451c1;
        if (a[0x1] == b[0x1])
            return a[0x0][_0x528a8f(0x18e)]() > b[0x0][_0x528a8f(0x18e)]() ? 0x1 : -0x1;
        else
            return b[0x1] - a[0x1];
    });
    ans[a0_0x1451c1(0x197)](function (v) {
        var _0x5e5161 = a0_0x1451c1;
        console[_0x5e5161(0x192)](v[0x0]);
    });
    console[a0_0x1451c1(0x192)]('#');
}