'use strict';
function main(input) {
    const _0x334056 = (function () {
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
        _0x334056(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x39782d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x39782d();
            }
        })();
    }());
    const tmp = input['trim']()['split']('\x0a')['map'](v => v['split']('\x20')['map'](v => parseFloat(v)));
    const n = tmp[0x0][0x0];
    const q = tmp[0x0][0x1];
    const edges = tmp['slice'](0x1, n);
    const actions = tmp['slice'](n, n + q);
    const nodes = [...new Array(n + 0x1)]['map'](v => []);
    for (let i = 0x0; i < n - 0x1; i++) {
        const p = edges[i][0x0];
        nodes[p]['push'](edges[i][0x1]);
    }
    const ans = [...new Array(n + 0x1)]['map'](v => 0x0);
    for (let i = 0x0; i < q; i++) {
        const act = actions[i];
        const cnt = act[0x1];
        ans[act[0x0]] += cnt;
        let stack = [...nodes[act[0x0]]];
        while (stack['length'] > 0x0) {
            const t = stack['pop']();
            ans[t] += cnt;
            stack = stack['concat'](nodes[t]);
        }
    }
    console['log'](ans['slice'](0x1)['join']('\x20'));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x39782d(ret) {
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