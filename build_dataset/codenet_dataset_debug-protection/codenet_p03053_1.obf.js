'use strict';
function main(arg) {
    var _0x2253fa = (function () {
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
        _0x2253fa(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4098e3('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4098e3();
            }
        })();
    }());
    arg = arg['trim']()['split']('\x0a');
    arg['shift']();
    var H = arg['length'];
    var W = arg[0x0]['length'];
    var m1 = [];
    for (var i = 0x0; i < arg['length']; i++) {
        m1['push'](arg[i]['split'](''));
    }
    var i = 0x0;
    var slist = [];
    for (var y = 0x0; y < H; y++)
        for (var x = 0x0; x < W; x++) {
            if (m1[y][x] === '#') {
                slist['push']([
                    y,
                    x
                ]);
            }
        }
    var tmp = [];
    for (var y = 0x0; y < H; y++)
        for (var x = 0x0; x < W; x++) {
            if (m1[y][x] === '.') {
                var minD = Number['MAX_SAFE_INTEGER'];
                for (var i = 0x0; i < slist['length']; i++) {
                    var _y = slist[i][0x0];
                    var _x = slist[i][0x1];
                    var d = Math['abs'](_y - y) + Math['abs'](_x - x);
                    if (d < minD) {
                        minD = d;
                    }
                }
                tmp['push'](minD);
            }
        }
    console['log'](Math['max'](...tmp));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4098e3(ret) {
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