(function (input) {
    var _0xbdc757 = (function () {
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
        _0xbdc757(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x393618('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x393618();
            }
        })();
    }());
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    var n = Number(p['shift']());
    for (var i = 0x0; i < n; i++) {
        var a = p['shift']()['split']('\x20')['map'](Number);
        console['log'](order(a));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function order(a) {
    var r = [];
    var x;
    var c = a['shift']();
    while (x = a['shift']()) {
        if (x > c) {
            c = x;
            continue;
        }
        r['push'](x);
    }
    var m = -Infinity;
    while (x = r['shift']()) {
        if (x > m) {
            m = x;
            continue;
        }
        return 'NO';
    }
    return 'YES';
}
function _0x393618(ret) {
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