const a0_0x415168 = a0_0x2171;
function a0_0x1b18() {
    const _0x2b6e45 = [
        'log',
        'split',
        'map',
        'ceil',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1b18 = function () {
        return _0x2b6e45;
    };
    return a0_0x1b18();
}
function a0_0x2171(ziyKYr, key) {
    const stringArray = a0_0x1b18();
    a0_0x2171 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2171(ziyKYr, key);
}
console[a0_0x415168(0x0)]((args => {
    const _0x5f1b7e = a0_0x2171;
    const [[N, A, B], ...h] = args['trim']()[_0x5f1b7e(0x1)]`\n`[_0x5f1b7e(0x2)](r => r[_0x5f1b7e(0x1)]` `[_0x5f1b7e(0x2)](v => v | 0x0));
    let ok = Math[_0x5f1b7e(0x3)](0x3b9aca00 / B), ng = 0x0;
    bisect:
        while (ok > ng + 0x1) {
            let m = ok + ng >> 0x1, k = m;
            for (let i = 0x0; i < N; i++) {
                let r = h[i] - m * B;
                if (r <= 0x0)
                    continue;
                k -= Math[_0x5f1b7e(0x3)](r / (A - B));
            }
            if (k >= 0x0)
                ok = m;
            else
                ng = m;
        }
    return '' + ok;
})(require('fs')[a0_0x415168(0x4)](a0_0x415168(0x5), a0_0x415168(0x6))));