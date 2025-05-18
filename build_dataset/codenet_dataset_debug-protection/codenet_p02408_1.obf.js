'use strict';
(function (stdin) {
    var _0x1ee1be = (function () {
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
    var lines = stdin['toString']()['split']('\x0a');
    var result = function (data) {
        (function () {
            _0x1ee1be(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x1d1ebe('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x1d1ebe();
                }
            })();
        }());
        return new Deck()['filter'](function (v) {
            return this['indexOf'](v) === -0x1;
        }, data)['join']('\x0a');
        function Deck() {
            var deck = [];
            [
                'S',
                'H',
                'C',
                'D'
            ]['forEach'](function (v) {
                for (var i = 0x0; i < 0xd; i++)
                    deck['push']([
                        v,
                        i + 0x1
                    ]['join']('\x20'));
            });
            return deck;
        }
    }(lines['slice'](0x0, lines['shift']()));
    if (result['length'] !== 0x0)
        console['log'](result);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x1d1ebe(ret) {
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