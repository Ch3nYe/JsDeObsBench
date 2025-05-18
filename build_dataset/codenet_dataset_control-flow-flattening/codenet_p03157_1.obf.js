console['log']((args => {
    const zrhGtc = {
        'kOiLH': function (x, y) {
            return x < y;
        },
        'YXCub': function (x, y) {
            return x < y;
        },
        'DpYeG': function (x, y) {
            return x | y;
        },
        'onFRt': function (x, y) {
            return x === y;
        },
        'mKSpq': function (x, y) {
            return x ^ y;
        },
        'nABDK': function (x, y) {
            return x + y;
        },
        'VAAFx': function (x, y) {
            return x + y;
        },
        'nGdQW': function (x, y) {
            return x <= y;
        },
        'PsxDD': function (x, y) {
            return x <= y;
        },
        'eYfzh': function (x, y) {
            return x === y;
        },
        'sBdOz': function (x, y) {
            return x * y;
        }
    };
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
    for (let i = 0x0; zrhGtc['kOiLH'](i, H); i++) {
        for (let j = 0x0; zrhGtc['YXCub'](j, W); j++) {
            if (trail[i][j])
                continue;
            const stack = [[
                    i,
                    j
                ]];
            trail[i][j] = !![];
            let w = zrhGtc['DpYeG'](zrhGtc['onFRt'](S[i][j], '.'), 0x0), b = zrhGtc['mKSpq'](w, 0x1);
            while (stack['length']) {
                const [x, y] = stack['pop']();
                for (const [dx, dy] of dir) {
                    const nx = zrhGtc['nABDK'](x, dx), ny = zrhGtc['VAAFx'](y, dy);
                    if (zrhGtc['kOiLH'](nx, 0x0) || zrhGtc['nGdQW'](H, nx) || ny < 0x0 || zrhGtc['PsxDD'](W, ny) || trail[nx][ny] || zrhGtc['eYfzh'](S[x][y], S[nx][ny]))
                        continue;
                    trail[nx][ny] = !![];
                    if (zrhGtc['onFRt'](S[nx][ny], '#'))
                        b++;
                    else
                        w++;
                    stack['push']([
                        nx,
                        ny
                    ]);
                }
            }
            p += zrhGtc['sBdOz'](w, b);
        }
    }
    return '' + p;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));