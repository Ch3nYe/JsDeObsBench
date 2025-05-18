var a0_0x16a33b = a0_0x5dd2;
(function (stringArrayFunction, comparisonValue) {
    var _0x307a86 = a0_0x5dd2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x307a86(0x1f4)) / 0x1 * (-parseInt(_0x307a86(0x1ff)) / 0x2) + -parseInt(_0x307a86(0x203)) / 0x3 + -parseInt(_0x307a86(0x1fd)) / 0x4 + parseInt(_0x307a86(0x1f2)) / 0x5 + -parseInt(_0x307a86(0x1f6)) / 0x6 + parseInt(_0x307a86(0x1fa)) / 0x7 * (parseInt(_0x307a86(0x1f5)) / 0x8) + -parseInt(_0x307a86(0x1f3)) / 0x9 * (-parseInt(_0x307a86(0x1fe)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2986, 0xda092));
function a0_0x5dd2(hhtPwl, key) {
    var stringArray = a0_0x2986();
    a0_0x5dd2 = function (index, key) {
        index = index - 0x1f0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5dd2(hhtPwl, key);
}
function a0_0x2986() {
    var _0x64d178 = [
        'filter',
        'readFileSync',
        '3765444iUWLLD',
        'sort',
        '/dev/stdin',
        'utf8',
        '4952160etJiPT',
        '12789QHIgpD',
        '1378809LBhpVX',
        '544uJwqpq',
        '5666808KelpJO',
        'push',
        'forEach',
        'trim',
        '38633ofVGjZ',
        'shift',
        'split',
        '6780964hbcSSW',
        '14380dwHROF',
        '2pfgsAi',
        'length'
    ];
    a0_0x2986 = function () {
        return _0x64d178;
    };
    return a0_0x2986();
}
var input = require('fs')[a0_0x16a33b(0x202)](a0_0x16a33b(0x1f0), a0_0x16a33b(0x1f1));
var lines = input[a0_0x16a33b(0x1f9)]()['split']('\x0a');
var lm = [];
var line;
while (line = lines[a0_0x16a33b(0x1fb)]()) {
    lm[a0_0x16a33b(0x1f7)](line['split'](',')[0x0]);
}
var tm = [];
while (line = lines[a0_0x16a33b(0x1fb)]()) {
    tm[a0_0x16a33b(0x1f7)](line[a0_0x16a33b(0x1fc)](',')[0x0]);
}
lm[a0_0x16a33b(0x204)](function (a, b) {
    return a - b;
});
lm[a0_0x16a33b(0x1f8)](function (c) {
    var _0x4e98cc = a0_0x16a33b;
    var cnt = tm[_0x4e98cc(0x201)](function (n) {
        return n == c;
    })[_0x4e98cc(0x200)];
    if (cnt > 0x0) {
        var tcnt = lm[_0x4e98cc(0x201)](function (n) {
            return n == c;
        })[_0x4e98cc(0x200)];
        console['log'](c, cnt + tcnt);
    }
});