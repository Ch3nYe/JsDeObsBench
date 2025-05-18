'use strict';
const a0_0x737d3f = a0_0x4a13;
(function (stringArrayFunction, comparisonValue) {
    const _0xcd8042 = a0_0x4a13;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xcd8042(0x101)) / 0x1 * (-parseInt(_0xcd8042(0x108)) / 0x2) + parseInt(_0xcd8042(0x10c)) / 0x3 + parseInt(_0xcd8042(0x10a)) / 0x4 * (parseInt(_0xcd8042(0x10e)) / 0x5) + parseInt(_0xcd8042(0x107)) / 0x6 * (parseInt(_0xcd8042(0x100)) / 0x7) + parseInt(_0xcd8042(0x109)) / 0x8 + parseInt(_0xcd8042(0x103)) / 0x9 * (-parseInt(_0xcd8042(0x10d)) / 0xa) + -parseInt(_0xcd8042(0x102)) / 0xb * (parseInt(_0xcd8042(0x105)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c71, 0xdb09b));
const Main = input => {
    const _0x1f51e6 = a0_0x4a13;
    let xs = input['trim']()['split']('\x20')[_0x1f51e6(0x106)](v => parseInt(v, 0xa));
    let m = xs[0x0];
    let n = xs[0x1];
    let r = 0x0;
    let d = 0x0;
    let x = m;
    let y = n;
    if (m >= n) {
        while (n > 0x0) {
            let r = m % n;
            m = n;
            n = r;
        }
        d = m;
    } else {
        while (m > 0x0) {
            r = n % m;
            n = m;
            m = r;
        }
        d = n;
    }
    let ans = x * y / d;
    console[_0x1f51e6(0x10b)](ans);
};
function a0_0x4a13(ckJxHe, key) {
    const stringArray = a0_0x2c71();
    a0_0x4a13 = function (index, key) {
        index = index - 0x100;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4a13(ckJxHe, key);
}
Main(require('fs')[a0_0x737d3f(0x10f)](a0_0x737d3f(0x110), a0_0x737d3f(0x104)));
function a0_0x2c71() {
    const _0x2f7191 = [
        '26oAoTMk',
        '3058165rVCTjU',
        '1089caVgGz',
        'utf8',
        '72YgpUwo',
        'map',
        '12018VsnRmk',
        '13950PxhNqu',
        '11569264ZGRXtA',
        '5884ynrkUt',
        'log',
        '2064702hcZhPD',
        '136130AQkwgV',
        '5045qevULF',
        'readFileSync',
        '/dev/stdin',
        '2709djoDZB'
    ];
    a0_0x2c71 = function () {
        return _0x2f7191;
    };
    return a0_0x2c71();
}