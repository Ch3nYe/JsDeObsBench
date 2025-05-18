function Main(input) {
    var _0x489a84 = (function () {
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
        _0x489a84(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x7ec4d1('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x7ec4d1();
            }
        })();
    }());
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]);
    const As = input[0x1]['split']('\x20')['map'](x => parseInt(x));
    var now = As;
    while (!![]) {
        var min = -0x1;
        var next = [];
        for (i = 0x1; i < now['length'] - 0x1; i++) {
            if (min == -0x1 || now[min] > now[i])
                min = i;
            if (min == now[i] && now[i - 0x1] + now[i + 0x1] < now[min - 0x1] + now[min + 0x1])
                min = i;
        }
        if (now[min] * 0x2 > now[now['length'] - 0x2])
            min = now['length'] - 0x2;
        for (i = 0x0; i < now['length']; i++) {
            if (i == min - 0x1) {
                next['push'](now[min - 0x1] + now[min]);
            } else if (i == min) {
            } else if (i == min + 0x1) {
                next['push'](now[min + 0x1] + now[min]);
            } else {
                next['push'](now[i]);
            }
        }
        now = next;
        if (now['length'] == 0x2)
            break;
    }
    console['log'](now[0x0] + now[0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x7ec4d1(ret) {
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