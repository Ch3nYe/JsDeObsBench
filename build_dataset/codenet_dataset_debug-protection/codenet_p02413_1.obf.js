'use strict';
(function (stdin) {
    var _0xc59db4 = (function () {
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
    function sumLine(a, b) {
        return a + b;
    }
    function result(matrix) {
        (function () {
            _0xc59db4(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x110d28('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x110d28();
                }
            })();
        }());
        var size = matrix['shift']();
        matrix['map'](function (v) {
            return v['push'](v['reduce'](sumLine));
        });
        var sumColumn = [];
        for (var i = 0x0; i < size[0x1] + 0x1; i++) {
            var sumValue = 0x0;
            for (var j = 0x0; j < size[0x0]; j++) {
                sumValue += matrix[j][i];
            }
            sumColumn['push'](sumValue);
        }
        matrix['push'](sumColumn);
        return matrix['join']('\x0a')['replace'](/,/g, '\x20');
    }
    var inputs = stdin['toString']()['trim']()['split']('\x0a');
    var sheet = inputs['map'](function (v) {
        return v['split']('\x20')['map'](Number);
    });
    console['log'](result(sheet));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x110d28(ret) {
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