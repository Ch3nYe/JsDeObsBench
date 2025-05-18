'use strict';
const create = () => {
    const GgkpFA = {
        'YPzHd': function (x, y) {
            return x < y;
        },
        'VPXqD': 'ArrayIndexOutOfBoundsException',
        'NilFU': function (callee, param1) {
            return callee(param1);
        },
        'fXFTq': '/dev/stdin',
        'bblNN': 'utf8'
    };
    const input = GgkpFA['NilFU'](require, 'fs')['readFileSync'](GgkpFA['fXFTq'], GgkpFA['bblNN'])['trim']()['split']('\x0a');
    const res = {
        'list': input,
        'index': 0x0,
        'max': input['length'],
        'hasNext': function () {
            return GgkpFA['YPzHd'](this['index'], this['max']);
        },
        'next': function () {
            if (!this['hasNext']()) {
                throw GgkpFA['VPXqD'];
            } else {
                return this['list'][this['index']++];
            }
        }
    };
    return res;
};
const o = create();
const next = () => o['next']();
const nextInt = () => parseInt(o['next']());
const nextStrArray = () => o['next']()['split']('\x20');
const nextIntArray = () => o['next']()['split']('\x20')['map'](el => parseInt(el));
const nextCharArray = () => o['next']()['split']('');
const hasNext = () => o['hasNext']();
const myout = (...x) => console['log'](...x);
const Main = () => {
    const HaYGBz = {
        'Ydcve': function (callee) {
            return callee();
        },
        'cCsyk': function (x, y) {
            return x <= y;
        },
        'ZmOMH': function (x, y) {
            return x * y;
        },
        'KExIS': function (x, y) {
            return x / y;
        },
        'pzYil': function (x, y) {
            return x / y;
        }
    };
    const [n, m] = HaYGBz['Ydcve'](nextIntArray);
    let ans = HaYGBz['cCsyk'](m, HaYGBz['ZmOMH'](0x2, n)) ? Math['floor'](HaYGBz['KExIS'](M, 0x2)) : Math['floor'](HaYGBz['pzYil'](HaYGBz['ZmOMH'](0x2, n) + m, 0x4));
    console['log'](ans);
};
Main();