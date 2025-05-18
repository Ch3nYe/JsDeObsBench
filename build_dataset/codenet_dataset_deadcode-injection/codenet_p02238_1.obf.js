(function main() {
    const _0x189481 = a0_0x3ee3;
    const lines = require('fs')[_0x189481(0x0)]('/dev/stdin', 'utf8')[_0x189481(0x1)]()[_0x189481(0x2)]('\x0a');
    const n = Number(lines[_0x189481(0x3)]());
    const adjLists = Array['from'](Array(n), () => []);
    lines[_0x189481(0x4)]((l, i) => l[_0x189481(0x2)]('\x20')[_0x189481(0x5)](0x2)[_0x189481(0x4)](e => adjLists[i][_0x189481(0x6)](e - 0x1)));
    const d = [], f = [];
    dfs(adjLists, d, f);
    for (let i = 0x0; i < n; i++) {
        if (_0x189481(0x7) !== _0x189481(0x7)) {
            visit(v);
        } else {
            console[_0x189481(0x8)](i + 0x1 + '\x20' + d[i] + '\x20' + f[i]);
        }
    }
}());
function a0_0x3ee3(JjJcOW, key) {
    const stringArray = a0_0x4d9e();
    a0_0x3ee3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ee3(JjJcOW, key);
}
function a0_0x4d9e() {
    const _0x4b2315 = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'forEach',
        'splice',
        'push',
        'isvuX',
        'log',
        'length',
        'SLaue',
        'QuLwe',
        'ibqbM',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4d9e = function () {
        return _0x4b2315;
    };
    return a0_0x4d9e();
}
function dfs(adjLists, d, f) {
    const _0xe52b4b = a0_0x3ee3;
    const WHITE = 0x0, GRAY = 0x1, BLACK = 0x2;
    const size = adjLists[_0xe52b4b(0x9)];
    const color = Array['from'](adjLists, () => WHITE);
    let time = 0x0;
    function visit(u) {
        const _0x55931e = a0_0x3ee3;
        if (_0x55931e(0xa) === 'SLaue') {
            color[u] = GRAY;
            d[u] = ++time;
            adjLists[u][_0x55931e(0x4)](v => {
                const _0x333058 = a0_0x3ee3;
                if (_0x333058(0xb) !== _0x333058(0xb)) {
                    color[u] = GRAY;
                    d[u] = ++time;
                    adjLists[u][_0x333058(0x4)](v => {
                        if (color[v] === WHITE) {
                            visit(v);
                        }
                    });
                    color[u] = BLACK;
                    f[u] = ++time;
                } else {
                    if (color[v] === WHITE) {
                        if (_0x333058(0xc) === _0x333058(0xc)) {
                            visit(v);
                        } else {
                            const lines = require('fs')[_0x333058(0x0)](_0x333058(0xd), _0x333058(0xe))[_0x333058(0x1)]()['split']('\x0a');
                            const n = Number(lines[_0x333058(0x3)]());
                            const adjLists = Array['from'](Array(n), () => []);
                            lines[_0x333058(0x4)]((l, i) => l[_0x333058(0x2)]('\x20')[_0x333058(0x5)](0x2)['forEach'](e => adjLists[i][_0x333058(0x6)](e - 0x1)));
                            const d = [], f = [];
                            dfs(adjLists, d, f);
                            for (let i = 0x0; i < n; i++) {
                                console['log'](i + 0x1 + '\x20' + d[i] + '\x20' + f[i]);
                            }
                        }
                    }
                }
            });
            color[u] = BLACK;
            f[u] = ++time;
        } else {
            console[_0x55931e(0x8)](i + 0x1 + '\x20' + d[i] + '\x20' + f[i]);
        }
    }
    adjLists[_0xe52b4b(0x4)]((e, u) => {
        if (color[u] === WHITE)
            visit(u);
    });
}