const a0_0x25b3d6 = a0_0x2aef;
function a0_0x2aef(sjNnex, key) {
    const stringArray = a0_0x1ca4();
    a0_0x2aef = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2aef(sjNnex, key);
}
const main = input => {
    const _0xb0ab22 = a0_0x2aef;
    const mod = 0xa ** 0x9 + 0x7;
    const s = Number(input[_0xb0ab22(0x0)]());
    const dp = [
        0x1,
        ...new Array(s)[_0xb0ab22(0x1)](0x0)
    ];
    for (let x = 0x3; x < dp[_0xb0ab22(0x2)]; x++) {
        let sum = 0x0;
        for (let i = x - 0x3; i >= 0x0; i--) {
            sum = (sum + dp[i]) % mod;
        }
        dp[x] = sum;
    }
    return console['log']((dp[s] % mod + mod) % mod);
};
process[a0_0x25b3d6(0x3)][a0_0x25b3d6(0x4)] ? process[a0_0x25b3d6(0x3)][a0_0x25b3d6(0x4)] === 'test' ? test() : main(require('fs')[a0_0x25b3d6(0x5)](a0_0x25b3d6(0x6), a0_0x25b3d6(0x7))) : main(require('fs')[a0_0x25b3d6(0x5)](a0_0x25b3d6(0x8), a0_0x25b3d6(0x7)));
function a0_0x1ca4() {
    const _0x14fb4b = [
        'trim',
        'fill',
        'length',
        'env',
        'MYTEST',
        'readFileSync',
        'dev/stdin',
        'utf8',
        '/dev/stdin'
    ];
    a0_0x1ca4 = function () {
        return _0x14fb4b;
    };
    return a0_0x1ca4();
}