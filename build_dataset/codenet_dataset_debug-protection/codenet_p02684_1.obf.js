function main(input) {
    const _0x32cf45 = (function () {
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
        _0x32cf45(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x2b31dc('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2b31dc();
            }
        })();
    }());
    const lines = input['trim']()['split']('\x0a');
    let [n, k] = lines[0x0]['split']('\x20');
    n = +n;
    k = BigInt(k);
    const towns = lines[0x1]['split']('\x20')['map'](Number);
    const visited = new Map();
    let pos = 0x1;
    while (k > 0x0) {
        const i = visited['get'](pos);
        if (!i) {
            visited['set'](pos, BigInt(visited['size']));
            pos = towns[pos - 0x1];
            k--;
        } else {
            const cycle = BigInt(visited['size']) - i;
            const rest = k % cycle;
            for (let [key, value] of visited) {
                if (value == i + rest) {
                    pos = key;
                    break;
                }
            }
            k = 0x0;
        }
    }
    console['log'](pos);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2b31dc(ret) {
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