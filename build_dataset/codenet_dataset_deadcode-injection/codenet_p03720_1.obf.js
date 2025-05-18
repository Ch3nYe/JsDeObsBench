'use strict';
const a0_0x2d55e9 = a0_0x40fe;
let lines = require('fs')['readFileSync']('/dev/stdin', a0_0x2d55e9(0x0))[a0_0x2d55e9(0x1)]('\x0a');
let N = +lines[0x0][a0_0x2d55e9(0x1)]('\x20')[0x0];
let ABs = lines['slice'](0x1)['map'](line => line[a0_0x2d55e9(0x1)]('\x20')[a0_0x2d55e9(0x2)](Number));
function a0_0x576d() {
    const _0x38eca9 = [
        'utf8',
        'split',
        'map',
        'forEach',
        'log'
    ];
    a0_0x576d = function () {
        return _0x38eca9;
    };
    return a0_0x576d();
}
let res = [];
function a0_0x40fe(NdIGwB, key) {
    const stringArray = a0_0x576d();
    a0_0x40fe = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x40fe(NdIGwB, key);
}
for (let i = 0x0; i < N; i++)
    res[i] = 0x0;
ABs[a0_0x2d55e9(0x3)](ab => {
    res[ab[0x0] - 0x1]++;
    res[ab[0x1] - 0x1]++;
});
res['forEach'](n => console[a0_0x2d55e9(0x4)](n));