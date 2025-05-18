function search(h) {
    var is_start = ![];
    for (var i = 0x0; i < h['length']; i++) {
        if (is_start) {
            if (h[i] == 0x0) {
                break;
            }
            h[i] -= 0x1;
        } else {
            if (h[i] == 0x0) {
                continue;
            }
            is_start = !![];
            h[i] -= 0x1;
        }
    }
    return h;
}
function main(arg) {
    var _0x5f121a = (function () {
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
        _0x5f121a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4898c4('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4898c4();
            }
        })();
    }());
    var h = arg['split']('\x0a')[0x1]['split']('\x20')['map'](e => Number(e));
    var arr = [];
    var i = 0x0;
    for (i = 0x1;; i++) {
        h = search(h);
        if (h[0x0] == 0x0) {
            var b = h['filter']((x, i, self) => self['indexOf'](x) === i);
            if (b['length'] == 0x1) {
                break;
            }
        }
    }
    console['log'](i);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4898c4(ret) {
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