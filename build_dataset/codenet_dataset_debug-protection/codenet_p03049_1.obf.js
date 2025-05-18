'use strict';
function counter(str, seq) {
    return str['split'](seq)['length'] - 0x1;
}
function main(stdin) {
    const _0xa15a9a = (function () {
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
        _0xa15a9a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x2470a1('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2470a1();
            }
        })();
    }());
    const input = stdin['split']('\x0a');
    input['shift']();
    let ans = 0x0;
    let startsB = 0x0;
    let endsA = 0x0;
    let startsBandEndsA = 0x0;
    input['forEach'](s => {
        ans += counter(s, 'AB');
        if (s['charAt'](0x0) === 'B') {
            if (s['charAt'](s['length'] - 0x1) === 'A') {
                ++startsBandEndsA;
            } else {
                ++startsB;
            }
        } else if (s['charAt'](s['length'] - 0x1) === 'A') {
            ++endsA;
        }
    });
    const smaller = Math['min'](startsB, endsA);
    const bigger = Math['max'](startsB, endsA);
    const shortage = bigger - smaller;
    let extra = Math['max'](0x0, startsBandEndsA - shortage);
    if (shortage === 0x0 && extra !== 0x0)
        --extra;
    ans += smaller;
    ans += Math['min'](shortage, startsBandEndsA);
    ans += extra;
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2470a1(ret) {
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