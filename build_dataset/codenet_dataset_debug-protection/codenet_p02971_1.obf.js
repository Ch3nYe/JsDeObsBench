'use strict';
function main(arg) {
    var _0x9c0115 = (function () {
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
        _0x9c0115(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2f6820('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2f6820();
            }
        })();
    }());
    var input = arg['split']('\x0a');
    var retu = input[0x0];
    var kazu = [];
    for (var i = 0x1; retu >= i; i++) {
        kazu['push'](input[i]);
    }
    for (var x = 0x0, len = kazu['length']; x < len; ++x) {
        var kazu2 = kazu['slice'](0x0, kazu['length']);
        kazu2['splice'](x, 0x1);
        console['log'](Math['max']['apply'](null, kazu2));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2f6820(ret) {
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