'use strict';
const a0_0x5732d1 = a0_0x1fcb;
function a0_0x3a04() {
    const _0x5d1bc9 = [
        'shift',
        'map',
        'length',
        'some',
        'utf8',
        'trim'
    ];
    a0_0x3a04 = function () {
        return _0x5d1bc9;
    };
    return a0_0x3a04();
}
function main(stdin) {
    const _0x1ae9c7 = a0_0x1fcb;
    const input = stdin['split']('\x0a');
    const N = Number(input[_0x1ae9c7(0x0)]());
    const params = input[_0x1ae9c7(0x1)](p => p['split']('\x20')[_0x1ae9c7(0x1)](v => parseInt(v, 0xa)));
    console['log'](solve(params));
}
function a0_0x1fcb(iShlfv, key) {
    const stringArray = a0_0x3a04();
    a0_0x1fcb = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1fcb(iShlfv, key);
}
function solve(params) {
    const _0x30bd1e = a0_0x1fcb;
    const l = params[_0x30bd1e(0x2)];
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
        const _0x2157d5 = a0_0x1fcb;
        return cur[_0x2157d5(0x3)](v => v < l - 0x1);
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
main(require('fs')['readFileSync']('/dev/stdin', a0_0x5732d1(0x4))[a0_0x5732d1(0x5)]());