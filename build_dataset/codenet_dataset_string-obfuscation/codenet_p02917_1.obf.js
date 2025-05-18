function a0_0x4195(DFLTnB, key) {
    var stringArray = a0_0x2955();
    a0_0x4195 = function (index, key) {
        index = index - 0x1ec;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4195(DFLTnB, key);
}
var a0_0x363ee7 = a0_0x4195;
(function (stringArrayFunction, comparisonValue) {
    var _0x247e63 = a0_0x4195;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x247e63(0x1f1)) / 0x1 + parseInt(_0x247e63(0x1ee)) / 0x2 + -parseInt(_0x247e63(0x1f0)) / 0x3 + -parseInt(_0x247e63(0x204)) / 0x4 * (parseInt(_0x247e63(0x1f5)) / 0x5) + -parseInt(_0x247e63(0x1f4)) / 0x6 + parseInt(_0x247e63(0x1f7)) / 0x7 * (-parseInt(_0x247e63(0x1f9)) / 0x8) + -parseInt(_0x247e63(0x1f3)) / 0x9 * (-parseInt(_0x247e63(0x1ff)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2955, 0xd188b));
process['stdin'][a0_0x363ee7(0x1f6)]();
process['stdin'][a0_0x363ee7(0x1fd)](a0_0x363ee7(0x1ec));
var lines = [];
var reader = require(a0_0x363ee7(0x1f2))[a0_0x363ee7(0x1f8)]({
    'input': process[a0_0x363ee7(0x1fe)],
    'output': process[a0_0x363ee7(0x1ed)]
});
function a0_0x2955() {
    var _0x4973ef = [
        'min',
        'line',
        'setEncoding',
        'stdin',
        '10wlpWZq',
        'log',
        'push',
        'split',
        'map',
        '36eORLdH',
        'utf8',
        'stdout',
        '1078008MSyHqZ',
        'close',
        '280680kkHkcZ',
        '1200924CGPRzH',
        'readline',
        '35709831jkIiET',
        '3527598bJChqk',
        '662605eXKDst',
        'resume',
        '14KjOGfi',
        'createInterface',
        '2293624GMbPGX',
        'length'
    ];
    a0_0x2955 = function () {
        return _0x4973ef;
    };
    return a0_0x2955();
}
reader['on'](a0_0x363ee7(0x1fc), line => {
    var _0xf15117 = a0_0x363ee7;
    lines[_0xf15117(0x201)](line);
});
reader['on'](a0_0x363ee7(0x1ef), () => {
    var _0x4a2c14 = a0_0x363ee7;
    const list = lines[0x1][_0x4a2c14(0x202)]('\x20')[_0x4a2c14(0x203)](v => v - 0x0);
    let ans = 0x0;
    for (let i = 0x0; i < list[_0x4a2c14(0x1fa)] - 0x1; i++) {
        ans += Math[_0x4a2c14(0x1fb)](list[i], list[i + 0x1]);
    }
    ans += list[list['length'] - 0x1] + list[0x0];
    console[_0x4a2c14(0x200)](ans);
});