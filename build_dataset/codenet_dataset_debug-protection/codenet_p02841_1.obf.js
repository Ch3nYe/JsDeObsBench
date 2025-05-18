function Main(input) {
    var _0x13d221 = (function () {
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
        _0x13d221(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x121f3c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x121f3c();
            }
        })();
    }());
    var input = input['split']('\x0a');
    var i1 = input[0x0]['split']('\x20');
    var i2 = input[0x1]['split']('\x20');
    var d1 = new Date('2019/' + i1[0x0] + '/' + i1[0x1]);
    var d2 = new Date('2019/' + i2[0x0] + '/' + i2[0x1]);
    if (d1['getMonth']() == d2['getMonth']()) {
        console['log'](0x0);
    } else {
        console['log'](0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x121f3c(ret) {
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