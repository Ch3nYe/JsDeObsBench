'use strict';
(function (stdin) {
    var _0x39c256 = (function () {
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
    var lines = stdin['toString']();
    var re = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
    var result = function (data) {
        (function () {
            _0x39c256(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x125bc8('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x125bc8();
                }
            })();
        }());
        return data['map'](function (v) {
            return v['slice'](-v[0x1])['map'](Number)['reduce'](function (str, num) {
                return str['slice'](num) + str['slice'](0x0, num);
            }, v[0x0]);
        })['join']('\x0a');
    }(lines['match'](re)['map'](function (v) {
        return v['trim']()['split']('\x0a');
    }));
    console['log'](result);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x125bc8(ret) {
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