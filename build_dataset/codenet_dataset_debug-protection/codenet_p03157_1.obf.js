const a0_0x425b2b = (function () {
    let firstCall = !![];
    return function (context, fn) {
        const rfn = firstCall ? function () {
            if (fn) {
                const res = fn['apply'](context, arguments);
                fn = null;
                return res;
            }
        } : function () {
        };
        firstCall = ![];
        return rfn;
    };
}());
(function () {
    a0_0x425b2b(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x1dae8f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1dae8f();
        }
    })();
}());
console['log']((args => {
    const [HW, ...S] = args['trim']()['split']('\x0a');
    const [H, W] = HW['split']('\x20')['map'](v => parseInt(v));
    const trail = Array['from']({ 'length': H }, _ => Array(W)['fill'](![]));
    const dir = [
        [
            -0x1,
            0x0
        ],
        [
            0x0,
            -0x1
        ],
        [
            0x1,
            0x0
        ],
        [
            0x0,
            0x1
        ]
    ];
    let p = 0x0;
    for (let i = 0x0; i < H; i++) {
        for (let j = 0x0; j < W; j++) {
            if (trail[i][j])
                continue;
            const stack = [[
                    i,
                    j
                ]];
            trail[i][j] = !![];
            let w = S[i][j] === '.' | 0x0, b = w ^ 0x1;
            while (stack['length']) {
                const [x, y] = stack['pop']();
                for (const [dx, dy] of dir) {
                    const nx = x + dx, ny = y + dy;
                    if (nx < 0x0 || H <= nx || ny < 0x0 || W <= ny || trail[nx][ny] || S[x][y] === S[nx][ny])
                        continue;
                    trail[nx][ny] = !![];
                    if (S[nx][ny] === '#')
                        b++;
                    else
                        w++;
                    stack['push']([
                        nx,
                        ny
                    ]);
                }
            }
            p += w * b;
        }
    }
    return '' + p;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x1dae8f(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}