'use strict';
(function (stdin) {
    var _0x45932b = (function () {
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
    var re = /\w+\n[\w\s]*?\n/g;
    var result = function (data) {
        (function () {
            _0x45932b(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x373019('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x373019();
                }
            })();
        }());
        return data['map'](stdev)['join']('\x0a');
        function stdev(scores) {
            var count = scores['length'];
            var mean = scores['reduce'](sum) / count;
            return Math['sqrt'](scores['map'](function (v) {
                return Math['pow'](v - mean, 0x2);
            })['reduce'](sum) / count)['toFixed'](0x8);
        }
        function sum(a, b) {
            return a + b;
        }
    }(lines['match'](re)['map'](function (v) {
        return v['split']('\x0a')[0x1]['split']('\x20')['slice'](0x0, v['split']('\x0a')[0x0])['map'](Number);
    }));
    console['log'](result);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x373019(ret) {
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