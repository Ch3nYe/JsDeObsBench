'use strict';
function Main(input) {
    var _0x543a5e = (function () {
        var firstCall = !![];
        return function (context, fn) {
            var rfn = firstCall ? function () {
                if (fn) {
                    var res = fn['apply'](context, arguments);
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
        _0x543a5e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3dca82('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3dca82();
            }
        })();
    }());
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    var N = input['shift']();
    var last = [];
    for (let i = 0x0; i < 0x1e8480; i++)
        last[i] = 'not\x20yet';
    last[input[0x0]] = 0x0;
    var dp = [0x1];
    var M = Math['pow'](0xa, 0x9) + 0x7;
    for (let i = 0x1; i < N; i++) {
        let c = input[i];
        if (last[c] === 'not\x20yet' || last[c] === i - 0x1) {
            last[c] = i;
            dp[i] = dp[i - 0x1];
            continue;
        }
        dp[i] = (dp[i - 0x1] + dp[last[c]]) % M;
        last[c] = i;
    }
    console['log'](dp['pop']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3dca82(ret) {
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