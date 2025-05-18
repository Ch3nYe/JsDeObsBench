'use strict';
const a0_0x1c0041 = a0_0x12a9;
const main = arg => {
    const _0x42ee8b = a0_0x12a9;
    arg = arg[_0x42ee8b(0x0)]()['split']('\x0a');
    const S = arg[0x0]['split']('');
    if (S[_0x42ee8b(0x1)] === 0x2) {
        console[_0x42ee8b(0x2)](0x1);
        return;
    }
    for (let i = 0x0; i < S['length']; i++) {
        S[_0x42ee8b(0x3)]();
        let mid = Math[_0x42ee8b(0x4)](S[_0x42ee8b(0x1)] / 0x2);
        if (S[_0x42ee8b(0x5)](0x0, mid)[_0x42ee8b(0x6)]('') === S['slice'](mid, S[_0x42ee8b(0x1)] + 0x1)[_0x42ee8b(0x6)]('')) {
            console[_0x42ee8b(0x2)](S[_0x42ee8b(0x1)]);
            return;
        }
    }
};
function a0_0x12a9(UNXnqu, key) {
    const stringArray = a0_0x5771();
    a0_0x12a9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x12a9(UNXnqu, key);
}
function a0_0x5771() {
    const _0x4f474b = [
        'trim',
        'length',
        'log',
        'pop',
        'floor',
        'slice',
        'join',
        'utf8'
    ];
    a0_0x5771 = function () {
        return _0x4f474b;
    };
    return a0_0x5771();
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x1c0041(0x7)));