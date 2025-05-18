'use strict';
const a0_0x42e09e = a0_0x3376;
function a0_0x3376(ViAvEu, key) {
    const stringArray = a0_0x2f58();
    a0_0x3376 = function (index, key) {
        index = index - 0x1e6;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3376(ViAvEu, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x2e6949 = a0_0x3376;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2e6949(0x1f4)) / 0x1 * (parseInt(_0x2e6949(0x1f3)) / 0x2) + -parseInt(_0x2e6949(0x1ec)) / 0x3 + parseInt(_0x2e6949(0x1eb)) / 0x4 + -parseInt(_0x2e6949(0x1e7)) / 0x5 * (parseInt(_0x2e6949(0x1ee)) / 0x6) + parseInt(_0x2e6949(0x1f2)) / 0x7 * (parseInt(_0x2e6949(0x1e9)) / 0x8) + -parseInt(_0x2e6949(0x1ed)) / 0x9 + -parseInt(_0x2e6949(0x1f0)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f58, 0x218ce));
const main = input => {
    const _0x2662b8 = a0_0x3376;
    input = input[_0x2662b8(0x1f6)]('\x0a');
    const N = parseInt(input[0x0][_0x2662b8(0x1f6)]('\x20')[0x0]);
    const X = parseInt(input[0x0][_0x2662b8(0x1f6)]('\x20')[0x1]);
    const arr = input[0x1][_0x2662b8(0x1f6)]('\x20')[_0x2662b8(0x1e8)](v => parseInt(v))[_0x2662b8(0x1ea)]((a, b) => a - b);
    let mostNear = 0x174876e800;
    arr[_0x2662b8(0x1ef)](v => {
        let dist = Math['abs'](X - v);
        if (dist < mostNear) {
            mostNear = dist;
        }
    });
    for (let i = mostNear; i >= 0x0; i--) {
        for (let v of arr) {
            let diff = Math[_0x2662b8(0x1e6)](v - X);
            if (diff % mostNear !== 0x0) {
                break;
            }
            console[_0x2662b8(0x1f5)](i);
            return;
        }
    }
};
function a0_0x2f58() {
    const _0x1763ef = [
        '315tYUjEs',
        '6hMtDUr',
        '24177zOerqJ',
        'log',
        'split',
        '/dev/stdin',
        'abs',
        '3635HGSvCj',
        'map',
        '21200TMzHQk',
        'sort',
        '374184XYktXS',
        '42648bXLeZO',
        '104733IgSBgw',
        '414CkrZfc',
        'forEach',
        '718890HErcsG',
        'utf-8'
    ];
    a0_0x2f58 = function () {
        return _0x1763ef;
    };
    return a0_0x2f58();
}
main(require('fs')['readFileSync'](a0_0x42e09e(0x1f7), a0_0x42e09e(0x1f1)));