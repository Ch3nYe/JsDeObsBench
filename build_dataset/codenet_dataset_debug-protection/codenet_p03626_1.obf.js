function main(input) {
    var _0x466e36 = (function () {
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
        _0x466e36(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x58af2b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x58af2b();
            }
        })();
    }());
    var tmp = input['split'](/\r\n|\r|\n/);
    var N = Number(tmp[0x0]);
    var S = tmp[0x1]['split']('');
    var res;
    var i = 0x0;
    var isYoko;
    if (S[i] == S[i + 0x1]) {
        res = 0x6;
        i = i + 0x2;
        isYoko = !![];
    } else {
        res = 0x3;
        i++;
        isYoko = ![];
    }
    for (; i < N - 0x1; i++) {
        if (S[i] == S[i + 0x1]) {
            if (isYoko) {
                res = res * 0x3;
            } else {
                res = res * 0x2;
            }
            i++;
            isYoko = !![];
        } else {
            if (!isYoko) {
                res = res * 0x2;
            }
            isYoko = ![];
        }
    }
    if (i < N) {
        if (!isYoko) {
            res = res * 0x2;
        }
    }
    console['log'](res % 0x3b9aca07);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x58af2b(ret) {
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