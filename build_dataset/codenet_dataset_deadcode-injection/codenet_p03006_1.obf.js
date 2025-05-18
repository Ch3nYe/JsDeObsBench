function a0_0x39d7(qHHYhl, key) {
    const stringArray = a0_0x1cfd();
    a0_0x39d7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x39d7(qHHYhl, key);
}
const a0_0x7c3bcb = a0_0x39d7;
function Main(input) {
    const _0x46422c = a0_0x39d7;
    input = input[_0x46422c(0x0)]('\x0a');
    const n = +input[0x0];
    if (n <= 0x2) {
        console[_0x46422c(0x1)](0x1);
        return;
    }
    const xy = input[_0x46422c(0x2)](0x1)[_0x46422c(0x3)](s => s[_0x46422c(0x0)]('\x20')[_0x46422c(0x3)](n => +n));
    const map = {};
    xy[_0x46422c(0x4)](a => {
        xy['forEach'](b => {
            if (a === b)
                return;
            const vec = [
                b[0x0] - a[0x0],
                b[0x1] - a[0x1]
            ];
            const m = vec['join']('_');
            map[m] = map[m] == null ? 0x1 : map[m] + 0x1;
        });
    });
    const res = Object[_0x46422c(0x5)](map)[_0x46422c(0x6)]((r, xystr) => {
        const count = map[xystr];
        return count > r[0x0] ? [
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
    console['log'](0x1 + (n - 0x1) - res[0x0]);
}
Main(require('fs')[a0_0x7c3bcb(0x7)]('/dev/stdin', 'utf8'));
function a0_0x1cfd() {
    const _0x5c5d4a = [
        'split',
        'log',
        'slice',
        'map',
        'forEach',
        'keys',
        'reduce',
        'readFileSync'
    ];
    a0_0x1cfd = function () {
        return _0x5c5d4a;
    };
    return a0_0x1cfd();
}