(function main() {
    const rjzQQJ = {
        'HTjsg': function (callee, param1) {
            return callee(param1);
        },
        'SJxFs': '/dev/stdin',
        'lFxoK': 'utf8',
        'zNhff': function (callee, param1) {
            return callee(param1);
        },
        'gjRdl': function (x, y) {
            return x < y;
        }
    };
    const lines = rjzQQJ['HTjsg'](require, 'fs')['readFileSync'](rjzQQJ['SJxFs'], rjzQQJ['lFxoK'])['trim']()['split']('\x0a');
    const n = rjzQQJ['HTjsg'](Number, lines['shift']());
    const adjLists = Array['from'](rjzQQJ['zNhff'](Array, n), () => []);
    lines['forEach']((l, i) => l['split']('\x20')['splice'](0x2)['forEach'](e => adjLists[i]['push'](e - 0x1)));
    const d = [], f = [];
    dfs(adjLists, d, f);
    for (let i = 0x0; rjzQQJ['gjRdl'](i, n); i++) {
        console['log'](i + 0x1 + '\x20' + d[i] + '\x20' + f[i]);
    }
}());
function dfs(adjLists, d, f) {
    const XpfSrZ = {
        'lLANt': function (x, y) {
            return x === y;
        },
        'PNuVb': function (callee, param1) {
            return callee(param1);
        }
    };
    const WHITE = 0x0, GRAY = 0x1, BLACK = 0x2;
    const size = adjLists['length'];
    const color = Array['from'](adjLists, () => WHITE);
    let time = 0x0;
    function visit(u) {
        const ctNsTa = '0|2|3|1|4'['split']('|');
        let xjYiFr = 0x0;
        while (!![]) {
            switch (ctNsTa[xjYiFr++]) {
            case '0':
                color[u] = GRAY;
                continue;
            case '1':
                color[u] = BLACK;
                continue;
            case '2':
                d[u] = ++time;
                continue;
            case '3':
                adjLists[u]['forEach'](v => {
                    if (XpfSrZ['lLANt'](color[v], WHITE)) {
                        XpfSrZ['PNuVb'](visit, v);
                    }
                });
                continue;
            case '4':
                f[u] = ++time;
                continue;
            }
            break;
        }
    }
    adjLists['forEach']((e, u) => {
        if (XpfSrZ['lLANt'](color[u], WHITE))
            visit(u);
    });
}