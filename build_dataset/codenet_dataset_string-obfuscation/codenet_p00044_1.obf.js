var a0_0x5a84af = a0_0x560d;
(function (stringArrayFunction, comparisonValue) {
    var _0x1fcb5b = a0_0x560d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1fcb5b(0xc2)) / 0x1 + parseInt(_0x1fcb5b(0xbd)) / 0x2 + parseInt(_0x1fcb5b(0xbf)) / 0x3 + parseInt(_0x1fcb5b(0xbc)) / 0x4 + -parseInt(_0x1fcb5b(0xbe)) / 0x5 * (parseInt(_0x1fcb5b(0xc4)) / 0x6) + -parseInt(_0x1fcb5b(0xc3)) / 0x7 + parseInt(_0x1fcb5b(0xc7)) / 0x8 * (-parseInt(_0x1fcb5b(0xc1)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1bae, 0xc0bec));
function isPrime(num) {
    var _0x4df763 = a0_0x560d;
    if (num == 0x2 || num == 0x3)
        return !![];
    if (num < 0x2 || num % 0x2 == 0x0 || num % 0x3 == 0x0)
        return ![];
    var limit = Math[_0x4df763(0xc5)](Math[_0x4df763(0xc6)](num));
    var i = 0x1;
    while (i * 0x6 - 0x1 <= limit) {
        if (num % (i * 0x6 - 0x1) == 0x0 || num % (i * 0x6 + 0x1) == 0x0)
            return ![];
        i++;
    }
    return !![];
}
var input = require('fs')['readFileSync'](a0_0x5a84af(0xc8), a0_0x5a84af(0xc0));
function a0_0x560d(kdNUpF, key) {
    var stringArray = a0_0x1bae();
    a0_0x560d = function (index, key) {
        index = index - 0xbb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x560d(kdNUpF, key);
}
var lines = input[a0_0x5a84af(0xbb)]()[a0_0x5a84af(0xca)]('\x0a');
function a0_0x1bae() {
    var _0x491d3e = [
        '45BijXxU',
        '112991knQZkN',
        '550459cHBNRe',
        '618bXTDWc',
        'round',
        'sqrt',
        '504376Xnnwtd',
        '/dev/stdin',
        'log',
        'split',
        'trim',
        '6020716lzcHsZ',
        '14124emjAAd',
        '70525MgWvoT',
        '3710763MLZXBD',
        'utf8'
    ];
    a0_0x1bae = function () {
        return _0x491d3e;
    };
    return a0_0x1bae();
}
var line;
while (line = lines['shift']()) {
    var num = +line;
    var mp;
    var lp;
    if (num == 0x3)
        mp = 0x2;
    var i = 0x3;
    while (!![]) {
        if (isPrime(i) && i < num) {
            mp = i;
        }
        if (isPrime(i) && i > num) {
            lp = i;
            break;
        }
        i += 0x2;
    }
    console[a0_0x5a84af(0xc9)](mp, lp);
}