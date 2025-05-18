const a0_0x5ed720 = a0_0x6ced;
(function (stringArrayFunction, comparisonValue) {
    const _0x2c50d6 = a0_0x6ced;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2c50d6(0x7f)) / 0x1 + parseInt(_0x2c50d6(0x78)) / 0x2 * (parseInt(_0x2c50d6(0x80)) / 0x3) + -parseInt(_0x2c50d6(0x81)) / 0x4 * (-parseInt(_0x2c50d6(0x7a)) / 0x5) + -parseInt(_0x2c50d6(0x7d)) / 0x6 + parseInt(_0x2c50d6(0x82)) / 0x7 * (parseInt(_0x2c50d6(0x76)) / 0x8) + parseInt(_0x2c50d6(0x6f)) / 0x9 * (parseInt(_0x2c50d6(0x83)) / 0xa) + -parseInt(_0x2c50d6(0x7b)) / 0xb * (parseInt(_0x2c50d6(0x70)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3333, 0xa4dd2));
function main(_stdin) {
    const _0x4591d7 = a0_0x6ced;
    const stdin = _stdin['split']('\x0a');
    const len = parseInt(stdin[_0x4591d7(0x74)](), 0xa);
    const data = stdin[_0x4591d7(0x73)]((e, i) => i < len)[_0x4591d7(0x7c)](e => e['split']('\x20')[_0x4591d7(0x7c)](e => parseInt(e, 0xa)));
    const dists = [
        null,
        0x0
    ];
    bfs(data[0x0], dists, data);
    for (const node of data) {
        if (dists[node[0x0]] === undefined)
            dists[node[0x0]] = -0x1;
    }
    dists[_0x4591d7(0x74)]();
    dists[_0x4591d7(0x79)]((e, i) => {
        const _0x4760dc = _0x4591d7;
        console[_0x4760dc(0x75)](i + 0x1, e);
    });
}
function a0_0x6ced(kNWBOZ, key) {
    const stringArray = a0_0x3333();
    a0_0x6ced = function (index, key) {
        index = index - 0x6e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x6ced(kNWBOZ, key);
}
function a0_0x3333() {
    const _0x9dee99 = [
        'log',
        '8rtbFXT',
        'slice',
        '346366TomxAt',
        'forEach',
        '495CCLnWR',
        '1885697llzXxr',
        'map',
        '2928180tiFPRf',
        'readFileSync',
        '410784XbnKBH',
        '3MJoxTt',
        '33580aDaHeV',
        '1644167SnCtbf',
        '10nJzpoa',
        '/dev/stdin',
        '9505818uaabQa',
        '108lwLsHd',
        'utf8',
        'find',
        'filter',
        'shift'
    ];
    a0_0x3333 = function () {
        return _0x9dee99;
    };
    return a0_0x3333();
}
function bfs(node, dists, data) {
    const _0x2afc53 = a0_0x6ced;
    const key = node[0x0];
    const next = dists[key] + 0x1;
    const children = node[_0x2afc53(0x77)](0x2);
    for (const child of children) {
        if (dists[child] === undefined || dists[child] > next) {
            const nextNode = data[_0x2afc53(0x72)](e => e[0x0] === child);
            dists[child] = next;
            bfs(nextNode, dists, data);
        }
    }
}
main(require('fs')[a0_0x5ed720(0x7e)](a0_0x5ed720(0x6e), a0_0x5ed720(0x71)));