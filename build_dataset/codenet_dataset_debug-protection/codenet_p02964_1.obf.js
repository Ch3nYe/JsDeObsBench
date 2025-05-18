function Main(input) {
    const _0x2a7e72 = (function () {
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
        _0x2a7e72(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x342c7d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x342c7d();
            }
        })();
    }());
    input = input['split']('\x0a');
    input1 = input[0x0]['split']('\x20');
    const N = parseInt(input1[0x0]);
    const K = parseInt(input1[0x1]);
    const As = input[0x1]['split']('\x20');
    var filtered = [];
    var results = [''];
    for (i = 0x0; i < K; i++) {
        for (j = 0x0; j < N; j++) {
            if (filtered['indexOf'](As[j]) != -0x1) {
                var id = filtered['indexOf'](As[j]);
                filtered = filtered['slice'](0x0, id);
            } else {
                filtered['push'](As[j]);
            }
        }
        if (results['indexOf'](filtered['join']('\x20')) == -0x1) {
            results['push'](filtered['join']('\x20'));
        } else {
            break;
        }
    }
    const roopstart = results['indexOf'](filtered['join']('\x20'));
    if (roopstart == K) {
        console['log'](results[roopstart]);
    } else {
        const roopId = (K - roopstart) % (results['length'] - roopstart);
        console['log'](results[roopstart + roopId]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x342c7d(ret) {
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