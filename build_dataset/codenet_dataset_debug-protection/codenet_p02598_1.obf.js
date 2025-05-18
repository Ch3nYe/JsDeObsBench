function main(input) {
    const lines = input['split']('\x0a');
    const K = 0x0 | lines[0x0]['split']('\x20')[0x1];
    let arr = new Int32Array(lines[0x1]['split']('\x20'));
    let isOk = (t = 0x0, k = 0x0) => {
        arr['forEach'](v => {
            let d = 0x0 | v / t;
            if (v === d * t) {
                d--;
            }
            k -= d;
        });
        return k >= 0x0;
    };
    let l = 0x0;
    let r = Math['max'](...arr);
    let mid = 0x0 | (r + l) * 0.5;
    let res = r;
    while (l < r) {
        if (isOk(mid, K)) {
            res = mid;
            r = mid - 0x1;
        } else {
            l = mid + 0x1;
        }
        mid = 0x0 | (r + l) * 0.5;
    }
    return res;
}
exports['main'] = main;
function Main(input) {
    const _0x49487c = (function () {
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
        _0x49487c(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x498a10('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x498a10();
            }
        })();
    }());
    console['log'](main(input['trim']()));
}
if (process['argv'][0x2] !== 'test') {
    Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
}
function _0x498a10(ret) {
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