(function (input) {
    var _0x433709 = (function () {
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
        _0x433709(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5aec5f('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5aec5f();
            }
        })();
    }());
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    var n = Number(p['shift']());
    for (var i = 0x0; i < n; i++) {
        console['log'](conv(p['shift']()));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function conv(s) {
    a = s['split']('\x20');
    for (var i = 0x0; i < a['length']; i++) {
        var r = check(a[i]);
        if (r) {
            return conv_(s, r);
        }
    }
    return s;
}
function conv_(s, r) {
    var a = r[0x0];
    var b = r[0x1];
    var s = s['split']('')['map'](function (e) {
        if (e === '\x20') {
            return e;
        }
        return String['fromCharCode']((a * e['charCodeAt'](0x0) + b) % 0x1a + 'a'['charCodeAt'](0x0));
    })['join']('');
    return s;
}
function check(str) {
    if (str['length'] !== 0x4) {
        return ![];
    }
    for (var i = 0x0; i < 0x1a; i++) {
        for (var j = 0x0; j < 0x1a; j++) {
            var s = conv_(str, [
                i,
                j
            ]);
            if (s === 'this' || s === 'that') {
                return [
                    i,
                    j
                ];
            }
        }
    }
    return ![];
}
function _0x5aec5f(ret) {
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