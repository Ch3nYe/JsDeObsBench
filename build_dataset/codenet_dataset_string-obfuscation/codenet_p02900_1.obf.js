function a0_0x3f31() {
    var _0x5b6b26 = [
        '4484112iPUVLD',
        '/dev/stdin',
        '2bVJfOW',
        '745206Ixwnzu',
        '2268872SJqTpO',
        '6939933ObKEqv',
        '37220LXmhOV',
        '931113JnSMxm',
        'readFileSync',
        '337795FYecei',
        '78yjclCJ',
        '14KYBlxt',
        'utf-8',
        'map',
        '50GxjFBY',
        'split',
        '6IZrEwS'
    ];
    a0_0x3f31 = function () {
        return _0x5b6b26;
    };
    return a0_0x3f31();
}
var a0_0x4656d8 = a0_0x18e1;
(function (stringArrayFunction, comparisonValue) {
    var _0x4fc4ea = a0_0x18e1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4fc4ea(0x141)) / 0x1 * (parseInt(_0x4fc4ea(0x142)) / 0x2) + -parseInt(_0x4fc4ea(0x138)) / 0x3 * (parseInt(_0x4fc4ea(0x145)) / 0x4) + -parseInt(_0x4fc4ea(0x148)) / 0x5 * (-parseInt(_0x4fc4ea(0x13e)) / 0x6) + parseInt(_0x4fc4ea(0x139)) / 0x7 * (parseInt(_0x4fc4ea(0x143)) / 0x8) + parseInt(_0x4fc4ea(0x146)) / 0x9 * (parseInt(_0x4fc4ea(0x13c)) / 0xa) + parseInt(_0x4fc4ea(0x144)) / 0xb + -parseInt(_0x4fc4ea(0x13f)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f31, 0x67109));
function a0_0x18e1(etJiRx, key) {
    var stringArray = a0_0x3f31();
    a0_0x18e1 = function (index, key) {
        index = index - 0x138;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18e1(etJiRx, key);
}
function Main(input) {
    var _0x73f93e = a0_0x18e1;
    input = input[_0x73f93e(0x13d)]('\x20')[_0x73f93e(0x13b)](x => x * 0x1);
    function gcd(a1, a2) {
        return a2 == 0x0 ? a1 : gcd(a2, a1 % a2);
    }
    var result = gcd(input[0x0], input[0x1]);
    var answer = 0x1;
    for (var i = 0x2; i * i < result; i++) {
        if (result % i === 0x0) {
            answer++;
            while (result % i === 0x0) {
                result /= i;
            }
        }
    }
    if (result !== 0x1) {
        answer++;
    }
    console['log'](answer);
}
Main(require('fs')[a0_0x4656d8(0x147)](a0_0x4656d8(0x140), a0_0x4656d8(0x13a)));