function a0_0x50e9() {
    const _0x1ab575 = [
        'log',
        '28SbIqUO',
        '70134PwocJZ',
        'trim',
        '189NnJzjL',
        '32117049GuKEHb',
        'length',
        '812720AMnaJK',
        '7862288MSHSdb',
        '1284506ztZwrQ',
        '1465389VHDCtt',
        '/dev/stdin',
        '394996tJkEjN'
    ];
    a0_0x50e9 = function () {
        return _0x1ab575;
    };
    return a0_0x50e9();
}
const a0_0x41e029 = a0_0x2995;
(function (stringArrayFunction, comparisonValue) {
    const _0x2c421c = a0_0x2995;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2c421c(0x180)) / 0x1 + -parseInt(_0x2c421c(0x17d)) / 0x2 + parseInt(_0x2c421c(0x17e)) / 0x3 + -parseInt(_0x2c421c(0x182)) / 0x4 * (parseInt(_0x2c421c(0x17b)) / 0x5) + -parseInt(_0x2c421c(0x183)) / 0x6 * (parseInt(_0x2c421c(0x178)) / 0x7) + -parseInt(_0x2c421c(0x17c)) / 0x8 + parseInt(_0x2c421c(0x179)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x50e9, 0x8e79a));
function a0_0x2995(vqPTqS, key) {
    const stringArray = a0_0x50e9();
    a0_0x2995 = function (index, key) {
        index = index - 0x178;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2995(vqPTqS, key);
}
console[a0_0x41e029(0x181)]((args => {
    const _0x24ce44 = a0_0x41e029;
    const s = args[_0x24ce44(0x184)]();
    const L = s[_0x24ce44(0x17a)];
    const p = Array(L)['fill'](0x0);
    for (let i = L; --i;)
        p[i - 0x1] = p[i] + (s[i] === 'p');
    let g = 0x0, w = 0x0;
    for (let i = 0x0; i < L; i++) {
        if (s[i] === 'g') {
            if (g > p[i]) {
                g--;
                w++;
            } else
                g++;
        } else
            g--;
    }
    return '' + w;
})(require('fs')['readFileSync'](a0_0x41e029(0x17f), 'utf8')));