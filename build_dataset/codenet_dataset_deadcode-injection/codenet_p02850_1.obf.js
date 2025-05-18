'use strict';
const a0_0x565e83 = a0_0x1933;
function main(inp) {
    const _0x7151b2 = a0_0x1933;
    inp = inp[_0x7151b2(0x0)]()['split']('\x0a');
    const N = Number(inp[_0x7151b2(0x1)]());
    let G = [...new Array(N)][_0x7151b2(0x2)](a => []);
    let vp = new Array();
    inp[_0x7151b2(0x3)](r => {
        const _0x52b385 = a0_0x1933;
        r = r[_0x52b385(0x4)]('\x20')[_0x52b385(0x2)](n => n - 0x1);
        G[r[0x0]][_0x52b385(0x5)](r[0x1]);
        G[r[0x1]][_0x52b385(0x5)](r[0x0]);
        vp[_0x52b385(0x5)](r[0x0] + '-' + r[0x1]);
    });
    let K = 0x0;
    let I = new Map();
    let cs = new Array(N)['fill'](0x0);
    let used = new Array(N)['fill'](0x0);
    let que = new Array();
    used[0x0] = 0x1;
    que[_0x7151b2(0x5)](0x0);
    while (que[_0x7151b2(0x6)]) {
        let v = que[_0x7151b2(0x1)]();
        if (K < G[v][_0x7151b2(0x6)])
            K = G[v][_0x7151b2(0x6)];
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
    console[_0x7151b2(0x7)](K);
    vp[_0x7151b2(0x3)](v => {
        const _0x1e755c = a0_0x1933;
        console[_0x1e755c(0x7)](I[v]);
    });
}
main(require('fs')[a0_0x565e83(0x8)](a0_0x565e83(0x9), a0_0x565e83(0xa)));
function a0_0x1933(mAPjev, key) {
    const stringArray = a0_0x48db();
    a0_0x1933 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1933(mAPjev, key);
}
function a0_0x48db() {
    const _0x5f25b9 = [
        'trim',
        'shift',
        'map',
        'forEach',
        'split',
        'push',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x48db = function () {
        return _0x5f25b9;
    };
    return a0_0x48db();
}