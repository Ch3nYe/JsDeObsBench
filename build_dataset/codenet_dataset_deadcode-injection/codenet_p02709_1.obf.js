'use strict';
const a0_0x59b182 = a0_0x1e8f;
function a0_0x1e8f(YuDPan, key) {
    const stringArray = a0_0x23ab();
    a0_0x1e8f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e8f(YuDPan, key);
}
function a0_0x23ab() {
    const _0x30b98d = [
        'trim',
        'split',
        'map',
        'push',
        'max',
        'keys',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x23ab = function () {
        return _0x30b98d;
    };
    return a0_0x23ab();
}
const main = arg => {
    const _0x447e3b = a0_0x1e8f;
    const input = arg[_0x447e3b(0x0)]()['split']('\x0a');
    const n = parseInt(input[0x0]);
    const arr = input[0x1][_0x447e3b(0x1)]('\x20')[_0x447e3b(0x2)](n => parseInt(n));
    function cal(i, dst) {
        const _0x5436ea = a0_0x1e8f;
        if (i === -0x1)
            return 0x0;
        const results = [];
        for (const j of dst) {
            const next_dst = dst['filter'](v => v !== j);
            const abs = i > j ? i - j : j - i;
            const val = arr[i] * abs + cal(i - 0x1, next_dst);
            results[_0x5436ea(0x3)](val);
        }
        return Math[_0x5436ea(0x4)](...results);
    }
    console['log'](cal(n - 0x1, [...Array(n)[_0x447e3b(0x5)]()]));
};
main(require('fs')[a0_0x59b182(0x6)](a0_0x59b182(0x7), a0_0x59b182(0x8)));