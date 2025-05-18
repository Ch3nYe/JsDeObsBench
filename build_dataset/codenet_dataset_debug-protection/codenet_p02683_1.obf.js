function main(input) {
    const _0x344665 = (function () {
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
    const lines = input['trim']()['split']('\x0a');
    const [N, M, X] = splitN(lines[0x0]);
    const costs = [];
    const options = [...Array(N)['keys']()];
    select(options);
    function select(options, cost = 0x0, aList = []) {
        (function () {
            _0x344665(this, function () {
                const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                const result = _0x2e9c91('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x2e9c91();
                }
            })();
        }());
        for (let i = 0x0; i < options['length']; i++) {
            const _options = [...options], [s] = _options['splice'](i, 0x1), [c, ...a] = splitN(lines[s + 0x1]), _cost = cost + c, _aList = a['map']((v, i) => v + (aList[i] || 0x0));
            if (_aList['every'](v => v >= X)) {
                costs['push'](_cost);
                continue;
            }
            select(_options, _cost, _aList);
        }
    }
    console['log'](costs['length'] ? Math['min'](...costs) : -0x1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function splitN(s) {
    return s['split']('\x20')['map'](Number);
}
function _0x2e9c91(ret) {
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