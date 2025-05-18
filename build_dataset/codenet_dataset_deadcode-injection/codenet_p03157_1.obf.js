const a0_0x29c95b = a0_0x1681;
console[a0_0x29c95b(0x0)]((args => {
    const _0x3314a8 = a0_0x1681;
    const [HW, ...S] = args[_0x3314a8(0x1)]()[_0x3314a8(0x2)]('\x0a');
    const [H, W] = HW['split']('\x20')[_0x3314a8(0x3)](v => parseInt(v));
    const trail = Array['from']({ 'length': H }, _ => Array(W)[_0x3314a8(0x4)](![]));
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
            while (stack[_0x3314a8(0x5)]) {
                const [x, y] = stack[_0x3314a8(0x6)]();
                for (const [dx, dy] of dir) {
                    const nx = x + dx, ny = y + dy;
                    if (nx < 0x0 || H <= nx || ny < 0x0 || W <= ny || trail[nx][ny] || S[x][y] === S[nx][ny])
                        continue;
                    trail[nx][ny] = !![];
                    if (S[nx][ny] === '#')
                        b++;
                    else
                        w++;
                    stack[_0x3314a8(0x7)]([
                        nx,
                        ny
                    ]);
                }
            }
            p += w * b;
        }
    }
    return '' + p;
})(require('fs')[a0_0x29c95b(0x8)]('/dev/stdin', 'utf8')));
function a0_0x1681(DadVus, key) {
    const stringArray = a0_0x22c6();
    a0_0x1681 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1681(DadVus, key);
}
function a0_0x22c6() {
    const _0x56c6dd = [
        'log',
        'trim',
        'split',
        'map',
        'fill',
        'length',
        'pop',
        'push',
        'readFileSync'
    ];
    a0_0x22c6 = function () {
        return _0x56c6dd;
    };
    return a0_0x22c6();
}