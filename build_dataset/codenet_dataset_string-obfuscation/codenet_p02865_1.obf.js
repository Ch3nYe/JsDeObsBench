var a0_0x4864a7 = a0_0x6108;
(function (stringArrayFunction, comparisonValue) {
    var _0x4b0a15 = a0_0x6108;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4b0a15(0x1a4)) / 0x1 + parseInt(_0x4b0a15(0x1b0)) / 0x2 + parseInt(_0x4b0a15(0x1a9)) / 0x3 + -parseInt(_0x4b0a15(0x1ae)) / 0x4 * (parseInt(_0x4b0a15(0x1a1)) / 0x5) + -parseInt(_0x4b0a15(0x1b1)) / 0x6 * (parseInt(_0x4b0a15(0x1a2)) / 0x7) + parseInt(_0x4b0a15(0x1ac)) / 0x8 + -parseInt(_0x4b0a15(0x1af)) / 0x9 * (-parseInt(_0x4b0a15(0x1b3)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e72, 0xadcaa));
function a0_0x6108(SGSiZY, key) {
    var stringArray = a0_0x1e72();
    a0_0x6108 = function (index, key) {
        index = index - 0x1a1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6108(SGSiZY, key);
}
process[a0_0x4864a7(0x1ab)][a0_0x4864a7(0x1a3)]();
function a0_0x1e72() {
    var _0x1646fc = [
        'close',
        'setEncoding',
        'createInterface',
        '91293qtYkDw',
        'push',
        'stdin',
        '6809184spHPte',
        'stdout',
        '109292pPnSRW',
        '2763xZPZrQ',
        '1269094LAfmhx',
        '174wdRyQR',
        'line',
        '15430YJmxKj',
        '200qthpYE',
        '147847egckmx',
        'resume',
        '427452XksfFP',
        'utf8'
    ];
    a0_0x1e72 = function () {
        return _0x1646fc;
    };
    return a0_0x1e72();
}
process[a0_0x4864a7(0x1ab)][a0_0x4864a7(0x1a7)](a0_0x4864a7(0x1a5));
var lines = [];
var reader = require('readline')[a0_0x4864a7(0x1a8)]({
    'input': process[a0_0x4864a7(0x1ab)],
    'output': process[a0_0x4864a7(0x1ad)]
});
reader['on'](a0_0x4864a7(0x1b2), line => {
    var _0x5ce4ad = a0_0x4864a7;
    lines[_0x5ce4ad(0x1aa)](line);
});
reader['on'](a0_0x4864a7(0x1a6), () => {
    const N = +lines[0x0];
    console['log'](N % 0x2 ? (N - 0x1) / 0x2 : N / 0x2 - 0x1);
});