function main(input) {
    const _0xb4dfff = (function () {
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
        _0xb4dfff(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3c1fd8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3c1fd8();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    const NZW = lines['shift']()['split']('\x20')['map'](x => parseInt(x));
    const N = NZW[0x0];
    const Z = NZW[0x1];
    const W = NZW[0x2];
    const A = lines['shift']()['split']('\x20')['map'](x => parseInt(x));
    const initial = Math['abs'](Z - W);
    var fetch_n_1 = Math['abs'](A[N - 0x1] - A[N - 0x2]);
    if (N < 0x2) {
        fetch_n_1 = 0x0;
    }
    const fetch_n = Math['abs'](A[N - 0x1] - W);
    const result = Math['max'](initial, fetch_n_1, fetch_n);
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3c1fd8(ret) {
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