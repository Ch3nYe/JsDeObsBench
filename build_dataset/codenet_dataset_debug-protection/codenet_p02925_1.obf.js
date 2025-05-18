'use strict';
function main(stdin) {
    const _0xf7e870 = (function () {
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
        _0xf7e870(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3f55d8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f55d8();
            }
        })();
    }());
    const input = stdin['split']('\x0a');
    const N = Number(input['shift']());
    const params = input['map'](p => p['split']('\x20')['map'](v => parseInt(v, 0xa)));
    console['log'](solve(params));
}
function solve(params) {
    const l = params['length'];
    function matching() {
        let matched = ![];
        for (let i = 0x0; i < l; ++i) {
            const op = params[i][cur[i]] - 0x1;
            if (isNaN(op))
                continue;
            if (params[op][cur[op]] - 0x1 === i) {
                matched = !![];
                ++cur[i];
                ++cur[op];
            }
        }
        return matched;
    }
    function isNotCompleted() {
        return cur['some'](v => v < l - 0x1);
    }
    const cur = [];
    for (let i = 0x0; i < l; ++i) {
        cur[i] = 0x0;
    }
    let day = 0x1;
    while (isNotCompleted()) {
        const res = matching();
        if (res === ![])
            return -0x1;
        ++day;
    }
    return day;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x3f55d8(ret) {
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