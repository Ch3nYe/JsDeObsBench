'use strict';
const a0_0x822c06 = a0_0xe77b;
function a0_0x3fa3() {
    const _0x1634d0 = [
        'split',
        'map',
        'delicious',
        'abs',
        'log',
        'safe',
        'dangerous',
        '/dev/stdin'
    ];
    a0_0x3fa3 = function () {
        return _0x1634d0;
    };
    return a0_0x3fa3();
}
function a0_0xe77b(iKIroC, key) {
    const stringArray = a0_0x3fa3();
    a0_0xe77b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xe77b(iKIroC, key);
}
const main = INPUT => {
    const _0x432a4d = a0_0xe77b;
    const input = INPUT['split']('\x0a')[0x0];
    const [X, A, B] = input[_0x432a4d(0x0)]('\x20')[_0x432a4d(0x1)](n => Number(n));
    if (A - B >= 0x0) {
        console['log'](_0x432a4d(0x2));
    } else if (A - B < 0x0 && Math[_0x432a4d(0x3)](A - B) <= X) {
        console[_0x432a4d(0x4)](_0x432a4d(0x5));
    } else {
        console[_0x432a4d(0x4)](_0x432a4d(0x6));
    }
};
main(require('fs')['readFileSync'](a0_0x822c06(0x7), 'utf8'));