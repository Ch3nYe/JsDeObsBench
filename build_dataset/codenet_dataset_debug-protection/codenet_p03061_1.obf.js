function gcd(arr) {
    var f = (a, b) => b ? f(b, a % b) : a;
    var ans = arr[0x0];
    for (var i = 0x1; i < arr['length']; i++) {
        ans = f(ans, arr[i]);
    }
    return ans;
}
function getExcep(c) {
    var min = Math['min'](...c);
    var max = Math['max'](...c);
    var mincount = 0x0;
    var maxcount = 0x0;
    var findValue = 0x0;
    for (var i = 0x0; i < c['length']; i++) {
        if (c[i] === min) {
            mincount++;
        }
    }
    if (mincount === 0x1) {
        findValue = min;
    } else {
        findValue = max;
    }
    for (var i = 0x0; i < c['length']; i++) {
        if (c[i] === findValue) {
            return i;
        }
    }
}
function main(arg) {
    var _0x4bf17 = (function () {
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
        _0x4bf17(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x110ac9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x110ac9();
            }
        })();
    }());
    arg = arg['trim']()['split']('\x0a');
    var N = Number(arg[0x0]);
    var A = arg[0x1]['split']('\x20')['map'](Number);
    var c = new Array(A['length'])['fill'](0x0);
    var result = 0x0;
    for (var i = 0x0; i < A['length']; i++) {
        var _A = A['slice']();
        _A['splice'](i, 0x1);
        var n = gcd(_A);
        c[i] = n;
    }
    var idx = getExcep(c);
    A[idx] = A[idx + 0x1];
    console['log'](gcd(A));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x110ac9(ret) {
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