const a0_0x58b863 = a0_0x29c9;
function a0_0x29c9(TrYwSJ, key) {
    const stringArray = a0_0x2c79();
    a0_0x29c9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x29c9(TrYwSJ, key);
}
function a0_0x2c79() {
    const _0x17ddc5 = [
        'map',
        'split',
        'push',
        'EGkef',
        'length',
        'hvEXG',
        'pop',
        'slice',
        'some',
        'log',
        'Yes\x0a',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2c79 = function () {
        return _0x17ddc5;
    };
    return a0_0x2c79();
}
(args => {
    const _0x6e0af8 = a0_0x29c9;
    const [[N, M], ...path] = args['trim']()['split']('\x0a')[_0x6e0af8(0x0)](a => a[_0x6e0af8(0x1)]('\x20')['map'](a => a | 0x0));
    const dist = [], sign = [0x0], branch = [];
    for (let i = 0x1; i <= N; i++) {
        dist[i] = Infinity;
        sign[i] = Infinity;
        branch[i] = [];
    }
    for (let i = 0x0; i < M; i++) {
        const [A, B] = path[i];
        branch[A][_0x6e0af8(0x2)](B);
        branch[B][_0x6e0af8(0x2)](A);
    }
    let stack = [];
    function mark(step, i) {
        const _0x35cb09 = a0_0x29c9;
        for (let next of branch[i]) {
            if (dist[next] > step) {
                if (_0x35cb09(0x3) !== _0x35cb09(0x3)) {
                    for (let next of branch[i]) {
                        if (dist[next] > step) {
                            dist[next] = step;
                            sign[next] = i;
                            stack[_0x35cb09(0x2)](() => mark(step + 0x1, next));
                        }
                    }
                } else {
                    dist[next] = step;
                    sign[next] = i;
                    stack[_0x35cb09(0x2)](() => mark(step + 0x1, next));
                }
            }
        }
    }
    mark(0x0, 0x1);
    while (stack[_0x6e0af8(0x4)]) {
        if (_0x6e0af8(0x5) === _0x6e0af8(0x5)) {
            let s;
            while (s = stack[_0x6e0af8(0x6)]())
                s();
        } else {
            if (dist[next] > step) {
                dist[next] = step;
                sign[next] = i;
                stack[_0x6e0af8(0x2)](() => mark(step + 0x1, next));
            }
        }
    }
    if (sign[_0x6e0af8(0x7)](0x2)[_0x6e0af8(0x8)](v => v > N))
        return console[_0x6e0af8(0x9)]('No');
    console['log'](_0x6e0af8(0xa) + sign[_0x6e0af8(0x7)](0x2)[_0x6e0af8(0xb)]('\x0a'));
})(require('fs')[a0_0x58b863(0xc)](a0_0x58b863(0xd), a0_0x58b863(0xe)));