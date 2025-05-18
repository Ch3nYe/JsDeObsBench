const a0_0x5a310b = a0_0x50cd;
(function (stringArrayFunction, comparisonValue) {
    const _0x476c5c = a0_0x50cd;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x476c5c(0x83)) / 0x1 + parseInt(_0x476c5c(0x77)) / 0x2 + -parseInt(_0x476c5c(0x7b)) / 0x3 * (parseInt(_0x476c5c(0x78)) / 0x4) + -parseInt(_0x476c5c(0x7c)) / 0x5 * (-parseInt(_0x476c5c(0x76)) / 0x6) + parseInt(_0x476c5c(0x80)) / 0x7 * (parseInt(_0x476c5c(0x79)) / 0x8) + -parseInt(_0x476c5c(0x81)) / 0x9 + parseInt(_0x476c5c(0x7e)) / 0xa * (-parseInt(_0x476c5c(0x82)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4253, 0x2bfba));
function a0_0x50cd(euTFdx, key) {
    const stringArray = a0_0x4253();
    a0_0x50cd = function (index, key) {
        index = index - 0x74;
        let value = stringArray[index];
        return value;
    };
    return a0_0x50cd(euTFdx, key);
}
console['log']((args => {
    const _0x788c13 = a0_0x50cd;
    const [[N, A, B], ...h] = args['trim']()[_0x788c13(0x75)]`\n`[_0x788c13(0x74)](r => r['split']` `[_0x788c13(0x74)](v => v | 0x0));
    let ok = Math[_0x788c13(0x7a)](0x3b9aca00 / B), ng = 0x0;
    bisect:
        while (ok > ng + 0x1) {
            let m = ok + ng >> 0x1, k = m;
            for (let i = 0x0; i < N; i++) {
                let r = h[i] - m * B;
                if (r <= 0x0)
                    continue;
                k -= Math[_0x788c13(0x7a)](r / (A - B));
            }
            if (k >= 0x0)
                ok = m;
            else
                ng = m;
        }
    return '' + ok;
})(require('fs')['readFileSync'](a0_0x5a310b(0x7d), a0_0x5a310b(0x7f))));
function a0_0x4253() {
    const _0x462788 = [
        '3nNqJKW',
        '7400dYaAEF',
        '/dev/stdin',
        '729580MYEaoA',
        'utf8',
        '14IiWchs',
        '2748285jJRyxj',
        '33cLnKuB',
        '57586WTsNiR',
        'map',
        'split',
        '978FqlWtG',
        '334244FyozEZ',
        '455788TaJYot',
        '1409568atyUZn',
        'ceil'
    ];
    a0_0x4253 = function () {
        return _0x462788;
    };
    return a0_0x4253();
}