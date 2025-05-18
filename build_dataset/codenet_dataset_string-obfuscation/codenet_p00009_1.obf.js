var a0_0xd1152 = a0_0x5793;
(function (stringArrayFunction, comparisonValue) {
    var _0x5d4ee2 = a0_0x5793;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5d4ee2(0x86)) / 0x1 + parseInt(_0x5d4ee2(0x85)) / 0x2 * (parseInt(_0x5d4ee2(0x8b)) / 0x3) + -parseInt(_0x5d4ee2(0x90)) / 0x4 * (-parseInt(_0x5d4ee2(0x88)) / 0x5) + -parseInt(_0x5d4ee2(0x8a)) / 0x6 * (parseInt(_0x5d4ee2(0x8f)) / 0x7) + -parseInt(_0x5d4ee2(0x8d)) / 0x8 + -parseInt(_0x5d4ee2(0x8c)) / 0x9 + parseInt(_0x5d4ee2(0x8e)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8fd3, 0x6961a));
var count = 0x0;
function isPrime(num) {
    if (num < 0x2)
        return ![];
    for (var i = 0x2; i < num; i++) {
        if (num % i == 0x0)
            return ![];
    }
    count++;
    return !![];
}
var input = require('fs')[a0_0xd1152(0x87)]('/dev/stdin', 'utf8');
var p = input[a0_0xd1152(0x89)]('\x0a');
function a0_0x5793(MukZIo, key) {
    var stringArray = a0_0x8fd3();
    a0_0x5793 = function (index, key) {
        index = index - 0x85;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5793(MukZIo, key);
}
function a0_0x8fd3() {
    var _0x1dfccb = [
        '318rrlzrk',
        '2760939xaPfPj',
        '1432120BYvryH',
        '16090580emdRuq',
        '420707KhrNkK',
        '764cEwLlL',
        'log',
        '2tamurc',
        '416000fhxsqy',
        'readFileSync',
        '13235oLVVXu',
        'split',
        '78AoEUIh'
    ];
    a0_0x8fd3 = function () {
        return _0x1dfccb;
    };
    return a0_0x8fd3();
}
for (var i = 0x0; i < p['length']; i++) {
    count = 0x0;
    for (var j = 0x2; j <= p[i]; j++) {
        isPrime(j);
    }
    console[a0_0xd1152(0x91)](count);
}