function a0_0x3bbf() {
    var _0x31c559 = [
        'utf8',
        '1633770TylTUE',
        '465504BncNZH',
        '9eJqibK',
        '222747tIsayg',
        '89404mRlAcz',
        '/dev/stdin',
        'split',
        '112frhSUH',
        '4279986YnZZZU',
        'log',
        '11852280izMDEo',
        '1157196KnbMTd'
    ];
    a0_0x3bbf = function () {
        return _0x31c559;
    };
    return a0_0x3bbf();
}
var a0_0x3b9e38 = a0_0x11b1;
(function (stringArrayFunction, comparisonValue) {
    var _0x1d44b0 = a0_0x11b1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1d44b0(0x7a)) / 0x1 + parseInt(_0x1d44b0(0x77)) / 0x2 + parseInt(_0x1d44b0(0x7b)) / 0x3 * (parseInt(_0x1d44b0(0x7d)) / 0x4) + parseInt(_0x1d44b0(0x79)) / 0x5 + parseInt(_0x1d44b0(0x74)) / 0x6 + parseInt(_0x1d44b0(0x7c)) / 0x7 * (-parseInt(_0x1d44b0(0x73)) / 0x8) + -parseInt(_0x1d44b0(0x76)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3bbf, 0x5eeda));
var input = require('fs')['readFileSync'](a0_0x3b9e38(0x71), a0_0x3b9e38(0x78));
function a0_0x11b1(NHXsjb, key) {
    var stringArray = a0_0x3bbf();
    a0_0x11b1 = function (index, key) {
        index = index - 0x71;
        var value = stringArray[index];
        return value;
    };
    return a0_0x11b1(NHXsjb, key);
}
var arr = input['trim']()[a0_0x3b9e38(0x72)]('\x0a');
var a = arr[0x0];
var b = arr[0x1];
var str = '';
for (var i = 0x0; i < a['length']; i++) {
    var flag = !![];
    ;
    for (var j = 0x0; j < b['length']; j++) {
        if (a[i + j] != b[j]) {
            flag = ![];
            break;
        }
    }
    if (flag)
        str += i + '\x0a';
}
console[a0_0x3b9e38(0x75)](str);