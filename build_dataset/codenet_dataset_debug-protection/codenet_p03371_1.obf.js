function Main(input) {
    var _0x563845 = (function () {
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
        _0x563845(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x23f43c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x23f43c();
            }
        })();
    }());
    input = input['split']('\x0a');
    A = parseInt(input[0x0]['split']('\x20')[0x0]);
    B = parseInt(input[0x0]['split']('\x20')[0x1]);
    C = parseInt(input[0x0]['split']('\x20')[0x2]);
    X = parseInt(input[0x0]['split']('\x20')[0x3]);
    Y = parseInt(input[0x0]['split']('\x20')[0x4]);
    var ans = 0x0;
    if (C <= (A + B) / 0x2 && C >= Math['min'](A, B)) {
        if (X <= Y) {
            ans = C * X * 0x2 + B * (Y - X);
        } else {
            ans = C * Y * 0x2 + A * (X - Y);
        }
    } else if (C <= (A + B) / 0x2 && C < Math['min'](A, B)) {
        ans = C * Math['max'](X, Y) * 0x2;
    } else {
        ans = X * A + Y * B;
    }
    console['log']('%s', ans);
}
function debug() {
    var input = document['getElementById']('input')['value'];
    Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x23f43c(ret) {
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