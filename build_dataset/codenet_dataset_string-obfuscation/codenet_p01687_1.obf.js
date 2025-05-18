var a0_0x596789 = a0_0x31c4;
(function (stringArrayFunction, comparisonValue) {
    var _0xae652b = a0_0x31c4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xae652b(0xa7)) / 0x1 * (-parseInt(_0xae652b(0x9f)) / 0x2) + -parseInt(_0xae652b(0xab)) / 0x3 * (-parseInt(_0xae652b(0x9d)) / 0x4) + parseInt(_0xae652b(0xa1)) / 0x5 + parseInt(_0xae652b(0xa4)) / 0x6 * (parseInt(_0xae652b(0xad)) / 0x7) + parseInt(_0xae652b(0xac)) / 0x8 + parseInt(_0xae652b(0xa0)) / 0x9 * (-parseInt(_0xae652b(0xa2)) / 0xa) + -parseInt(_0xae652b(0xa3)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b11, 0x8bd0c));
var input = require('fs')[a0_0x596789(0xae)](a0_0x596789(0xa9), 'utf8');
var s = input[a0_0x596789(0xa6)]();
for (var i = 0x0; i < s[a0_0x596789(0xa8)] - 0x7; i++) {
    var arr = [
        s[i],
        s[i + 0x1],
        s[i + 0x2],
        s[i + 0x3],
        s[i + 0x4],
        s[i + 0x5],
        s[i + 0x6],
        s[i + 0x7]
    ];
    if (arr[a0_0x596789(0x9e)]('') == a0_0x596789(0xa5)) {
        i += 0x7;
        continue;
    }
    var str = arr['sort']()['join']('');
    if (str == 'AADINNUY') {
        s = s[a0_0x596789(0xaa)](0x0, i) + 'AIZUNYAN' + s[a0_0x596789(0xaa)](i + 0x8, s[a0_0x596789(0xa8)]);
        i += 0x7;
    }
}
function a0_0x31c4(Zvrvdi, key) {
    var stringArray = a0_0x2b11();
    a0_0x31c4 = function (index, key) {
        index = index - 0x9d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x31c4(Zvrvdi, key);
}
console['log'](s);
function a0_0x2b11() {
    var _0x459af4 = [
        'join',
        '144734Yulhss',
        '1377YCAdCO',
        '1751105KgWOxn',
        '69770UeQSEr',
        '15825700wPYepX',
        '3257292GqHlfC',
        'AIZUNYAN',
        'trim',
        '4hOYFyN',
        'length',
        '/dev/stdin',
        'slice',
        '6WJGOyX',
        '7865632KauscD',
        '7GyEdgs',
        'readFileSync',
        '1826180jyduqs'
    ];
    a0_0x2b11 = function () {
        return _0x459af4;
    };
    return a0_0x2b11();
}