const a0_0x37881d = a0_0x343f;
function a0_0x11ba() {
    const _0x3c8915 = [
        '14669YbTsHo',
        '42NCUwxz',
        '3260950ZcVPEH',
        'utf8',
        '88104NjezAs',
        '/dev/stdin',
        'log',
        '1794472RWrUAy',
        '1437399zrZSBw',
        '20JKssfJ',
        '343105ygReRP',
        'split',
        'floor',
        '22kCGoou',
        '1219025gJbNkI'
    ];
    a0_0x11ba = function () {
        return _0x3c8915;
    };
    return a0_0x11ba();
}
function a0_0x343f(efbSpb, key) {
    const stringArray = a0_0x11ba();
    a0_0x343f = function (index, key) {
        index = index - 0x1ae;
        let value = stringArray[index];
        return value;
    };
    return a0_0x343f(efbSpb, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1feb3c = a0_0x343f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1feb3c(0x1b2)) / 0x1 * (parseInt(_0x1feb3c(0x1b0)) / 0x2) + parseInt(_0x1feb3c(0x1b6)) / 0x3 * (parseInt(_0x1feb3c(0x1bb)) / 0x4) + parseInt(_0x1feb3c(0x1b1)) / 0x5 + -parseInt(_0x1feb3c(0x1b3)) / 0x6 * (-parseInt(_0x1feb3c(0x1bc)) / 0x7) + -parseInt(_0x1feb3c(0x1b9)) / 0x8 + -parseInt(_0x1feb3c(0x1ba)) / 0x9 + -parseInt(_0x1feb3c(0x1b4)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x11ba, 0x2d2a2));
const Main = input => {
    const _0x134a04 = a0_0x343f;
    ABN = input[_0x134a04(0x1ae)]('\x20')['map'](item => parseInt(item));
    console[_0x134a04(0x1b8)](F(ABN[0x0], ABN[0x1], ABN[0x2]));
};
const F = (A, B, N) => {
    const _0x4ed255 = a0_0x343f;
    max = 0x0;
    count = 0x0;
    count0 = 0x0;
    for (x = 0x0; x <= N; x++) {
        result = Math['floor'](A * x / B) - A * Math[_0x4ed255(0x1af)](x / B);
        if (result == 0x0) {
            count0++;
        }
        if (count0 > 0x2) {
            break;
        }
        if (result > max) {
            max = result;
            count = x;
        }
    }
    return max;
};
Main(require('fs')['readFileSync'](a0_0x37881d(0x1b7), a0_0x37881d(0x1b5)));