'use strict';
function solve(N, A) {
    var dp = new Array(N + 0x1)['fill'](0x0)['map'](e => new Array(N + 0x1)['fill'](0x0));
    var row = 0x1;
    var col = 0x1;
    while (col <= N) {
        var c = col;
        for (var r = row; r <= N; r++) {
            if (c > N) {
                break;
            }
            if (c === r) {
                dp[r][c] = A[r - 0x1];
            } else if (c === r + 0x1) {
                dp[r][c] = Math['max'](A[r - 0x1], A[c - 0x1]);
            } else {
                dp[r][c] = Math['max'](A[r - 0x1] + Math['min'](dp[r + 0x1][c - 0x1], dp[r + 0x2][c]), A[c - 0x1] + Math['min'](dp[r + 0x1][c - 0x1], dp[r][c - 0x2]));
            }
            c++;
        }
        col++;
    }
    var taro = dp[0x1][N];
    var sum = A['reduce']((acc, current) => acc + current);
    return taro - (sum - taro);
}
function main(input) {
    var _0xeeb87b = (function () {
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
        _0xeeb87b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x34cb25('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x34cb25();
            }
        })();
    }());
    var lines = input['split']('\x0a');
    var N = parseInt(lines[0x0]);
    var A = lines[0x1]['split']('\x20')['map'](l => parseInt(l));
    var ans = solve(N, A);
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x34cb25(ret) {
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