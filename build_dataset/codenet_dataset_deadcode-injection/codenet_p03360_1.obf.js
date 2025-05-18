'use strict';
const a0_0x1fe90e = a0_0x39f8;
const main = input => {
    const _0x280fff = a0_0x39f8;
    input = input['split']('\x0a');
    const nums = input[0x0][_0x280fff(0x0)]('\x20')[_0x280fff(0x1)](i => parseInt(i));
    const K = parseInt(input[0x1]);
    nums[_0x280fff(0x2)]((a, b) => a - b);
    let n = nums[_0x280fff(0x3)]();
    n = n * Math[_0x280fff(0x4)](0x2, K);
    nums[_0x280fff(0x5)](n);
    console['log'](nums[_0x280fff(0x6)]((p, c) => p + c));
};
function a0_0x39f8(TklsDX, key) {
    const stringArray = a0_0x3626();
    a0_0x39f8 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x39f8(TklsDX, key);
}
main(require('fs')[a0_0x1fe90e(0x7)](a0_0x1fe90e(0x8), 'utf-8'));
function a0_0x3626() {
    const _0x11e70e = [
        'split',
        'map',
        'sort',
        'pop',
        'pow',
        'push',
        'reduce',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3626 = function () {
        return _0x11e70e;
    };
    return a0_0x3626();
}