function a0_0xa809() {
    const _0x32c4c9 = [
        '3BUvPOY',
        '6fUSptL',
        '7312280JftHqJ',
        '53996734CHbjyD',
        'push',
        '4xwWCye',
        'readline',
        '12670ATyhXb',
        '9315UobQqu',
        'stdin',
        'log',
        'Yes',
        '1607887JSKxMI',
        'split',
        '3907166gFoYlo',
        'line',
        '1090070qzLyfi',
        'stdout',
        '6789559doegfR',
        'createInterface',
        '12IcgaGX',
        'close'
    ];
    a0_0xa809 = function () {
        return _0x32c4c9;
    };
    return a0_0xa809();
}
function a0_0x5bb3(qAjHOp, key) {
    const stringArray = a0_0xa809();
    a0_0x5bb3 = function (index, key) {
        index = index - 0x150;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5bb3(qAjHOp, key);
}
const a0_0x2cd4fc = a0_0x5bb3;
(function (stringArrayFunction, comparisonValue) {
    const _0x225855 = a0_0x5bb3;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x225855(0x152)) / 0x1 + parseInt(_0x225855(0x154)) / 0x2 * (-parseInt(_0x225855(0x15c)) / 0x3) + parseInt(_0x225855(0x161)) / 0x4 * (parseInt(_0x225855(0x156)) / 0x5) + -parseInt(_0x225855(0x15d)) / 0x6 * (parseInt(_0x225855(0x158)) / 0x7) + -parseInt(_0x225855(0x15e)) / 0x8 + -parseInt(_0x225855(0x164)) / 0x9 * (-parseInt(_0x225855(0x163)) / 0xa) + -parseInt(_0x225855(0x15f)) / 0xb * (-parseInt(_0x225855(0x15a)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xa809, 0xf25c7));
let lines = [];
let reader = require(a0_0x2cd4fc(0x162))[a0_0x2cd4fc(0x159)]({
    'input': process[a0_0x2cd4fc(0x165)],
    'output': process[a0_0x2cd4fc(0x157)]
});
reader['on'](a0_0x2cd4fc(0x155), function (line) {
    lines['push'](line);
});
reader['on'](a0_0x2cd4fc(0x15b), function () {
    const _0xcfacc5 = a0_0x2cd4fc;
    let d1 = [];
    let d2 = [];
    const n = lines[0x0];
    let zorome = 'No';
    for (let i = 0x1; i < n; i++) {
        d1[_0xcfacc5(0x160)](lines[i][_0xcfacc5(0x153)]('\x20')[0x0]);
        d2[_0xcfacc5(0x160)](lines[i][_0xcfacc5(0x153)]('\x20')[0x1]);
    }
    for (let i = 0x0; i < n - 0x2; i++) {
        if (d1[i] == d2[i]) {
            if (d1[i + 0x1] == d2[i + 0x1]) {
                if (d1[i + 0x2] == d2[i + 0x2]) {
                    zorome = _0xcfacc5(0x151);
                    break;
                }
            }
        }
    }
    console[_0xcfacc5(0x150)](zorome);
});