'use strict';
function main(s) {
    const _0x234dfe = (function () {
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
        _0x234dfe(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3652d3('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3652d3();
            }
        })();
    }());
    s = s['split']('\x0a');
    const K = Number(s[0x0]['split']('\x20')[0x1]);
    const balls = s[0x1]['split']('\x20')['map'](el => Number(el));
    const countBucket = [...Array(0x30d41)]['fill'](0x0);
    for (const num of balls) {
        countBucket[num] += 0x1;
    }
    countBucket['sort']((a, b) => b - a);
    const answer = countBucket['slice'](K)['reduce']((a, b) => a + b);
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3652d3(ret) {
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