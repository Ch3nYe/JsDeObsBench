function Main(input) {
    var _0x42e1d7 = (function () {
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
        _0x42e1d7(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5b73ba('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5b73ba();
            }
        })();
    }());
    var input = input['split']('\x0a');
    var arya = input[0x0]['split']('\x20')['map'](val => parseInt(val, 0xa))['slice'](0x0, 0x4);
    var w = arya[0x0];
    var h = arya[0x1];
    var x = arya[0x2];
    var y = arya[0x3];
    if (x == 0x0 & y == 0x0 || x == w && y == h) {
        console['log']((w * h / 0x2)['toFixed'](0x6) + '\x200');
        return !![];
    }
    var a1 = x * h;
    var a2 = (w - x) * h;
    var b1 = y * w;
    var b2 = (h - y) * w;
    var a = a1;
    var b = b1;
    var counter = 0x0;
    if (a1 > a2) {
        a = a2;
    }
    if (b1 > b2) {
        b = b2;
    }
    var reault = a;
    if (a < b) {
        reault = b;
    }
    if (a == b) {
        var counter = 0x1;
    }
    console['log'](reault['toFixed'](0x6) + '\x20' + counter);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5b73ba(ret) {
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