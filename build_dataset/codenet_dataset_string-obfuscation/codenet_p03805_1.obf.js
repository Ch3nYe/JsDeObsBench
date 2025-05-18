const a0_0x510317 = a0_0x7b26;
(function (stringArrayFunction, comparisonValue) {
    const _0x213be4 = a0_0x7b26;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x213be4(0xe9)) / 0x1 * (-parseInt(_0x213be4(0xf1)) / 0x2) + parseInt(_0x213be4(0xee)) / 0x3 * (parseInt(_0x213be4(0xf4)) / 0x4) + -parseInt(_0x213be4(0xed)) / 0x5 * (parseInt(_0x213be4(0xe4)) / 0x6) + parseInt(_0x213be4(0xf2)) / 0x7 + -parseInt(_0x213be4(0xe5)) / 0x8 * (parseInt(_0x213be4(0xeb)) / 0x9) + -parseInt(_0x213be4(0xf0)) / 0xa * (-parseInt(_0x213be4(0xea)) / 0xb) + -parseInt(_0x213be4(0xe3)) / 0xc * (-parseInt(_0x213be4(0xe6)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x55cf, 0x6f2bb));
function main(lines) {
    const _0x2c2a8e = a0_0x7b26;
    const [N, M] = na();
    const nodes = Array(N + 0x1)[_0x2c2a8e(0xf6)](0x0)[_0x2c2a8e(0xef)](() => new Set());
    for (let i = 0x1; i <= M; i++) {
        const [a, b] = na();
        nodes[a][_0x2c2a8e(0xf3)](b);
        nodes[b][_0x2c2a8e(0xf3)](a);
    }
    let ans = 0x0;
    searchRoute(nodes[0x1], [0x1]);
    function searchRoute(node, passed) {
        const _0x52f413 = _0x2c2a8e;
        if (passed['length'] == N)
            return ++ans;
        for (let n of node) {
            if (passed['includes'](n))
                continue;
            searchRoute(nodes[n], passed[_0x52f413(0xe8)](n));
        }
    }
    return ans;
}
const lines = require('fs')[a0_0x510317(0xec)]('/dev/stdin', 'utf8')[a0_0x510317(0xe7)]()['split']('\x0a');
let lineCount = 0x0;
function a0_0x55cf() {
    const _0x1b6d2b = [
        'readFileSync',
        '285iYKnhX',
        '27vONWIv',
        'map',
        '470820jXsiMA',
        '2IswTvt',
        '4107726jBSCXz',
        'add',
        '250748Hncpaw',
        'split',
        'fill',
        '617448wdJFfX',
        '58974uqmygz',
        '1074912KgJBfw',
        '26BeKGdd',
        'trim',
        'concat',
        '299147pIhJrm',
        '77ZptGjz',
        '18PnwjdP'
    ];
    a0_0x55cf = function () {
        return _0x1b6d2b;
    };
    return a0_0x55cf();
}
const s = () => lines[lineCount++];
const n = () => Number(s());
function a0_0x7b26(bQMhev, key) {
    const stringArray = a0_0x55cf();
    a0_0x7b26 = function (index, key) {
        index = index - 0xe3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7b26(bQMhev, key);
}
const b = () => BigInt(s());
const sa = () => s()[a0_0x510317(0xf5)]('\x20');
const na = () => sa()['map'](Number);
const ba = () => sa()[a0_0x510317(0xef)](BigInt);
const ans = main(lines);
console['log'](ans);