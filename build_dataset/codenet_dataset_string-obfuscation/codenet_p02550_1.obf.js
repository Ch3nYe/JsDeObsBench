const a0_0x3811a0 = a0_0x2d53;
(function (stringArrayFunction, comparisonValue) {
    const _0x182647 = a0_0x2d53;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x182647(0x1d0)) / 0x1 + -parseInt(_0x182647(0x1c4)) / 0x2 + -parseInt(_0x182647(0x1c2)) / 0x3 * (-parseInt(_0x182647(0x1c5)) / 0x4) + parseInt(_0x182647(0x1cb)) / 0x5 + parseInt(_0x182647(0x1d4)) / 0x6 * (parseInt(_0x182647(0x1cc)) / 0x7) + parseInt(_0x182647(0x1c9)) / 0x8 * (parseInt(_0x182647(0x1c7)) / 0x9) + -parseInt(_0x182647(0x1ca)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3d9e, 0x34e3c));
const input = require('fs')[a0_0x3811a0(0x1cf)](a0_0x3811a0(0x1c6), 'utf8');
function a0_0x2d53(WCrFTl, key) {
    const stringArray = a0_0x3d9e();
    a0_0x2d53 = function (index, key) {
        index = index - 0x1c2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2d53(WCrFTl, key);
}
const lines = input[a0_0x3811a0(0x1c8)]('\x0a');
const [N, X, M] = lines[0x0][a0_0x3811a0(0x1c8)]('\x20')[a0_0x3811a0(0x1d1)](Number);
let a = X;
const map = {};
const loop = [];
const pre = [a];
for (let i = 0x1; i < N; i++) {
    a = a * a % M;
    if (map[a] === 0x2) {
        break;
    } else if (map[a]) {
        loop['push'](a);
        pre[a0_0x3811a0(0x1d3)]();
    } else {
        pre['push'](a);
    }
    map[a] = (map[a] || 0x0) + 0x1;
}
function a0_0x3d9e() {
    const _0x36be30 = [
        '7BctaVd',
        'reduce',
        'length',
        'readFileSync',
        '226946nctVgW',
        'map',
        'push',
        'pop',
        '744456pvmgxU',
        'floor',
        '211215mdeqTj',
        'log',
        '22090RgOZuM',
        '20PBmWJB',
        '/dev/stdin',
        '18AKbZEn',
        'split',
        '1710056oIwDqn',
        '5068170HGVSKB',
        '289145xuuzFw'
    ];
    a0_0x3d9e = function () {
        return _0x36be30;
    };
    return a0_0x3d9e();
}
const suf = [];
for (let i = 0x0; i < (N - pre[a0_0x3811a0(0x1ce)]) % (loop[a0_0x3811a0(0x1ce)] || 0x1); i++) {
    suf[a0_0x3811a0(0x1d2)](loop[i]);
}
const sum = loop['reduce']((a, b) => a + b, 0x0);
const lt = loop[a0_0x3811a0(0x1ce)] ? Math[a0_0x3811a0(0x1d5)]((N - pre[a0_0x3811a0(0x1ce)]) / loop[a0_0x3811a0(0x1ce)]) : 0x0;
console[a0_0x3811a0(0x1c3)](pre[a0_0x3811a0(0x1cd)]((a, b) => a + b, 0x0) + sum * lt + suf[a0_0x3811a0(0x1cd)]((a, b) => a + b, 0x0));