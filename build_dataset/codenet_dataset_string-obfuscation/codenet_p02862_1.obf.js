'use strict';
function a0_0x1ffb() {
    const _0x2e468f = [
        '961624TFHSMn',
        '1661828HmNnAi',
        '135PUAXfw',
        '677010yEPtWJ',
        '6822aOlaYp',
        'trim',
        '109859girztB',
        '2AAqGRM',
        '104cTGgWE',
        'log',
        'utf8',
        'split',
        'max',
        '778971JvrryT',
        '148059YiJSpe',
        'min',
        'floor'
    ];
    a0_0x1ffb = function () {
        return _0x2e468f;
    };
    return a0_0x1ffb();
}
const a0_0x4628bf = a0_0x4344;
(function (stringArrayFunction, comparisonValue) {
    const _0x1c8b3d = a0_0x4344;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1c8b3d(0x1a1)) / 0x1 * (parseInt(_0x1c8b3d(0x1a2)) / 0x2) + -parseInt(_0x1c8b3d(0x197)) / 0x3 + parseInt(_0x1c8b3d(0x19b)) / 0x4 + parseInt(_0x1c8b3d(0x19d)) / 0x5 * (parseInt(_0x1c8b3d(0x19f)) / 0x6) + -parseInt(_0x1c8b3d(0x19c)) / 0x7 + -parseInt(_0x1c8b3d(0x1a3)) / 0x8 * (-parseInt(_0x1c8b3d(0x198)) / 0x9) + parseInt(_0x1c8b3d(0x19e)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1ffb, 0x2865b));
const ncr = (n, r, mod) => {
    const _0x49c761 = a0_0x4344;
    mod = mod || 0x3b9aca00 + 0x7;
    const a = Math[_0x49c761(0x196)](n, r);
    const b = Math['min'](n, r);
    const p = Math[_0x49c761(0x199)](b, a - b);
    const nu = new Array(p + 0x1);
    const de = new Array(p + 0x1);
    let dest = 0x1;
    if (p > 0x0) {
        for (let i = 0x1; i <= p; i++) {
            nu[i] = a - p + i;
            de[i] = i;
        }
        for (let k = 0x2; k <= p; k++) {
            const piv = de[k];
            const j = piv > 0x1 ? -((a - p) % k) : 0x0;
            for (let i = k; i <= p; i += k) {
                nu[i + j] /= piv;
                de[i] /= piv;
            }
        }
        for (let i = 0x1; i <= p; i++) {
            if (nu[i] > 0x1)
                dest = dest * nu[i] % mod;
        }
    }
    return dest;
};
function a0_0x4344(PBclVm, key) {
    const stringArray = a0_0x1ffb();
    a0_0x4344 = function (index, key) {
        index = index - 0x196;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4344(PBclVm, key);
}
function main(inp) {
    const _0x3348b8 = a0_0x4344;
    inp = inp[_0x3348b8(0x1a0)]()[_0x3348b8(0x1a6)]('\x20');
    const x = Number(inp[0x0]);
    const y = Number(inp[0x1]);
    let sum = 0x0;
    for (let i = Math[_0x3348b8(0x19a)](x / 0x2); i >= 0x0; i--) {
        const a = x - i * 0x2;
        if (a * 0x2 + i === y) {
            sum = ncr(i + a, i);
        }
    }
    console[_0x3348b8(0x1a4)](sum);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x4628bf(0x1a5)));