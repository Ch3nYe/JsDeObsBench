'use strict';
const a0_0x43b797 = a0_0x215d;
(function (stringArrayFunction, comparisonValue) {
    const _0x16be69 = a0_0x215d;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x16be69(0xdc)) / 0x1 + -parseInt(_0x16be69(0xe1)) / 0x2 * (-parseInt(_0x16be69(0xdd)) / 0x3) + -parseInt(_0x16be69(0xd1)) / 0x4 + parseInt(_0x16be69(0xdb)) / 0x5 + parseInt(_0x16be69(0xd3)) / 0x6 * (-parseInt(_0x16be69(0xd7)) / 0x7) + -parseInt(_0x16be69(0xe3)) / 0x8 + parseInt(_0x16be69(0xd0)) / 0x9 * (parseInt(_0x16be69(0xe5)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f13, 0x493cb));
const create = () => {
    const _0x7a6e3b = a0_0x215d;
    const input = require('fs')[_0x7a6e3b(0xda)](_0x7a6e3b(0xe4), _0x7a6e3b(0xe0))['trim']()[_0x7a6e3b(0xd6)]('\x0a');
    const res = {
        'list': input,
        'index': 0x0,
        'max': input['length'],
        'hasNext': function () {
            const _0x1ed9b8 = _0x7a6e3b;
            return this[_0x1ed9b8(0xd9)] < this[_0x1ed9b8(0xe2)];
        },
        'next': function () {
            const _0x399ab2 = _0x7a6e3b;
            if (!this[_0x399ab2(0xd8)]()) {
                throw _0x399ab2(0xdf);
            } else {
                return this[_0x399ab2(0xde)][this['index']++];
            }
        }
    };
    return res;
};
const o = create();
const next = () => o['next']();
function a0_0x215d(lmTmeT, key) {
    const stringArray = a0_0x3f13();
    a0_0x215d = function (index, key) {
        index = index - 0xcf;
        let value = stringArray[index];
        return value;
    };
    return a0_0x215d(lmTmeT, key);
}
const nextInt = () => parseInt(o[a0_0x43b797(0xd4)]());
const nextStrArray = () => o[a0_0x43b797(0xd4)]()[a0_0x43b797(0xd6)]('\x20');
const nextIntArray = () => o[a0_0x43b797(0xd4)]()[a0_0x43b797(0xd6)]('\x20')[a0_0x43b797(0xd2)](el => parseInt(el));
const nextCharArray = () => o[a0_0x43b797(0xd4)]()['split']('');
const hasNext = () => o['hasNext']();
function a0_0x3f13() {
    const _0x44362b = [
        '27594QGlAVj',
        '222328RHaRvd',
        'map',
        '18zDlcsk',
        'next',
        'log',
        'split',
        '1190567dvzSor',
        'hasNext',
        'index',
        'readFileSync',
        '1760310wPUhox',
        '247105ZzrAdO',
        '1722gOnGdU',
        'list',
        'ArrayIndexOutOfBoundsException',
        'utf8',
        '436rkuuQn',
        'max',
        '1369816YBoPiF',
        '/dev/stdin',
        '1020BgBoYd',
        'floor'
    ];
    a0_0x3f13 = function () {
        return _0x44362b;
    };
    return a0_0x3f13();
}
const myout = (...x) => console[a0_0x43b797(0xd5)](...x);
const Main = () => {
    const _0x146da9 = a0_0x43b797;
    const [n, m] = nextIntArray();
    let ans = m <= 0x2 * n ? Math[_0x146da9(0xcf)](M / 0x2) : Math[_0x146da9(0xcf)]((0x2 * n + m) / 0x4);
    console['log'](ans);
};
Main();