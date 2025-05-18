function main(_stdin) {
    const vocLws = {
        'xNtMQ': function (x, y) {
            return x + y;
        },
        'OGGNv': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'HUCNi': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'ueAhC': function (x, y) {
            return x === y;
        }
    };
    const stdin = _stdin['split']('\x0a');
    const len = vocLws['OGGNv'](parseInt, stdin['shift'](), 0xa);
    const data = stdin['filter']((e, i) => i < len)['map'](e => e['split']('\x20')['map'](e => parseInt(e, 0xa)));
    const dists = [
        null,
        0x0
    ];
    vocLws['HUCNi'](bfs, data[0x0], dists, data);
    for (const node of data) {
        if (vocLws['ueAhC'](dists[node[0x0]], undefined))
            dists[node[0x0]] = -0x1;
    }
    dists['shift']();
    dists['forEach']((e, i) => {
        console['log'](vocLws['xNtMQ'](i, 0x1), e);
    });
}
function bfs(node, dists, data) {
    const zzLETr = {
        'HdWBU': function (x, y) {
            return x + y;
        },
        'RwMEQ': function (x, y) {
            return x === y;
        },
        'LGOSt': function (x, y) {
            return x > y;
        },
        'rKLfp': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    const key = node[0x0];
    const next = zzLETr['HdWBU'](dists[key], 0x1);
    const children = node['slice'](0x2);
    for (const child of children) {
        if (zzLETr['RwMEQ'](dists[child], undefined) || zzLETr['LGOSt'](dists[child], next)) {
            const nextNode = data['find'](e => e[0x0] === child);
            dists[child] = next;
            zzLETr['rKLfp'](bfs, nextNode, dists, data);
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));