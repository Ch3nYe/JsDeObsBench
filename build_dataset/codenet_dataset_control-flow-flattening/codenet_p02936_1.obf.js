'use strict';
function main(input) {
    const kMqRkg = {
        'mItZr': function (x, y) {
            return x + y;
        },
        'zacMt': function (x, y) {
            return x + y;
        },
        'ynhiB': function (x, y) {
            return x - y;
        },
        'FkYGW': function (x, y) {
            return x < y;
        },
        'kSkTr': function (x, y) {
            return x > y;
        }
    };
    const tmp = input['trim']()['split']('\x0a')['map'](v => v['split']('\x20')['map'](v => parseFloat(v)));
    const n = tmp[0x0][0x0];
    const q = tmp[0x0][0x1];
    const edges = tmp['slice'](0x1, n);
    const actions = tmp['slice'](n, kMqRkg['mItZr'](n, q));
    const nodes = [...new Array(kMqRkg['zacMt'](n, 0x1))]['map'](v => []);
    for (let i = 0x0; i < kMqRkg['ynhiB'](n, 0x1); i++) {
        const p = edges[i][0x0];
        nodes[p]['push'](edges[i][0x1]);
    }
    const ans = [...new Array(n + 0x1)]['map'](v => 0x0);
    for (let i = 0x0; kMqRkg['FkYGW'](i, q); i++) {
        const act = actions[i];
        const cnt = act[0x1];
        ans[act[0x0]] += cnt;
        let stack = [...nodes[act[0x0]]];
        while (kMqRkg['kSkTr'](stack['length'], 0x0)) {
            const t = stack['pop']();
            ans[t] += cnt;
            stack = stack['concat'](nodes[t]);
        }
    }
    console['log'](ans['slice'](0x1)['join']('\x20'));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));