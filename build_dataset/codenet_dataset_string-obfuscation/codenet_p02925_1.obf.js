'use strict';
const a0_0x2a5580 = a0_0x1ffe;
(function (stringArrayFunction, comparisonValue) {
    const _0x20c4f4 = a0_0x1ffe;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x20c4f4(0x1b3)) / 0x1 * (parseInt(_0x20c4f4(0x1ab)) / 0x2) + parseInt(_0x20c4f4(0x1b2)) / 0x3 * (-parseInt(_0x20c4f4(0x1b1)) / 0x4) + -parseInt(_0x20c4f4(0x1aa)) / 0x5 + -parseInt(_0x20c4f4(0x1b6)) / 0x6 + -parseInt(_0x20c4f4(0x1ae)) / 0x7 + parseInt(_0x20c4f4(0x1ad)) / 0x8 + -parseInt(_0x20c4f4(0x1a7)) / 0x9 * (-parseInt(_0x20c4f4(0x1af)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5576, 0xcd33f));
function main(stdin) {
    const _0x4aa43e = a0_0x1ffe;
    const input = stdin['split']('\x0a');
    const N = Number(input['shift']());
    const params = input[_0x4aa43e(0x1b4)](p => p[_0x4aa43e(0x1ac)]('\x20')['map'](v => parseInt(v, 0xa)));
    console[_0x4aa43e(0x1b8)](solve(params));
}
function a0_0x1ffe(MGTTtq, key) {
    const stringArray = a0_0x5576();
    a0_0x1ffe = function (index, key) {
        index = index - 0x1a7;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1ffe(MGTTtq, key);
}
function solve(params) {
    const _0x50ef98 = a0_0x1ffe;
    const l = params[_0x50ef98(0x1b0)];
    function matching() {
        let matched = ![];
        for (let i = 0x0; i < l; ++i) {
            const op = params[i][cur[i]] - 0x1;
            if (isNaN(op))
                continue;
            if (params[op][cur[op]] - 0x1 === i) {
                matched = !![];
                ++cur[i];
                ++cur[op];
            }
        }
        return matched;
    }
    function isNotCompleted() {
        const _0x1c5df5 = _0x50ef98;
        return cur[_0x1c5df5(0x1a8)](v => v < l - 0x1);
    }
    const cur = [];
    for (let i = 0x0; i < l; ++i) {
        cur[i] = 0x0;
    }
    let day = 0x1;
    while (isNotCompleted()) {
        const res = matching();
        if (res === ![])
            return -0x1;
        ++day;
    }
    return day;
}
main(require('fs')['readFileSync'](a0_0x2a5580(0x1a9), a0_0x2a5580(0x1b7))[a0_0x2a5580(0x1b5)]());
function a0_0x5576() {
    const _0x54330b = [
        'some',
        '/dev/stdin',
        '5301790VIbxEv',
        '446KGBZkc',
        'split',
        '13149912CCThUi',
        '6804462xaFELL',
        '50GzHbbJ',
        'length',
        '184612JzVfmH',
        '18hntMCj',
        '302KItoSF',
        'map',
        'trim',
        '9017202mVGCIJ',
        'utf8',
        'log',
        '5294943OSAhEc'
    ];
    a0_0x5576 = function () {
        return _0x54330b;
    };
    return a0_0x5576();
}