function equal(a, b) {
    var aP = Object['getOwnPropertyNames'](a);
    var bP = Object['getOwnPropertyNames'](b);
    if (aP['length'] != bP['length'])
        return ![];
    for (var i = 0x0; i < aP['length']; i++)
        if (a[aP[i]] !== b[aP[i]])
            return ![];
    return !![];
}
function pi(text) {
    return parseInt(text, 0xa);
}
var six = [
    0x6,
    0x5,
    0x4,
    0x3,
    0x2,
    0x1
]['map'](_ => Math['pow'](0x6, _));
var nine = [
    0x5,
    0x4,
    0x3,
    0x2,
    0x1
]['map'](_ => Math['pow'](0x9, _));
function count(i) {
    if (i < 0x6)
        return i;
    if (i < 0x9)
        return 0x1 + (i - 0x6);
    return Math['min'](count(i - six['find'](_ => _ <= i)) + 0x1, count(i - nine['find'](_ => _ <= i)) + 0x1);
}
function main(input) {
    var _0x58583e = (function () {
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
        _0x58583e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4f347b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4f347b();
            }
        })();
    }());
    var i = pi(input);
    console['log'](count(i));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4f347b(ret) {
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