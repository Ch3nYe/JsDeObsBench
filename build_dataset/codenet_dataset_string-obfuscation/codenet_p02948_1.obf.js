'use strict';
const a0_0x14bfa9 = a0_0x1dd9;
function a0_0x1dd9(YVTRXK, key) {
    const stringArray = a0_0x190f();
    a0_0x1dd9 = function (index, key) {
        index = index - 0xe5;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1dd9(YVTRXK, key);
}
function a0_0x190f() {
    const _0x18f004 = [
        'sort',
        '2917240pyaRDA',
        '119189qAvamM',
        '17872659jYfWEk',
        'length',
        '272865UPMnwH',
        '1284240Hxtflw',
        'log',
        'slice',
        'map',
        '88MOAjFf',
        '/dev/stdin',
        '1523352zzZnNN',
        '1849602vCvIib',
        'trim',
        'split',
        'filter',
        '28qzKOiU'
    ];
    a0_0x190f = function () {
        return _0x18f004;
    };
    return a0_0x190f();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x9439ba = a0_0x1dd9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x9439ba(0xf3)) / 0x1 + -parseInt(_0x9439ba(0xe8)) / 0x2 + parseInt(_0x9439ba(0xf2)) / 0x3 * (-parseInt(_0x9439ba(0xec)) / 0x4) + -parseInt(_0x9439ba(0xee)) / 0x5 + -parseInt(_0x9439ba(0xe7)) / 0x6 + -parseInt(_0x9439ba(0xef)) / 0x7 * (parseInt(_0x9439ba(0xe5)) / 0x8) + parseInt(_0x9439ba(0xf0)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x190f, 0xa6fc0));
function Main(input) {
    const _0x2d85e1 = a0_0x1dd9;
    const N = Number(input[_0x2d85e1(0xea)]('\x0a')[0x0][_0x2d85e1(0xea)]('\x20')[0x0]);
    const M = Number(input[_0x2d85e1(0xea)]('\x0a')[0x0][_0x2d85e1(0xea)]('\x20')[0x1]);
    const list = input[_0x2d85e1(0xea)]('\x0a')[_0x2d85e1(0xf5)](0x1)[_0x2d85e1(0xf6)](x => x['split']('\x20')['map'](x => Number(x)))[_0x2d85e1(0xeb)](x => x[0x0] <= M)[_0x2d85e1(0xed)]((a, b) => {
        if (a[0x1] === b[0x1]) {
            return b[0x0] - a[0x0];
        } else {
            return b[0x1] - a[0x1];
        }
    });
    let ans = 0x0;
    let now = 0x0;
    if (list[_0x2d85e1(0xf1)] === 0x0) {
        console[_0x2d85e1(0xf4)](0x0);
        return;
    }
    for (let i = 0x0; i < N; i++) {
        if (now === M) {
            break;
        }
        if (list[i][0x0] > M - now) {
            continue;
        }
        ans += list[i][0x1];
        now++;
    }
    console[_0x2d85e1(0xf4)](ans);
}
Main(require('fs')['readFileSync'](a0_0x14bfa9(0xe6), 'utf8')[a0_0x14bfa9(0xe9)]());