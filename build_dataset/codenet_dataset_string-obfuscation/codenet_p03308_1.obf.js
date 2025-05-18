'use strict';
const a0_0x3745f2 = a0_0x2681;
(function (stringArrayFunction, comparisonValue) {
    const _0x15a6e6 = a0_0x2681;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x15a6e6(0xe2)) / 0x1 * (-parseInt(_0x15a6e6(0xeb)) / 0x2) + parseInt(_0x15a6e6(0xe4)) / 0x3 * (parseInt(_0x15a6e6(0xf2)) / 0x4) + -parseInt(_0x15a6e6(0xed)) / 0x5 * (-parseInt(_0x15a6e6(0xf1)) / 0x6) + -parseInt(_0x15a6e6(0xe8)) / 0x7 * (-parseInt(_0x15a6e6(0xe3)) / 0x8) + parseInt(_0x15a6e6(0xf0)) / 0x9 * (parseInt(_0x15a6e6(0xee)) / 0xa) + parseInt(_0x15a6e6(0xe9)) / 0xb + -parseInt(_0x15a6e6(0xe7)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x227f, 0x58c64));
function a0_0x2681(PdDOld, key) {
    const stringArray = a0_0x227f();
    a0_0x2681 = function (index, key) {
        index = index - 0xe2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2681(PdDOld, key);
}
function Main(input) {
    const _0x44fa80 = a0_0x2681;
    const params = input[_0x44fa80(0xef)]('\x0a');
    const n = Number(params[0x0]);
    let max = 0x0;
    let min = Math[_0x44fa80(0xec)](0xa, 0xa);
    params[0x1][_0x44fa80(0xef)]('\x20')[_0x44fa80(0xe5)](val => {
        const _0x3f3c6a = _0x44fa80;
        max = Math['max'](max, Number(val));
        min = Math[_0x3f3c6a(0xe6)](min, Number(val));
    });
    console['log'](max - min);
}
Main(require('fs')[a0_0x3745f2(0xea)](a0_0x3745f2(0xf3), a0_0x3745f2(0xf4)));
function a0_0x227f() {
    const _0x203f6a = [
        'utf8',
        '31186GDapxT',
        '928WvePdH',
        '128604NJDXwR',
        'forEach',
        'min',
        '14810784CJhNfp',
        '42903MkcYUw',
        '5298689tfIOcL',
        'readFileSync',
        '44uGNQOf',
        'pow',
        '42095odIuPg',
        '430RAwlMk',
        'split',
        '132768ABcyrN',
        '234IZBihg',
        '12LJZVBv',
        '/dev/stdin'
    ];
    a0_0x227f = function () {
        return _0x203f6a;
    };
    return a0_0x227f();
}