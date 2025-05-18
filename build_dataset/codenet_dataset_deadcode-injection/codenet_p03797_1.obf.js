'use strict';
const a0_0x13f20 = a0_0x2206;
const create = () => {
    const _0x4c399f = a0_0x2206;
    const input = require('fs')[_0x4c399f(0x0)]('/dev/stdin', _0x4c399f(0x1))['trim']()['split']('\x0a');
    const res = {
        'list': input,
        'index': 0x0,
        'max': input['length'],
        'hasNext': function () {
            const _0x3dcfa7 = a0_0x2206;
            if (_0x3dcfa7(0x2) === _0x3dcfa7(0x3)) {
                if (!this[_0x3dcfa7(0x4)]()) {
                    throw _0x3dcfa7(0x5);
                } else {
                    return this[_0x3dcfa7(0x6)][this[_0x3dcfa7(0x7)]++];
                }
            } else {
                return this[_0x3dcfa7(0x7)] < this['max'];
            }
        },
        'next': function () {
            const _0x5ee300 = a0_0x2206;
            if (!this[_0x5ee300(0x4)]()) {
                if (_0x5ee300(0x8) !== _0x5ee300(0x9)) {
                    throw _0x5ee300(0x5);
                } else {
                    throw _0x5ee300(0x5);
                }
            } else {
                if ('UZzkk' !== _0x5ee300(0xa)) {
                    return this[_0x5ee300(0x7)] < this[_0x5ee300(0xb)];
                } else {
                    return this[_0x5ee300(0x6)][this[_0x5ee300(0x7)]++];
                }
            }
        }
    };
    return res;
};
const o = create();
const next = () => o[a0_0x13f20(0xc)]();
const nextInt = () => parseInt(o[a0_0x13f20(0xc)]());
const nextStrArray = () => o[a0_0x13f20(0xc)]()[a0_0x13f20(0xd)]('\x20');
const nextIntArray = () => o[a0_0x13f20(0xc)]()[a0_0x13f20(0xd)]('\x20')['map'](el => parseInt(el));
const nextCharArray = () => o[a0_0x13f20(0xc)]()[a0_0x13f20(0xd)]('');
function a0_0x3efd() {
    const _0x30f8d4 = [
        'readFileSync',
        'utf8',
        'eOoKS',
        'xSlEo',
        'hasNext',
        'ArrayIndexOutOfBoundsException',
        'list',
        'index',
        'RrusB',
        'LlOYH',
        'UZzkk',
        'max',
        'next',
        'split',
        'log',
        'floor'
    ];
    a0_0x3efd = function () {
        return _0x30f8d4;
    };
    return a0_0x3efd();
}
function a0_0x2206(ZSGUGG, key) {
    const stringArray = a0_0x3efd();
    a0_0x2206 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2206(ZSGUGG, key);
}
const hasNext = () => o[a0_0x13f20(0x4)]();
const myout = (...x) => console[a0_0x13f20(0xe)](...x);
const Main = () => {
    const _0x5ba0d8 = a0_0x2206;
    const [n, m] = nextIntArray();
    let ans = m <= 0x2 * n ? Math[_0x5ba0d8(0xf)](M / 0x2) : Math[_0x5ba0d8(0xf)]((0x2 * n + m) / 0x4);
    console['log'](ans);
};
Main();