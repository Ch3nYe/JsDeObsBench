'use strict';
const a0_0x246cd3 = a0_0x39ec;
(function (stringArrayFunction, comparisonValue) {
    const _0x443404 = a0_0x39ec;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x443404(0x17e)) / 0x1 * (parseInt(_0x443404(0x189)) / 0x2) + parseInt(_0x443404(0x17d)) / 0x3 + -parseInt(_0x443404(0x188)) / 0x4 + -parseInt(_0x443404(0x18b)) / 0x5 + -parseInt(_0x443404(0x184)) / 0x6 * (-parseInt(_0x443404(0x182)) / 0x7) + -parseInt(_0x443404(0x186)) / 0x8 * (parseInt(_0x443404(0x187)) / 0x9) + parseInt(_0x443404(0x17c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42d0, 0xa46d0));
function main(input) {
    const _0x416078 = a0_0x39ec;
    input = input[_0x416078(0x18a)]('\x0a');
    input[0x0] = input[0x0][_0x416078(0x18a)]('\x20')[_0x416078(0x17f)](v => ~~v);
    const h = input[0x0][0x0];
    const w = input[0x0][0x1];
    let tmp = '#'[_0x416078(0x180)](w + 0x2) + '\x0a';
    for (let i = 0x1; i <= h; i++) {
        tmp += '#' + input[i] + '#\x0a';
    }
    tmp += '#'['repeat'](w + 0x2);
    console['log'](tmp);
}
function a0_0x39ec(oOvpVI, key) {
    const stringArray = a0_0x42d0();
    a0_0x39ec = function (index, key) {
        index = index - 0x17c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x39ec(oOvpVI, key);
}
function a0_0x42d0() {
    const _0x34d7f2 = [
        '41864lFGoxP',
        '81zByTlW',
        '3915624LLDdtR',
        '15634YoJpxG',
        'split',
        '1555000XjreDy',
        '654780BePYUI',
        '2670537FfBGod',
        '95tNpLwW',
        'map',
        'repeat',
        'readFileSync',
        '242837PDZoRn',
        'utf8',
        '54MxfkNn',
        '/dev/stdin'
    ];
    a0_0x42d0 = function () {
        return _0x34d7f2;
    };
    return a0_0x42d0();
}
main(require('fs')[a0_0x246cd3(0x181)](a0_0x246cd3(0x185), a0_0x246cd3(0x183)));