'use strict';
function main(inp) {
    const _0x255228 = (function () {
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
        _0x255228(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x2f2fb4('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2f2fb4();
            }
        })();
    }());
    inp = inp['trim']()['split']('\x0a');
    const N = Number(inp['shift']());
    let G = [...new Array(N)]['map'](a => []);
    let vp = new Array();
    inp['forEach'](r => {
        r = r['split']('\x20')['map'](n => n - 0x1);
        G[r[0x0]]['push'](r[0x1]);
        G[r[0x1]]['push'](r[0x0]);
        vp['push'](r[0x0] + '-' + r[0x1]);
    });
    let K = 0x0;
    let I = new Map();
    let cs = new Array(N)['fill'](0x0);
    let used = new Array(N)['fill'](0x0);
    let que = new Array();
    used[0x0] = 0x1;
    que['push'](0x0);
    while (que['length']) {
        let v = que['shift']();
        if (K < G[v]['length'])
            K = G[v]['length'];
        let cur = 0x1;
        for (const u of G[v]) {
            if (used[u])
                continue;
            if (cur === cs[v])
                cur++;
            cs[u] = I[u + '-' + v] = I[v + '-' + u] = cur++;
            used[u] = 0x1;
            que['push'](u);
        }
    }
    console['log'](K);
    vp['forEach'](v => {
        console['log'](I[v]);
    });
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2f2fb4(ret) {
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