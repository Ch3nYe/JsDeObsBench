function main(_stdin) {
    const _0x4bb103 = (function () {
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
        _0x4bb103(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x5a530a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5a530a();
            }
        })();
    }());
    const stdin = _stdin['split']('\x0a');
    const len = parseInt(stdin['shift'](), 0xa);
    const data = stdin['filter']((e, i) => i < len)['map'](e => e['split']('\x20')['map'](e => parseInt(e, 0xa)));
    const dists = [
        null,
        0x0
    ];
    bfs(data[0x0], dists, data);
    for (const node of data) {
        if (dists[node[0x0]] === undefined)
            dists[node[0x0]] = -0x1;
    }
    dists['shift']();
    dists['forEach']((e, i) => {
        console['log'](i + 0x1, e);
    });
}
function bfs(node, dists, data) {
    const key = node[0x0];
    const next = dists[key] + 0x1;
    const children = node['slice'](0x2);
    for (const child of children) {
        if (dists[child] === undefined || dists[child] > next) {
            const nextNode = data['find'](e => e[0x0] === child);
            dists[child] = next;
            bfs(nextNode, dists, data);
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5a530a(ret) {
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