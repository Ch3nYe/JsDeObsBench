function Main(input) {
    const HQFQjY = {
        'LZYWu': function (x, y) {
            return x - y;
        },
        'AFIWs': function (x, y) {
            return x + y;
        },
        'mXkGM': function (x, y) {
            return x > y;
        },
        'KfpHu': function (x, y) {
            return x <= y;
        }
    };
    input = input['split']('\x0a');
    const n = +input[0x0];
    if (HQFQjY['KfpHu'](n, 0x2)) {
        console['log'](0x1);
        return;
    }
    const xy = input['slice'](0x1)['map'](s => s['split']('\x20')['map'](n => +n));
    const map = {};
    xy['forEach'](a => {
        const NcUJvH = {
            'jSKKb': function (x, y) {
                return HQFQjY['LZYWu'](x, y);
            },
            'wjIzx': function (x, y) {
                return HQFQjY['AFIWs'](x, y);
            }
        };
        xy['forEach'](b => {
            if (a === b)
                return;
            const vec = [
                b[0x0] - a[0x0],
                NcUJvH['jSKKb'](b[0x1], a[0x1])
            ];
            const m = vec['join']('_');
            map[m] = map[m] == null ? 0x1 : NcUJvH['wjIzx'](map[m], 0x1);
        });
    });
    const res = Object['keys'](map)['reduce']((r, xystr) => {
        const count = map[xystr];
        return HQFQjY['mXkGM'](count, r[0x0]) ? [
            count,
            xystr
        ] : [
            r[0x0],
            r[0x1]
        ];
    }, [
        0x0,
        ''
    ]);
    console['log'](HQFQjY['LZYWu'](HQFQjY['AFIWs'](0x1, n - 0x1), res[0x0]));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));