debug = ![];
function log(...args) {
    if (debug) {
        console['log'](...args);
    }
}
function Main(input) {
    var _0x1ba8df = (function () {
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
        _0x1ba8df(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5f3066('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5f3066();
            }
        })();
    }());
    lines = input['split']('\x0a');
    f = lines[0x0]['split']('\x20');
    N = f[0x0];
    A = f[0x1] * 0x1;
    B = f[0x2] * 0x1;
    C = f[0x3] * 0x1;
    D = f[0x4] * 0x1;
    s = lines[0x1];
    log(N, A, B, C, D, s);
    bool = !![];
    if (C > D) {
        end = D;
        if (C - D <= 0x2) {
            end = C;
        }
        s2 = s;
        if (s[D - 0x2] == '#') {
            log(s2, s2[D - 0x1]);
            s2[D - 0x1] = '#';
            s2 = s2['slice'](0x0, D - 0x1) + '#' + s2['slice'](D);
        }
        log(s2);
        str = s2['slice'](B - 0x1, end);
        log(str, bool);
        bool = bool && /\.\.\./['test'](str);
        log(str, bool);
    }
    str = s['slice'](A - 0x1, C);
    bool = bool && !/##/['test'](str);
    log(str, bool);
    str = s['slice'](B - 0x1, D);
    bool = bool && !/##/['test'](str);
    log(str, bool);
    ans = bool ? 'Yes' : 'No';
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5f3066(ret) {
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