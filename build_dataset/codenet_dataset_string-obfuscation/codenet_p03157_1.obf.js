const a0_0x4847d2 = a0_0x2183;
function a0_0x2183(OaLZzH, key) {
    const stringArray = a0_0x1e41();
    a0_0x2183 = function (index, key) {
        index = index - 0x19f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2183(OaLZzH, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x805c94 = a0_0x2183;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x805c94(0x1a6)) / 0x1 * (-parseInt(_0x805c94(0x1aa)) / 0x2) + -parseInt(_0x805c94(0x1a0)) / 0x3 + parseInt(_0x805c94(0x1a4)) / 0x4 * (-parseInt(_0x805c94(0x1a2)) / 0x5) + parseInt(_0x805c94(0x1b0)) / 0x6 * (-parseInt(_0x805c94(0x1af)) / 0x7) + -parseInt(_0x805c94(0x1a1)) / 0x8 * (parseInt(_0x805c94(0x1ae)) / 0x9) + parseInt(_0x805c94(0x1a9)) / 0xa * (parseInt(_0x805c94(0x1b1)) / 0xb) + parseInt(_0x805c94(0x1a8)) / 0xc * (parseInt(_0x805c94(0x1ac)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e41, 0x89aef));
console[a0_0x4847d2(0x1b5)]((args => {
    const _0x13f197 = a0_0x4847d2;
    const [HW, ...S] = args[_0x13f197(0x1ab)]()[_0x13f197(0x1a5)]('\x0a');
    const [H, W] = HW['split']('\x20')['map'](v => parseInt(v));
    const trail = Array['from']({ 'length': H }, _ => Array(W)[_0x13f197(0x1b2)](![]));
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
            while (stack[_0x13f197(0x19f)]) {
                const [x, y] = stack[_0x13f197(0x1b4)]();
                for (const [dx, dy] of dir) {
                    const nx = x + dx, ny = y + dy;
                    if (nx < 0x0 || H <= nx || ny < 0x0 || W <= ny || trail[nx][ny] || S[x][y] === S[nx][ny])
                        continue;
                    trail[nx][ny] = !![];
                    if (S[nx][ny] === '#')
                        b++;
                    else
                        w++;
                    stack[_0x13f197(0x1a7)]([
                        nx,
                        ny
                    ]);
                }
            }
            p += w * b;
        }
    }
    return '' + p;
})(require('fs')[a0_0x4847d2(0x1ad)](a0_0x4847d2(0x1a3), a0_0x4847d2(0x1b3))));
function a0_0x1e41() {
    const _0x4e90d5 = [
        '2237109KOGhRY',
        '6jMLjfA',
        '22bjQgqL',
        'fill',
        'utf8',
        'pop',
        'log',
        'length',
        '3232311LCIVvJ',
        '433448PyqpBj',
        '5hGLWYJ',
        '/dev/stdin',
        '3677204jNGvdn',
        'split',
        '320YTDTmg',
        'push',
        '36CwXRIT',
        '5198160pQRqNp',
        '2426dYPwHy',
        'trim',
        '12710347IxtHcx',
        'readFileSync',
        '117uFSKyp'
    ];
    a0_0x1e41 = function () {
        return _0x4e90d5;
    };
    return a0_0x1e41();
}