'use strict';
function a0_0x1e78() {
    const _0x19bc68 = [
        '2853imepyP',
        'log',
        '3352740YhhQQQ',
        '830961twoPGZ',
        'abs',
        '22600uVPhkO',
        '4sTZmJM',
        '6706931TgzeaL',
        'utf8',
        '1412938NXYkMm',
        '5268495LLxEVx',
        'readFileSync',
        '6sYccLf',
        '72226610LFcztr',
        'split'
    ];
    a0_0x1e78 = function () {
        return _0x19bc68;
    };
    return a0_0x1e78();
}
const a0_0x5d9c6e = a0_0x5e4f;
(function (stringArrayFunction, comparisonValue) {
    const _0x3b49ef = a0_0x5e4f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x3b49ef(0x1f5)) / 0x1 + -parseInt(_0x3b49ef(0x1fd)) / 0x2 + parseInt(_0x3b49ef(0x1fe)) / 0x3 * (-parseInt(_0x3b49ef(0x1f2)) / 0x4) + -parseInt(_0x3b49ef(0x1f6)) / 0x5 + parseInt(_0x3b49ef(0x1f8)) / 0x6 * (-parseInt(_0x3b49ef(0x1f3)) / 0x7) + parseInt(_0x3b49ef(0x200)) / 0x8 * (-parseInt(_0x3b49ef(0x1fb)) / 0x9) + parseInt(_0x3b49ef(0x1f9)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e78, 0xe7b11));
function main(stdin) {
    const _0x30a286 = a0_0x5e4f;
    const input = stdin[_0x30a286(0x1fa)]('\x20')['map'](v => parseInt(v, 0xa));
    const N = input[0x0];
    const L = input[0x1];
    let sum = 0x0;
    let min = Infinity;
    for (let i = L; i < L + N; ++i) {
        sum += i;
        if (Math[_0x30a286(0x1ff)](i) < Math[_0x30a286(0x1ff)](min))
            min = i;
    }
    console[_0x30a286(0x1fc)](sum - min);
}
function a0_0x5e4f(huUTuX, key) {
    const stringArray = a0_0x1e78();
    a0_0x5e4f = function (index, key) {
        index = index - 0x1f2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5e4f(huUTuX, key);
}
main(require('fs')[a0_0x5d9c6e(0x1f7)]('/dev/stdin', a0_0x5d9c6e(0x1f4)));