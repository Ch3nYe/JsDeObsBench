const a0_0x537872 = (function () {
    let firstCall = !![];
    return function (context, fn) {
        const rfn = firstCall ? function () {
            if (fn) {
                const res = fn['apply'](context, arguments);
                fn = null;
                return res;
            }
        } : function () {
        };
        firstCall = ![];
        return rfn;
    };
}());
(function () {
    a0_0x537872(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x4041e2('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4041e2();
        }
    })();
}());
'use strict';
const create = () => {
    const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    const res = {
        'list': input,
        'index': 0x0,
        'max': input['length'],
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
    const [n, m] = nextIntArray();
    let ans = m <= 0x2 * n ? Math['floor'](M / 0x2) : Math['floor']((0x2 * n + m) / 0x4);
    console['log'](ans);
};
Main();
function a0_0x4041e2(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}