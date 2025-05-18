(args => {
    const DxpAQp = {
        'nAcFz': function (x, y) {
            return x > y;
        },
        'BTfYJ': function (x, y) {
            return x <= y;
        },
        'cihmX': function (callee) {
            return callee();
        },
        'SHTQb': function (x, y) {
            return x + y;
        },
        'Kyrsd': 'Yes\x0a'
    };
    const [[N, M], ...path] = args['trim']()['split']('\x0a')['map'](a => a['split']('\x20')['map'](a => a | 0x0));
    const dist = [], sign = [0x0], branch = [];
    for (let i = 0x1; DxpAQp['BTfYJ'](i, N); i++) {
        dist[i] = Infinity;
        sign[i] = Infinity;
        branch[i] = [];
    }
    for (let i = 0x0; i < M; i++) {
        const [A, B] = path[i];
        branch[A]['push'](B);
        branch[B]['push'](A);
    }
    let stack = [];
    function mark(step, i) {
        for (let next of branch[i]) {
            if (DxpAQp['nAcFz'](dist[next], step)) {
                dist[next] = step;
                sign[next] = i;
                stack['push'](() => mark(step + 0x1, next));
            }
        }
    }
    mark(0x0, 0x1);
    while (stack['length']) {
        let s;
        while (s = stack['pop']())
            DxpAQp['cihmX'](s);
    }
    if (sign['slice'](0x2)['some'](v => v > N))
        return console['log']('No');
    console['log'](DxpAQp['SHTQb'](DxpAQp['Kyrsd'], sign['slice'](0x2)['join']('\x0a')));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8'));