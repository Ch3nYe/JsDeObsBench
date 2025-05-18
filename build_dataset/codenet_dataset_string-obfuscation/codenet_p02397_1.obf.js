function a0_0x3605() {
    var _0x49f1c3 = [
        '965373azpIoF',
        '2072214fALeSz',
        'split',
        'stdin',
        '16529403YkLvyN',
        'push',
        '164222JDNbJr',
        'stdout',
        '24jlglEI',
        '426485mSXtlp',
        '20lIXlNh',
        'createInterface',
        '4EsrCYc',
        'line',
        '4041192aDKnzt',
        '4wcIfIo',
        '6606992QjCrcd',
        'log'
    ];
    a0_0x3605 = function () {
        return _0x49f1c3;
    };
    return a0_0x3605();
}
var a0_0x562a45 = a0_0x1d1c;
(function (stringArrayFunction, comparisonValue) {
    var _0x490f6b = a0_0x1d1c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x490f6b(0x1c1)) / 0x1 * (parseInt(_0x490f6b(0x1c7)) / 0x2) + -parseInt(_0x490f6b(0x1bb)) / 0x3 * (-parseInt(_0x490f6b(0x1b8)) / 0x4) + -parseInt(_0x490f6b(0x1c4)) / 0x5 * (-parseInt(_0x490f6b(0x1c3)) / 0x6) + -parseInt(_0x490f6b(0x1b9)) / 0x7 + -parseInt(_0x490f6b(0x1b7)) / 0x8 + parseInt(_0x490f6b(0x1bc)) / 0x9 * (-parseInt(_0x490f6b(0x1c5)) / 0xa) + parseInt(_0x490f6b(0x1bf)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3605, 0x8eb97));
function main(tmp) {
    var _0x59514f = a0_0x1d1c;
    var i = 0x0;
    while (tmp[i] != 0x0 && tmp[i + 0x1] != 0x0) {
        if (tmp[i] < tmp[i + 0x1])
            console[_0x59514f(0x1ba)](tmp[i] + '\x20' + tmp[i + 0x1]);
        else
            console[_0x59514f(0x1ba)](tmp[i + 0x1] + '\x20' + tmp[i]);
        i = i + 0x2;
    }
}
var lines = [];
function a0_0x1d1c(ErqeOb, key) {
    var stringArray = a0_0x3605();
    a0_0x1d1c = function (index, key) {
        index = index - 0x1b7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1d1c(ErqeOb, key);
}
var b = [];
var reader = require('readline')[a0_0x562a45(0x1c6)]({
    'input': process['stdin'],
    'output': process[a0_0x562a45(0x1c2)]
});
reader['on'](a0_0x562a45(0x1c8), function (line) {
    var _0x522120 = a0_0x562a45;
    var a = line[_0x522120(0x1bd)]('\x20');
    var c = parseInt(a[0x0], 0xa);
    var d = parseInt(a[0x1], 0xa);
    b[_0x522120(0x1c0)](c);
    b[_0x522120(0x1c0)](d);
    if (c == 0x0 && d == 0x0)
        main(b);
});
process[a0_0x562a45(0x1be)]['on']('end', function () {
});