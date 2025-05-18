function main(lines) {
    const _0x266258 = (function () {
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
    const [N, M] = na();
    const nodes = Array(N + 0x1)['fill'](0x0)['map'](() => new Set());
    for (let i = 0x1; i <= M; i++) {
        const [a, b] = na();
        nodes[a]['add'](b);
        nodes[b]['add'](a);
    }
    let ans = 0x0;
    searchRoute(nodes[0x1], [0x1]);
    function searchRoute(node, passed) {
        (function () {
            _0x266258(this, function () {
                const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                const result = _0x418038('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x418038();
                }
            })();
        }());
        if (passed['length'] == N)
            return ++ans;
        for (let n of node) {
            if (passed['includes'](n))
                continue;
            searchRoute(nodes[n], passed['concat'](n));
        }
    }
    return ans;
}
const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
let lineCount = 0x0;
const s = () => lines[lineCount++];
const n = () => Number(s());
const b = () => BigInt(s());
const sa = () => s()['split']('\x20');
const na = () => sa()['map'](Number);
const ba = () => sa()['map'](BigInt);
const ans = main(lines);
console['log'](ans);
function _0x418038(ret) {
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