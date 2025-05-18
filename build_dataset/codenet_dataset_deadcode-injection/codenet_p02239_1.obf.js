function a0_0x1739(TktbPL, key) {
    const stringArray = a0_0x4fe2();
    a0_0x1739 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1739(TktbPL, key);
}
const a0_0x274f13 = a0_0x1739;
function main(_stdin) {
    const _0x55d98b = a0_0x1739;
    const stdin = _stdin[_0x55d98b(0x0)]('\x0a');
    const len = parseInt(stdin[_0x55d98b(0x1)](), 0xa);
    const data = stdin[_0x55d98b(0x2)]((e, i) => i < len)['map'](e => e[_0x55d98b(0x0)]('\x20')['map'](e => parseInt(e, 0xa)));
    const dists = [
        null,
        0x0
    ];
    bfs(data[0x0], dists, data);
    for (const node of data) {
        if (_0x55d98b(0x3) !== 'LEQNt') {
            if (dists[node[0x0]] === undefined)
                dists[node[0x0]] = -0x1;
        } else {
            if (dists[node[0x0]] === undefined)
                dists[node[0x0]] = -0x1;
        }
    }
    dists['shift']();
    dists[_0x55d98b(0x4)]((e, i) => {
        const _0x5a0233 = a0_0x1739;
        console[_0x5a0233(0x5)](i + 0x1, e);
    });
}
function bfs(node, dists, data) {
    const _0x342e7d = a0_0x1739;
    const key = node[0x0];
    const next = dists[key] + 0x1;
    const children = node[_0x342e7d(0x6)](0x2);
    for (const child of children) {
        if (dists[child] === undefined || dists[child] > next) {
            const nextNode = data[_0x342e7d(0x7)](e => e[0x0] === child);
            dists[child] = next;
            bfs(nextNode, dists, data);
        }
    }
}
function a0_0x4fe2() {
    const _0x47d932 = [
        'split',
        'shift',
        'filter',
        'LEQNt',
        'forEach',
        'log',
        'slice',
        'find',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4fe2 = function () {
        return _0x47d932;
    };
    return a0_0x4fe2();
}
main(require('fs')[a0_0x274f13(0x8)](a0_0x274f13(0x9), a0_0x274f13(0xa)));