function Main(input) {
    const _0x1a284e = (function () {
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
        _0x1a284e(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x470af4('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x470af4();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    let N = parseInt(lines[0x0]);
    let a = lines[0x1]['split']('\x20')['map'](function (i) {
        return parseInt(i);
    });
    let sortedA = a['slice']()['sort'](function (a, b) {
        return a - b;
    });
    const med1 = sortedA[N / 0x2 - 0x1];
    const med2 = sortedA[N / 0x2];
    a['forEach'](function (i) {
        console['log'](i <= med1 ? med2 : med1);
    });
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x470af4(ret) {
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