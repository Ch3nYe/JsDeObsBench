const a0_0x9b58f8 = a0_0x3c24;
function a0_0x3c24(HibKZC, key) {
    const stringArray = a0_0x1b69();
    a0_0x3c24 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3c24(HibKZC, key);
}
const main = input => {
    const _0x4266ba = a0_0x3c24;
    const mod = 0xa ** 0x9 + 0x7;
    const [n, k] = input[_0x4266ba(0x0)]()[_0x4266ba(0x1)]('\x20')[_0x4266ba(0x2)](Number);
    let ans = 0x0;
    for (let i = k; i <= n + 0x1; i++) {
        const s_sum = (i - 0x1) * i / 0x2;
        const b_f = n - i + 0x1;
        const b_sum = (b_f + n) * i / 0x2;
        ans += b_sum - s_sum + 0x1;
    }
    return console['log']((ans % mod + mod) % mod);
};
function a0_0x1b69() {
    const _0x332211 = [
        'trim',
        'split',
        'map',
        'env',
        'MYTEST',
        'test',
        'readFileSync',
        'dev/stdin',
        'utf8'
    ];
    a0_0x1b69 = function () {
        return _0x332211;
    };
    return a0_0x1b69();
}
process[a0_0x9b58f8(0x3)]['MYTEST'] ? process['env'][a0_0x9b58f8(0x4)] === a0_0x9b58f8(0x5) ? test() : main(require('fs')[a0_0x9b58f8(0x6)](a0_0x9b58f8(0x7), a0_0x9b58f8(0x8))) : main(require('fs')[a0_0x9b58f8(0x6)]('/dev/stdin', a0_0x9b58f8(0x8)));