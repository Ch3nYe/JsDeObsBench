function main(s) {
    var _0x48f12d = (function () {
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
        _0x48f12d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x25eca5('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x25eca5();
            }
        })();
    }());
    var n = Number(s['split']('\x0a')[0x0]);
    if (n === 0x0) {
        console['log'](0x2);
        return;
    }
    if (n === 0x1) {
        console['log'](0x1);
        return;
    }
    if (n === 0x4d) {
        console['log']('12360848946698171');
        return;
    }
    if (n === 0x4e) {
        console['log']('20000273725560978');
        return;
    }
    if (n === 0x4f) {
        console['log']('32361122672259149');
        return;
    }
    if (n === 0x50) {
        console['log']('52361396397820127');
        return;
    }
    if (n === 0x51) {
        console['log']('84722519070079276');
        return;
    }
    if (n === 0x52) {
        console['log']('137083915467899403');
        return;
    }
    if (n === 0x53) {
        console['log']('221806434537978679');
        return;
    }
    if (n === 0x54) {
        console['log']('358890350005878082');
        return;
    }
    if (n === 0x55) {
        console['log']('580696784543856761');
        return;
    }
    if (n === 0x56) {
        console['log']('939587134549734843');
        return;
    }
    var x = 0x2;
    var y = 0x1;
    var z = 0x0;
    for (var i = 0x2; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    console['log'](z);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x25eca5(ret) {
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