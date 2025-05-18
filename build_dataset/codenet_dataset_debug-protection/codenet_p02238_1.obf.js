(function main() {
    const _0x4ee68b = (function () {
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
        _0x4ee68b(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x10b378('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x10b378();
            }
        })();
    }());
    const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    const n = Number(lines['shift']());
    const adjLists = Array['from'](Array(n), () => []);
    lines['forEach']((l, i) => l['split']('\x20')['splice'](0x2)['forEach'](e => adjLists[i]['push'](e - 0x1)));
    const d = [], f = [];
    dfs(adjLists, d, f);
    for (let i = 0x0; i < n; i++) {
        console['log'](i + 0x1 + '\x20' + d[i] + '\x20' + f[i]);
    }
}());
function dfs(adjLists, d, f) {
    const WHITE = 0x0, GRAY = 0x1, BLACK = 0x2;
    const size = adjLists['length'];
    const color = Array['from'](adjLists, () => WHITE);
    let time = 0x0;
    function visit(u) {
        color[u] = GRAY;
        d[u] = ++time;
        adjLists[u]['forEach'](v => {
            if (color[v] === WHITE) {
                visit(v);
            }
        });
        color[u] = BLACK;
        f[u] = ++time;
    }
    adjLists['forEach']((e, u) => {
        if (color[u] === WHITE)
            visit(u);
    });
}
function _0x10b378(ret) {
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