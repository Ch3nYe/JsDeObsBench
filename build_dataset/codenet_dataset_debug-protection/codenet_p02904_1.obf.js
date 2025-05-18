function Main(arg) {
    var _0xf284bb = (function () {
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
        _0xf284bb(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x21d57d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x21d57d();
            }
        })();
    }());
    var N = arg['split']('\x0a')[0x0]['split']('\x20')[0x0] - 0x0;
    var K = arg['split']('\x0a')[0x0]['split']('\x20')[0x1] - 0x0;
    var P = arg['split']('\x0a')[0x1]['split']('\x20')['map'](v => v - 0x0);
    var ans = [];
    for (var i = 0x0; i < N - K + 0x1; i++) {
        var tmp = P['slice'](i, i + K);
        tmp['sort'](compareNumbers);
        ans[i] = P['slice'](0x0, i)['concat'](tmp)['concat'](P['slice'](i + K))['toString']();
    }
    var aa = new Set(ans);
    console['log'](aa['size']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function compareNumbers(a, b) {
    return a - b;
}
function _0x21d57d(ret) {
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