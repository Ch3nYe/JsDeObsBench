'use strict';
const a0_0x4f780e = a0_0x17ff;
function a0_0x17ff(utQyxs, key) {
    const stringArray = a0_0x5bcb();
    a0_0x17ff = function (index, key) {
        index = index - 0x1cc;
        let value = stringArray[index];
        return value;
    };
    return a0_0x17ff(utQyxs, key);
}
function a0_0x5bcb() {
    const _0x3323f9 = [
        '1966959VRbsyb',
        '6IWIbij',
        '404FHCjdu',
        '754142AVbNWX',
        'log',
        '10XVmxuS',
        'utf8',
        'readFileSync',
        '647383wpwpDo',
        '1MRHLtT',
        '24GCrsii',
        'abs',
        'length',
        'join',
        '56335YDAAQB',
        '1548KigZaM',
        '293033dNELdi',
        '4898313izWXRj',
        '1872489SISplt',
        'trim',
        'split'
    ];
    a0_0x5bcb = function () {
        return _0x3323f9;
    };
    return a0_0x5bcb();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x264168 = a0_0x17ff;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x264168(0x1cd)) / 0x1 * (parseInt(_0x264168(0x1dc)) / 0x2) + parseInt(_0x264168(0x1d6)) / 0x3 + -parseInt(_0x264168(0x1db)) / 0x4 * (parseInt(_0x264168(0x1d2)) / 0x5) + -parseInt(_0x264168(0x1da)) / 0x6 * (parseInt(_0x264168(0x1d5)) / 0x7) + parseInt(_0x264168(0x1ce)) / 0x8 * (-parseInt(_0x264168(0x1d9)) / 0x9) + parseInt(_0x264168(0x1de)) / 0xa * (-parseInt(_0x264168(0x1cc)) / 0xb) + -parseInt(_0x264168(0x1d3)) / 0xc * (-parseInt(_0x264168(0x1d4)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5bcb, 0x93219));
function main(input) {
    const _0x1deb3a = a0_0x17ff;
    const k = parseInt(input[0x0]);
    let i = 0x1;
    let runruncounter = 0x0;
    while (!![]) {
        const j = (i + '')[_0x1deb3a(0x1d8)]('')['map'](a => parseInt(a));
        let judge = !![];
        for (let l = 0x1; l < j[_0x1deb3a(0x1d0)]; l++) {
            if (Math[_0x1deb3a(0x1cf)](j[l] - j[l - 0x1]) > 0x1) {
                judge = ![];
                if (j[l] === 0x9) {
                    j[l - 0x1] += 0x1;
                    j[l] = 0x0;
                } else {
                    j[l] += 0x1;
                }
                i = parseInt(j[_0x1deb3a(0x1d1)](''));
                break;
            }
        }
        if (judge) {
            runruncounter++;
            if (runruncounter === k) {
                console[_0x1deb3a(0x1dd)](i);
                break;
            }
            i++;
        }
    }
}
main(require('fs')[a0_0x4f780e(0x1e0)]('/dev/stdin', a0_0x4f780e(0x1df))[a0_0x4f780e(0x1d7)]()['split']('\x0a'));