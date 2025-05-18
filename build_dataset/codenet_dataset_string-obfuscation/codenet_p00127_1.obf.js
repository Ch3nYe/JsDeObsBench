var a0_0x4cdf3 = a0_0x422a;
(function (stringArrayFunction, comparisonValue) {
    var _0x15ae17 = a0_0x422a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x15ae17(0x6e)) / 0x1 + -parseInt(_0x15ae17(0x66)) / 0x2 * (parseInt(_0x15ae17(0x69)) / 0x3) + -parseInt(_0x15ae17(0x6f)) / 0x4 + parseInt(_0x15ae17(0x75)) / 0x5 * (-parseInt(_0x15ae17(0x65)) / 0x6) + -parseInt(_0x15ae17(0x72)) / 0x7 * (-parseInt(_0x15ae17(0x71)) / 0x8) + parseInt(_0x15ae17(0x76)) / 0x9 * (parseInt(_0x15ae17(0x6d)) / 0xa) + parseInt(_0x15ae17(0x6c)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25da, 0x7b39d));
var table = {};
table[0xb] = 'a';
table[0xc] = 'b';
table[0xd] = 'c';
function a0_0x25da() {
    var _0x48dfd4 = [
        '1468398xfTuif',
        'split',
        'log',
        '17858962mbmQAb',
        '3914530DbcdEm',
        '275117qIfbvM',
        '64832cmHYkP',
        'replace',
        '8PXSikv',
        '1051659cqejwX',
        'hasOwnProperty',
        'match',
        '2995tadior',
        '18iXqBJU',
        '/dev/stdin',
        '7830UkwXzy',
        '4PpjpDh',
        'forEach',
        'utf8'
    ];
    a0_0x25da = function () {
        return _0x48dfd4;
    };
    return a0_0x25da();
}
table[0xe] = 'd';
table[0xf] = 'e';
table[0x15] = 'f';
table[0x16] = 'g';
table[0x17] = 'h';
table[0x18] = 'i';
table[0x19] = 'j';
table[0x1f] = 'k';
table[0x20] = 'l';
table[0x21] = 'm';
table[0x22] = 'n';
table[0x23] = 'o';
table[0x29] = 'p';
table[0x2a] = 'q';
table[0x2b] = 'r';
table[0x2c] = 's';
table[0x2d] = 't';
table[0x33] = 'u';
table[0x34] = 'v';
table[0x35] = 'w';
table[0x36] = 'x';
table[0x37] = 'y';
table[0x3d] = 'z';
table[0x3e] = '.';
table[0x3f] = '?';
function a0_0x422a(VInpKs, key) {
    var stringArray = a0_0x25da();
    a0_0x422a = function (index, key) {
        index = index - 0x65;
        var value = stringArray[index];
        return value;
    };
    return a0_0x422a(VInpKs, key);
}
table[0x40] = '!';
table[0x41] = '\x20';
var input = require('fs')['readFileSync'](a0_0x4cdf3(0x77), a0_0x4cdf3(0x68));
var Arr = input[a0_0x4cdf3(0x70)](/\n$/, '')[a0_0x4cdf3(0x6a)]('\x0a');
Arr[a0_0x4cdf3(0x67)](function (str) {
    var _0x5084eb = a0_0x4cdf3;
    str = str[_0x5084eb(0x70)](/\d\d/g, function (s) {
        var _0x284ae0 = _0x5084eb;
        if (table[_0x284ae0(0x73)](s))
            s = table[s];
        return s;
    });
    if (str[_0x5084eb(0x74)](/\d/))
        str = 'NA';
    console[_0x5084eb(0x6b)](str);
});