function a0_0x2285() {
    const _0x11e37a = [
        '825949tNmElX',
        '5327615cZLezZ',
        '287ghRPMy',
        '30wfDelu',
        '3986382qQVhzM',
        '4aoKIwW',
        '24753751uXYCaH',
        'readFileSync',
        '79986tfCNYh',
        '2zNGZTE',
        'split',
        '15002480iBEbPo',
        'log',
        '4074507Uracwq',
        'utf8'
    ];
    a0_0x2285 = function () {
        return _0x11e37a;
    };
    return a0_0x2285();
}
function a0_0x31a5(xfwmha, key) {
    const stringArray = a0_0x2285();
    a0_0x31a5 = function (index, key) {
        index = index - 0x18c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x31a5(xfwmha, key);
}
const a0_0x5012ad = a0_0x31a5;
(function (stringArrayFunction, comparisonValue) {
    const _0x3b25e7 = a0_0x31a5;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x3b25e7(0x18d)) / 0x1 * (-parseInt(_0x3b25e7(0x196)) / 0x2) + -parseInt(_0x3b25e7(0x191)) / 0x3 + parseInt(_0x3b25e7(0x192)) / 0x4 * (parseInt(_0x3b25e7(0x18e)) / 0x5) + parseInt(_0x3b25e7(0x195)) / 0x6 * (-parseInt(_0x3b25e7(0x18f)) / 0x7) + parseInt(_0x3b25e7(0x198)) / 0x8 + parseInt(_0x3b25e7(0x19a)) / 0x9 * (parseInt(_0x3b25e7(0x190)) / 0xa) + -parseInt(_0x3b25e7(0x193)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2285, 0xf3f4d));
function Main(input) {
    const _0x414263 = a0_0x31a5;
    let inputs = input[_0x414263(0x197)]('\x20');
    let K = Number(inputs[0x0]);
    let S = Number(inputs[0x1]);
    let count = 0x0;
    for (let X = 0x0; X <= K; X++) {
        for (let Y = 0x0; Y <= K; Y++) {
            for (let Z = 0x0; Z <= K; Z++) {
                if (X + Y + Z === S) {
                    count++;
                }
            }
        }
    }
    console[_0x414263(0x199)](count);
}
Main(require('fs')[a0_0x5012ad(0x194)]('/dev/stdin', a0_0x5012ad(0x18c)));