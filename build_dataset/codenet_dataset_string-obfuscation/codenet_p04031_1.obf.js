function a0_0x4cde(KySuAS, key) {
    var stringArray = a0_0x1a16();
    a0_0x4cde = function (index, key) {
        index = index - 0x19a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cde(KySuAS, key);
}
function a0_0x1a16() {
    var _0x5717a2 = [
        'trim',
        '30KnudZW',
        '/dev/stdin',
        'readFileSync',
        'round',
        '88rtlVtu',
        'split',
        'pow',
        '4816895ULsPpz',
        'length',
        '1918642MibGhk',
        '412615mbHiVY',
        '2472288MVeHbP',
        '468153omhjxL',
        '2558985bOMYfp',
        '787258GtLPTx',
        'utf8'
    ];
    a0_0x1a16 = function () {
        return _0x5717a2;
    };
    return a0_0x1a16();
}
var a0_0x2e2aa6 = a0_0x4cde;
(function (stringArrayFunction, comparisonValue) {
    var _0x1fe83a = a0_0x4cde;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1fe83a(0x1a6)) / 0x1 + parseInt(_0x1fe83a(0x1a1)) / 0x2 + -parseInt(_0x1fe83a(0x1a5)) / 0x3 + parseInt(_0x1fe83a(0x1a3)) / 0x4 + parseInt(_0x1fe83a(0x19f)) / 0x5 + -parseInt(_0x1fe83a(0x1a9)) / 0x6 * (-parseInt(_0x1fe83a(0x1a2)) / 0x7) + parseInt(_0x1fe83a(0x19c)) / 0x8 * (-parseInt(_0x1fe83a(0x1a4)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1a16, 0x981d1));
function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x35bc72 = a0_0x4cde;
    input = input[_0x35bc72(0x1a8)]()[_0x35bc72(0x19d)]('\x0a');
    var N = parseInt(input[0x0]);
    var list = input[0x1][_0x35bc72(0x19d)]('\x20')['map'](a => Number(a));
    var ave;
    var sum = 0x0;
    var output = 0x0;
    for (var i = 0x0; i < list[_0x35bc72(0x1a0)]; i++) {
        sum += list[i];
    }
    ave = Math[_0x35bc72(0x19b)](sum / N);
    for (var i = 0x0; i < list['length']; i++) {
        output += Math[_0x35bc72(0x19e)](list[i] - ave, 0x2);
    }
    myout(output);
}
Main(require('fs')[a0_0x2e2aa6(0x19a)](a0_0x2e2aa6(0x1aa), a0_0x2e2aa6(0x1a7))[a0_0x2e2aa6(0x1a8)]());