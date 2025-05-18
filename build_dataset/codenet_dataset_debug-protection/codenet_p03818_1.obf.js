function Main(input) {
    var _0x50e255 = (function () {
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
        _0x50e255(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3bbab3('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3bbab3();
            }
        })();
    }());
    var len = input['split']('\x0a')[0x0];
    var list = input['split']('\x0a')[0x1]['split']('\x20');
    list['sort'](function (a, b) {
        return parseInt(a) - parseInt(b);
    });
    var b = list['filter'](function (x, i, self) {
        return self['indexOf'](x) === i;
    });
    if (b['length'] % 0x2 == 0x1) {
        console['log'](b['length']);
    } else {
        console['log'](b['length'] - 0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3bbab3(ret) {
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