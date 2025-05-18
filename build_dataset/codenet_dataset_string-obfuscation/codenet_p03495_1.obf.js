'use strict';
const a0_0x5c7d18 = a0_0x1e41;
(function (stringArrayFunction, comparisonValue) {
    const _0x55558f = a0_0x1e41;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x55558f(0x1de)) / 0x1 * (-parseInt(_0x55558f(0x1e0)) / 0x2) + -parseInt(_0x55558f(0x1e2)) / 0x3 + parseInt(_0x55558f(0x1e1)) / 0x4 * (-parseInt(_0x55558f(0x1e4)) / 0x5) + -parseInt(_0x55558f(0x1e3)) / 0x6 + -parseInt(_0x55558f(0x1d6)) / 0x7 + -parseInt(_0x55558f(0x1d7)) / 0x8 * (parseInt(_0x55558f(0x1d2)) / 0x9) + parseInt(_0x55558f(0x1d5)) / 0xa * (parseInt(_0x55558f(0x1d9)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x37d5, 0x6682d));
function main(s) {
    const _0x194ca6 = a0_0x1e41;
    s = s['split']('\x0a');
    const K = Number(s[0x0][_0x194ca6(0x1d8)]('\x20')[0x1]);
    const balls = s[0x1][_0x194ca6(0x1d8)]('\x20')[_0x194ca6(0x1db)](el => Number(el));
    const countBucket = [...Array(0x30d41)][_0x194ca6(0x1d3)](0x0);
    for (const num of balls) {
        countBucket[num] += 0x1;
    }
    countBucket[_0x194ca6(0x1d4)]((a, b) => b - a);
    const answer = countBucket[_0x194ca6(0x1dd)](K)[_0x194ca6(0x1da)]((a, b) => a + b);
    console['log'](answer);
}
function a0_0x37d5() {
    const _0xd0dae3 = [
        'utf8',
        '135kWORfP',
        'fill',
        'sort',
        '12371840aXwGrL',
        '3327835WVGijT',
        '425680FugBiP',
        'split',
        '22ucILoM',
        'reduce',
        'map',
        'readFileSync',
        'slice',
        '2GuenZt',
        '/dev/stdin',
        '2202mvFhqR',
        '16nobqoz',
        '1037520yIrOEE',
        '2196828wboUoB',
        '88940NeiCGD'
    ];
    a0_0x37d5 = function () {
        return _0xd0dae3;
    };
    return a0_0x37d5();
}
function a0_0x1e41(dYkXeR, key) {
    const stringArray = a0_0x37d5();
    a0_0x1e41 = function (index, key) {
        index = index - 0x1d2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e41(dYkXeR, key);
}
main(require('fs')[a0_0x5c7d18(0x1dc)](a0_0x5c7d18(0x1df), a0_0x5c7d18(0x1e5)));