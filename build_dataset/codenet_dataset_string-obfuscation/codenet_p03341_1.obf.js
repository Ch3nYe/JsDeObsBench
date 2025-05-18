'use strict';
const a0_0x297923 = a0_0x5669;
function a0_0x5669(vYfPEu, key) {
    const stringArray = a0_0x3fd5();
    a0_0x5669 = function (index, key) {
        index = index - 0x102;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5669(vYfPEu, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x163ab3 = a0_0x5669;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x163ab3(0x10a)) / 0x1 + parseInt(_0x163ab3(0x106)) / 0x2 + parseInt(_0x163ab3(0x10f)) / 0x3 + -parseInt(_0x163ab3(0x107)) / 0x4 + parseInt(_0x163ab3(0x108)) / 0x5 + parseInt(_0x163ab3(0x10e)) / 0x6 * (parseInt(_0x163ab3(0x10c)) / 0x7) + -parseInt(_0x163ab3(0x105)) / 0x8 * (-parseInt(_0x163ab3(0x10b)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3fd5, 0xa878a));
function a0_0x3fd5() {
    const _0x3ad3b2 = [
        '433526vkigiz',
        '3760456nyGxSd',
        '6179800uKqpfJ',
        'readFileSync',
        '1144416QJseLi',
        '18tYjstM',
        '110621MPwqHT',
        'utf8',
        '438dBnpob',
        '225048EWptis',
        'log',
        'trim',
        'split',
        '/dev/stdin',
        '372920WnqnhO'
    ];
    a0_0x3fd5 = function () {
        return _0x3ad3b2;
    };
    return a0_0x3fd5();
}
const main = arg => {
    const _0x5ad4b8 = a0_0x5669;
    arg = arg[_0x5ad4b8(0x102)]()[_0x5ad4b8(0x103)]('\x0a');
    const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const A = arg[0x1][_0x5ad4b8(0x103)]('');
    const Rsum = A['filter'](n => n === 'E')['length'];
    const Lsum = N - Rsum;
    let Rcnt = 0x0;
    let Lcnt = 0x0;
    let answer = Infinity;
    for (let i = 0x0; i < N; i++) {
        const needMoveLeft = Lcnt;
        let needMoveRight = Rsum - Rcnt;
        if (A[i] === 'E') {
            needMoveRight--;
        }
        answer = Math['min'](answer, needMoveLeft + needMoveRight);
        if (A[i] === 'W') {
            Lcnt++;
        } else {
            Rcnt++;
        }
    }
    console[_0x5ad4b8(0x110)](answer);
};
main(require('fs')[a0_0x297923(0x109)](a0_0x297923(0x104), a0_0x297923(0x10d)));