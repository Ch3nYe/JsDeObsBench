var a0_0x8f6649 = a0_0x4632;
function a0_0x5a40() {
    var _0x6e0875 = [
        '200265MUDFMV',
        'sort',
        '11AobbRE',
        'map',
        '2429112Bodara',
        '2282110FvIhuB',
        '6LjVbAV',
        '4iyCBQC',
        'forEach',
        '6xLZhpc',
        'filter',
        '39896kPgEgQ',
        'push',
        '965915TkLTHu',
        'pop',
        'split',
        '975264dqLhMU',
        '9VyBjNB',
        '/dev/stdin',
        '2586392OeIbiU',
        'readFileSync',
        'log',
        '104tDlTgU'
    ];
    a0_0x5a40 = function () {
        return _0x6e0875;
    };
    return a0_0x5a40();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x307e20 = a0_0x4632;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x307e20(0x101)) / 0x1 + -parseInt(_0x307e20(0xf5)) / 0x2 * (parseInt(_0x307e20(0xf0)) / 0x3) + parseInt(_0x307e20(0xf1)) / 0x4 * (-parseInt(_0x307e20(0xf7)) / 0x5) + parseInt(_0x307e20(0xf3)) / 0x6 * (-parseInt(_0x307e20(0xee)) / 0x7) + parseInt(_0x307e20(0xfd)) / 0x8 * (-parseInt(_0x307e20(0xfb)) / 0x9) + parseInt(_0x307e20(0xef)) / 0xa * (parseInt(_0x307e20(0x103)) / 0xb) + -parseInt(_0x307e20(0xfa)) / 0xc * (-parseInt(_0x307e20(0x100)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a40, 0x2ac9a));
log = console[a0_0x8f6649(0xff)];
var stdin = require('fs')[a0_0x8f6649(0xfe)](a0_0x8f6649(0xfc), 'UTF-8');
var lines = stdin['split']('\x0a')[a0_0x8f6649(0xf4)](v => v !== '')[a0_0x8f6649(0x104)](v => v[a0_0x8f6649(0xf9)]('\x20')[a0_0x8f6649(0x104)](Number));
var N = lines[0x0];
var A = lines[0x1];
var processList = [];
A[a0_0x8f6649(0x102)]((a, b) => a - b);
var plusList = [];
var minusList = [];
plusList[a0_0x8f6649(0xf6)](A[a0_0x8f6649(0xf8)]());
minusList[a0_0x8f6649(0xf6)](A['shift']());
A[a0_0x8f6649(0xf2)](v => {
    var _0x55fff4 = a0_0x8f6649;
    v >= 0x0 ? plusList[_0x55fff4(0xf6)](v) : minusList['push'](v);
});
function a0_0x4632(ueArPe, key) {
    var stringArray = a0_0x5a40();
    a0_0x4632 = function (index, key) {
        index = index - 0xee;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4632(ueArPe, key);
}
var tmp = minusList[a0_0x8f6649(0xf8)]();
for (var i = 0x0; i < plusList['length'] - 0x1; i++) {
    var plus = plusList[a0_0x8f6649(0xf8)]();
    processList[a0_0x8f6649(0xf6)](tmp + '\x20' + plus);
    tmp = tmp - plus;
}
var lastplus = plusList[a0_0x8f6649(0xf8)]();
for (var i = 0x0; i < minusList['length']; i++) {
    var minus = minusList[a0_0x8f6649(0xf8)]();
    processList['push'](lastplus + '\x20' + minus);
    lastplus = lastplus - minus;
}
processList[a0_0x8f6649(0xf6)](lastplus + '\x20' + tmp);
log(lastplus - tmp);
processList[a0_0x8f6649(0xf2)](v => log(v));