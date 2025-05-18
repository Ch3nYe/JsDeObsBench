'use strict';
const create = () => {
    const _0x1a3bb1 = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    const _0x34dbc4 = {
        'list': _0x1a3bb1,
        'index': 0x0,
        'max': _0x1a3bb1['length'],
        'hasNext': function () {
            return this['index'] < this['max'];
        },
        'next': function () {
            if (!this['hasNext']()) {
                throw 'ArrayIndexOutOfBoundsException';
            } else {
                return this['list'][this['index']++];
            }
        }
    };
    return _0x34dbc4;
};
const o = create();
const next = () => o['next']();
const nextInt = () => parseInt(o['next']());
const nextStrArray = () => o['next']()['split']('\x20');
const nextIntArray = () => o['next']()['split']('\x20')['map'](_0x194607 => parseInt(_0x194607));
const nextCharArray = () => o['next']()['split']('');
const hasNext = () => o['hasNext']();
const myout = (..._0x16e0f8) => console['log'](..._0x16e0f8);
const Main = () => {
    const [_0x5a2e02, _0x3f01e5] = nextIntArray();
    let _0x530534 = _0x3f01e5 <= 0x2 * _0x5a2e02 ? Math['floor'](M / 0x2) : Math['floor']((0x2 * _0x5a2e02 + _0x3f01e5) / 0x4);
    console['log'](_0x530534);
};
Main();