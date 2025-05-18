const a0_0x4fc52e = a0_0x1b72;
function a0_0x2ae7() {
    const _0x428f10 = [
        '6iPwWRY',
        'map',
        'readFileSync',
        'env',
        '13116pikdlE',
        'utf8',
        '9402633vvUTNk',
        '8rjmqiH',
        '141164ZaDKxp',
        '/dev/stdin',
        '51NFMPIK',
        'split',
        '284NOYqqp',
        'sort',
        '3553070HAHLKE',
        'log',
        '8268350BJeThe',
        '13123VtNaqa',
        '4663nxVSBM',
        '7529326ihEkXB',
        'push'
    ];
    a0_0x2ae7 = function () {
        return _0x428f10;
    };
    return a0_0x2ae7();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x509c10 = a0_0x1b72;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x509c10(0x1cf)) / 0x1 * (-parseInt(_0x509c10(0x1c9)) / 0x2) + parseInt(_0x509c10(0x1c7)) / 0x3 * (parseInt(_0x509c10(0x1c5)) / 0x4) + parseInt(_0x509c10(0x1cb)) / 0x5 * (parseInt(_0x509c10(0x1bd)) / 0x6) + -parseInt(_0x509c10(0x1bb)) / 0x7 + parseInt(_0x509c10(0x1c4)) / 0x8 * (-parseInt(_0x509c10(0x1c3)) / 0x9) + parseInt(_0x509c10(0x1cd)) / 0xa + parseInt(_0x509c10(0x1ce)) / 0xb * (parseInt(_0x509c10(0x1c1)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ae7, 0xa0d9c));
function a0_0x1b72(LwKEuv, key) {
    const stringArray = a0_0x2ae7();
    a0_0x1b72 = function (index, key) {
        index = index - 0x1bb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1b72(LwKEuv, key);
}
const main = input => {
    const _0x291e4b = a0_0x1b72;
    input = input['trim']()[_0x291e4b(0x1c8)]('\x0a');
    let n = parseInt(input[0x0], 0xa) - 0x2;
    const nums = input[0x1][_0x291e4b(0x1c8)]('\x20')[_0x291e4b(0x1be)](Number)[_0x291e4b(0x1ca)]((a, b) => b - a);
    let r = [0x1];
    for (n; n >= 0x2; n -= 0x2)
        r[_0x291e4b(0x1bc)](0x2);
    r[_0x291e4b(0x1bc)](n);
    return console[_0x291e4b(0x1cc)](r['reduce']((a, b, i) => a + b * nums[i], 0x0));
};
process[a0_0x4fc52e(0x1c0)]['MYTEST'] ? test() : main(require('fs')[a0_0x4fc52e(0x1bf)](a0_0x4fc52e(0x1c6), a0_0x4fc52e(0x1c2)));