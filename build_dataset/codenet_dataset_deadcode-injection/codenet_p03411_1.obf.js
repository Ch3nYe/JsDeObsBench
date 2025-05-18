function a0_0x2fb5() {
    const _0x405773 = [
        'trim',
        'split',
        'map',
        'push',
        'sort',
        'length',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2fb5 = function () {
        return _0x405773;
    };
    return a0_0x2fb5();
}
function a0_0x4366(AjbyTE, key) {
    const stringArray = a0_0x2fb5();
    a0_0x4366 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4366(AjbyTE, key);
}
const a0_0x32bece = a0_0x4366;
console['log']((args => {
    const _0xc67796 = a0_0x4366;
    const [[N], ...tmp] = args[_0xc67796(0x0)]()[_0xc67796(0x1)]('\x0a')[_0xc67796(0x2)](r => r[_0xc67796(0x1)]('\x20')[_0xc67796(0x2)](v => v | 0x0));
    const rp = [], bp = [];
    for (let i = 0x0; i < N; i++) {
        rp[_0xc67796(0x3)](tmp[i]);
        bp[_0xc67796(0x3)](tmp[N + i]);
    }
    bp[_0xc67796(0x4)](([a], [b]) => a - b);
    let count = 0x0;
    const test = [];
    for (let i = 0x0; i < N; i++) {
        const [bx, by] = bp[i];
        let max = [
            -0x1,
            -0x1
        ];
        for (let j = 0x0; j < rp[_0xc67796(0x5)]; j++) {
            const [rx, ry] = rp[j];
            if (bx < rx)
                continue;
            if (by > ry && ry > max[0x1])
                max = [
                    j,
                    ry
                ];
        }
        if (max[0x1] >= 0x0) {
            rp['splice'](max[0x0], 0x1);
            count++;
        }
    }
    return '' + count;
})(require('fs')['readFileSync'](a0_0x32bece(0x6), a0_0x32bece(0x7))));