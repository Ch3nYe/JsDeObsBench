function initOfficialHouse(bMax, fMax, rMax) {
    var _0x17688f = (function () {
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
        _0x17688f(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5967ea('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5967ea();
            }
        })();
    }());
    var o = Array(bMax);
    for (var b = 0x0; b < bMax; b++) {
        o[b] = Array(fMax);
        for (var f = 0x0; f < fMax; f++) {
            o[b][f] = Array(rMax);
            for (var r = 0x0; r < rMax; r++) {
                o[b][f][r] = 0x0;
            }
        }
    }
    return o;
}
function toString(o) {
    return o['map'](function (b) {
        return b['map'](function (f) {
            return '\x20' + f['join']('\x20');
        })['join']('\x0a');
    })['join']('\x0a####################\x0a');
}
const chunk = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = chunk['trim']()['split']('\x0a');
lines['shift']();
var o = initOfficialHouse(0x4, 0x3, 0xa);
lines['forEach'](function (line) {
    var bfrv = line['split']('\x20')['map'](Number);
    var b = bfrv[0x0], f = bfrv[0x1], r = bfrv[0x2], v = bfrv[0x3];
    o[b - 0x1][f - 0x1][r - 0x1] += v;
});
console['log'](toString(o));
function _0x5967ea(ret) {
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