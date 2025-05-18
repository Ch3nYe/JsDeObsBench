function Main(input) {
    const _0x43d658 = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
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
        _0x43d658(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x21de91('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x21de91();
            }
        })();
    }());
    input = input['split']('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const Z = input[0x0]['split']('\x20')[0x1] - 0x0;
    const W = input[0x0]['split']('\x20')[0x2] - 0x0;
    const a = input[0x1]['split']('\x20')['map'](e => {
        return e - 0x0;
    });
    if (a['length'] === 0x1) {
        console['log'](Math['abs'](W - a[0x0]));
        return;
    }
    var x, y;
    x = new Array(N);
    y = new Array(N);
    for (var i = N - 0x1; i >= 0x0; i--) {
        if (i === N - 0x1) {
            y[i] = Math['abs'](a[N - 0x1] - a[N - 0x2]);
            x[i] = Math['abs'](a[N - 0x1] - a[N - 0x2]);
            continue;
        }
        y[i] = Math['min'](...x['slice'](i + 0x1), i !== 0x0 ? Math['abs'](a[i - 0x1] - a[N - 0x1]) : Math['abs'](Z - a[N - 0x1]));
        x[i] = Math['max'](...y['slice'](i + 0x1), i !== 0x0 ? Math['abs'](a[i - 0x1] - a[N - 0x1]) : Math['abs'](W - a[N - 0x1]));
    }
    console['log'](Math['max'](...x));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x21de91(ret) {
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