function Main(raw_input) {
    const _0x2a69df = (function () {
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
        _0x2a69df(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4aa2b6('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4aa2b6();
            }
        })();
    }());
    const [line] = raw_input['split']('\x0a');
    const [d, t, s] = toNumArray(line);
    let isYes = t * s >= d;
    console['log'](isYes ? 'Yes' : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function toNumArray(str, delimitor = '\x20') {
    return str['split'](delimitor)['map'](s => parseInt(s, 0xa));
}
function toBitIntArray(str, delimitor = '\x20') {
    return str['split'](delimitor)['map'](s => BigInt(s));
}
function toMatrix(array, delimitor = '\x20') {
    const result = array['map'](v => v['split'](delimitor));
    return result;
}
function sum(n) {
    return n['reduce']((a, b) => a + b);
}
function _0x4aa2b6(ret) {
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