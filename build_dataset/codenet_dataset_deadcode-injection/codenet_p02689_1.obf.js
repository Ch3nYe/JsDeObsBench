'use strict';
function a0_0x18c9() {
    const _0x44f3e2 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'map',
        'forEach',
        'push',
        'length',
        'iaoID',
        'UJnMM',
        'SvkIY',
        'UQhGz',
        'Ygyvd',
        'sbFJM',
        'log'
    ];
    a0_0x18c9 = function () {
        return _0x44f3e2;
    };
    return a0_0x18c9();
}
const a0_0x330ad8 = a0_0x2b36;
const inputs = require('fs')[a0_0x330ad8(0x0)](a0_0x330ad8(0x1), a0_0x330ad8(0x2))[a0_0x330ad8(0x3)]('\x0a');
inputs['shift']();
const heights = inputs[a0_0x330ad8(0x4)]()['split']('\x20')[a0_0x330ad8(0x5)](v => parseInt(v, 0xa));
const towers = new Array(heights['length'])['fill']()[a0_0x330ad8(0x5)](_ => new Array());
inputs[a0_0x330ad8(0x6)](v => {
    const _0x2f6dd1 = a0_0x2b36;
    const splited = v[_0x2f6dd1(0x3)]('\x20')['map'](w => parseInt(w, 0xa) - 0x1);
    towers[splited[0x0]][_0x2f6dd1(0x7)](splited[0x1]);
    towers[splited[0x1]][_0x2f6dd1(0x7)](splited[0x0]);
});
let result = 0x0;
towers['forEach']((t, i) => {
    const _0x8556b2 = a0_0x2b36;
    let good = !![];
    if (t[_0x8556b2(0x8)]) {
        t[_0x8556b2(0x6)](t2 => {
            const _0xd80da9 = a0_0x2b36;
            if (_0xd80da9(0x9) !== _0xd80da9(0xa)) {
                if (heights[i] <= heights[t2]) {
                    if (_0xd80da9(0xb) !== _0xd80da9(0xc)) {
                        good = ![];
                    } else {
                        t[_0xd80da9(0x6)](t2 => {
                            if (heights[i] <= heights[t2]) {
                                good = ![];
                            }
                        });
                    }
                }
            } else {
                ++result;
            }
        });
    }
    if (good) {
        if (_0x8556b2(0xd) === _0x8556b2(0xe)) {
            if (heights[i] <= heights[t2]) {
                good = ![];
            }
        } else {
            ++result;
        }
    }
});
function a0_0x2b36(KpGItX, key) {
    const stringArray = a0_0x18c9();
    a0_0x2b36 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b36(KpGItX, key);
}
console[a0_0x330ad8(0xf)](result);