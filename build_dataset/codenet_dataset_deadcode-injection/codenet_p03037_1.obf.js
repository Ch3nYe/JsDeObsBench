'use strict';
const a0_0x4db7a6 = a0_0xaf3f;
function a0_0x34f6() {
    const _0x5b6cf2 = [
        'split',
        'shift',
        'map',
        'forEach',
        'log',
        'filter',
        'length',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x34f6 = function () {
        return _0x5b6cf2;
    };
    return a0_0x34f6();
}
function a0_0xaf3f(RZkhwe, key) {
    const stringArray = a0_0x34f6();
    a0_0xaf3f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xaf3f(RZkhwe, key);
}
function main(stdin) {
    const _0x16269a = a0_0xaf3f;
    const input = stdin[_0x16269a(0x0)]('\x0a');
    const N = input[_0x16269a(0x1)]()[_0x16269a(0x0)]('\x20')[_0x16269a(0x2)](v => parseInt(v, 0xa))[0x0];
    const gates = input['map'](g => g['split']('\x20')[_0x16269a(0x2)](v => parseInt(v, 0xa)));
    const cards = new Array(N)['fill'](!![]);
    gates[_0x16269a(0x3)](g => {
        for (let i = 0x0; i < g[0x0] - 0x1; ++i) {
            cards[i] = ![];
        }
        for (let i = g[0x1]; i < N; ++i) {
            cards[i] = ![];
        }
    });
    console[_0x16269a(0x4)](cards[_0x16269a(0x5)](c => c)[_0x16269a(0x6)]);
}
main(require('fs')['readFileSync'](a0_0x4db7a6(0x7), a0_0x4db7a6(0x8)));