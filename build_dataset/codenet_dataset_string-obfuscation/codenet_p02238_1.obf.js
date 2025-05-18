function a0_0x39e2(CMfICl, key) {
    const stringArray = a0_0x1a8f();
    a0_0x39e2 = function (index, key) {
        index = index - 0x128;
        let value = stringArray[index];
        return value;
    };
    return a0_0x39e2(CMfICl, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x34dcff = a0_0x39e2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x34dcff(0x12a)) / 0x1 + -parseInt(_0x34dcff(0x135)) / 0x2 + parseInt(_0x34dcff(0x129)) / 0x3 * (parseInt(_0x34dcff(0x136)) / 0x4) + -parseInt(_0x34dcff(0x12e)) / 0x5 + parseInt(_0x34dcff(0x12d)) / 0x6 * (-parseInt(_0x34dcff(0x12c)) / 0x7) + parseInt(_0x34dcff(0x12f)) / 0x8 + -parseInt(_0x34dcff(0x128)) / 0x9 * (-parseInt(_0x34dcff(0x133)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1a8f, 0x7ea0f));
(function main() {
    const _0x5bd969 = a0_0x39e2;
    const lines = require('fs')[_0x5bd969(0x130)]('/dev/stdin', 'utf8')[_0x5bd969(0x134)]()['split']('\x0a');
    const n = Number(lines['shift']());
    const adjLists = Array[_0x5bd969(0x132)](Array(n), () => []);
    lines[_0x5bd969(0x131)]((l, i) => l[_0x5bd969(0x12b)]('\x20')['splice'](0x2)['forEach'](e => adjLists[i]['push'](e - 0x1)));
    const d = [], f = [];
    dfs(adjLists, d, f);
    for (let i = 0x0; i < n; i++) {
        console['log'](i + 0x1 + '\x20' + d[i] + '\x20' + f[i]);
    }
}());
function dfs(adjLists, d, f) {
    const _0x56a2f8 = a0_0x39e2;
    const WHITE = 0x0, GRAY = 0x1, BLACK = 0x2;
    const size = adjLists['length'];
    const color = Array['from'](adjLists, () => WHITE);
    let time = 0x0;
    function visit(u) {
        const _0x5aff1c = a0_0x39e2;
        color[u] = GRAY;
        d[u] = ++time;
        adjLists[u][_0x5aff1c(0x131)](v => {
            if (color[v] === WHITE) {
                visit(v);
            }
        });
        color[u] = BLACK;
        f[u] = ++time;
    }
    adjLists[_0x56a2f8(0x131)]((e, u) => {
        if (color[u] === WHITE)
            visit(u);
    });
}
function a0_0x1a8f() {
    const _0x101cde = [
        'split',
        '7seeBHb',
        '3188316ykofWe',
        '3829880IzBLzP',
        '1938728SXlNCP',
        'readFileSync',
        'forEach',
        'from',
        '50noOPvG',
        'trim',
        '466592MrYdhv',
        '16HVgztM',
        '4197996ZtkSop',
        '197322ThAXzR',
        '788328MJFjMC'
    ];
    a0_0x1a8f = function () {
        return _0x101cde;
    };
    return a0_0x1a8f();
}