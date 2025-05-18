'use strict';
const a0_0x327b3d = a0_0x1d2b;
function a0_0x1d2b(mPnFiK, key) {
    const stringArray = a0_0x354c();
    a0_0x1d2b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1d2b(mPnFiK, key);
}
const main = input => {
    const _0x361a38 = a0_0x1d2b;
    input = input['trim']()[_0x361a38(0x0)]('\x0a');
    const K = parseInt(input[0x0][_0x361a38(0x0)]('\x20')[0x0]);
    const T = parseInt(input[0x0][_0x361a38(0x0)]('\x20')[0x1]);
    let a = input[0x1]['split']('\x20')[_0x361a38(0x1)](el => {
        return parseInt(el);
    });
    let max = a[_0x361a38(0x2)](function (previous, current) {
        return previous > current ? previous : current;
    });
    if (max - 0x1 - (K - max) > 0x0) {
        console[_0x361a38(0x3)](max - 0x1 - (K - max));
    } else {
        console['log'](0x0);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', a0_0x327b3d(0x4)));
function a0_0x354c() {
    const _0x161dc0 = [
        'split',
        'map',
        'reduce',
        'log',
        'utf8'
    ];
    a0_0x354c = function () {
        return _0x161dc0;
    };
    return a0_0x354c();
}