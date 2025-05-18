var a0_0x179689 = a0_0x24ef;
function a0_0x24ef(TorMWV, key) {
    var stringArray = a0_0x41d1();
    a0_0x24ef = function (index, key) {
        index = index - 0x89;
        var value = stringArray[index];
        return value;
    };
    return a0_0x24ef(TorMWV, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5a7f27 = a0_0x24ef;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5a7f27(0x8f)) / 0x1 + -parseInt(_0x5a7f27(0x97)) / 0x2 * (-parseInt(_0x5a7f27(0x99)) / 0x3) + -parseInt(_0x5a7f27(0x98)) / 0x4 + parseInt(_0x5a7f27(0x8b)) / 0x5 * (-parseInt(_0x5a7f27(0x92)) / 0x6) + parseInt(_0x5a7f27(0x8e)) / 0x7 + parseInt(_0x5a7f27(0x96)) / 0x8 + -parseInt(_0x5a7f27(0x89)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x41d1, 0x7e163));
var ms = [];
var flag = [];
for (var i = 0x0; i < 0x493e0; i++)
    flag[i] = !![];
var i = 0x1;
while (!![]) {
    var m = 0x7 * i - 0x1;
    var s = 0x7 * i + 0x1;
    if (m > 0x493e0)
        break;
    i++;
    if (flag[m])
        ms['push'](m);
    if (flag[s])
        ms[a0_0x179689(0x8c)](s);
    var j = 0x2;
    while (!![]) {
        if (m * j > 0x493e0)
            break;
        flag[m * j] = ![];
        flag[s * j] = ![];
        j++;
    }
}
function a0_0x41d1() {
    var _0x22ab66 = [
        'some',
        'shift',
        'trim',
        '6316728HlkXWt',
        '2ClsGim',
        '355132KVPclg',
        '936855uwDwRn',
        '897831qeYxmt',
        'join',
        '98830aVAWlk',
        'push',
        'readFileSync',
        '3559325TyLbEa',
        '608868yMzCWo',
        '/dev/stdin',
        'utf8',
        '90YZswhW'
    ];
    a0_0x41d1 = function () {
        return _0x22ab66;
    };
    return a0_0x41d1();
}
var input = require('fs')[a0_0x179689(0x8d)](a0_0x179689(0x90), a0_0x179689(0x91));
var arr = input[a0_0x179689(0x95)]()['split']('\x0a');
while (!![]) {
    var n = arr[a0_0x179689(0x94)]() - 0x0;
    if (n == 0x1)
        break;
    var ans = [];
    var i = 0x0;
    ms[a0_0x179689(0x93)](function (v) {
        var _0x2b520b = a0_0x179689;
        if (n % v == 0x0)
            ans[_0x2b520b(0x8c)](v);
        return n < v;
    });
    console['log'](n + ':\x20' + ans[a0_0x179689(0x8a)]('\x20'));
}