'use strict';
function a0_0x3fef(adyiZq, key) {
    const stringArray = a0_0x529b();
    a0_0x3fef = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3fef(adyiZq, key);
}
const a0_0x2fdffd = a0_0x3fef;
const pf = (n, res) => {
    const _0x5a6f79 = a0_0x3fef;
    for (let i = 0x2; i <= n; i++) {
        if (_0x5a6f79(0x0) !== _0x5a6f79(0x1)) {
            while (n % i === 0x0) {
                n /= i;
                if (!(i in res))
                    res[i] = 0x0;
                res[i]++;
            }
        } else {
            n /= i;
            if (!(i in res))
                res[i] = 0x0;
            res[i]++;
        }
    }
    return res;
};
function main(input) {
    const _0x51131f = a0_0x3fef;
    input = Number(input[_0x51131f(0x2)]());
    const mod = 0x3b9aca00 + 0x7;
    let obj = {};
    let ans = 0x1;
    for (let i = 0x1; i <= input; i++) {
        obj = pf(i, obj);
    }
    Object['keys'](obj)[_0x51131f(0x3)](n => {
        ans = ans * (obj[n] + 0x1) % mod;
    });
    console[_0x51131f(0x4)](ans);
}
function a0_0x529b() {
    const _0x44648d = [
        'gRmJR',
        'pVKCr',
        'trim',
        'forEach',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x529b = function () {
        return _0x44648d;
    };
    return a0_0x529b();
}
main(require('fs')['readFileSync'](a0_0x2fdffd(0x5), a0_0x2fdffd(0x6)));