const a0_0x3d5ebc = a0_0x5b5a;
const BKRT = '\x0a';
function a0_0x24f1() {
    const _0x3bdda1 = [
        'concat',
        'split',
        'shift',
        'undefined',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'join',
        'stack',
        'message',
        'string',
        '<form>',
        'append',
        'map',
        '<textarea>',
        '<br>',
        'body',
        '\x0a1234\x0a150\x0a100\x0a'
    ];
    a0_0x24f1 = function () {
        return _0x3bdda1;
    };
    return a0_0x24f1();
}
const SPAC = '\x20';
const NOSP = '';
function a0_0x5b5a(HCJQpL, key) {
    const stringArray = a0_0x24f1();
    a0_0x5b5a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5b5a(HCJQpL, key);
}
function Main(input) {
    const _0x45a460 = a0_0x5b5a;
    input = [][_0x45a460(0x0)](...input[_0x45a460(0x1)](BKRT)['map'](a => a[_0x45a460(0x1)](SPAC)));
    const strShift = () => input[_0x45a460(0x2)]();
    const intShift = () => ~~input[_0x45a460(0x2)]();
    return ~~(intShift() - intShift()) % intShift();
}
((b, c, d) => a0_0x3d5ebc(0x3) != typeof require ? console[a0_0x3d5ebc(0x4)](Main(require('fs')[a0_0x3d5ebc(0x5)](a0_0x3d5ebc(0x6), a0_0x3d5ebc(0x7)))) : [
    b = b[a0_0x3d5ebc(0x1)]('\x0a')['slice'](0x1, -0x1)[a0_0x3d5ebc(0x8)]('\x0a'),
    c = (function () {
        const _0x22d348 = a0_0x5b5a;
        try {
            return Main(b);
        } catch (f) {
            return f[_0x22d348(0x9)] || f[_0x22d348(0xa)];
        }
    }()),
    d = typeof c,
    a0_0x3d5ebc(0xb) == d || (c = JSON['stringify'](c)),
    $(a0_0x3d5ebc(0xc))[a0_0x3d5ebc(0xd)]([
        [
            0xa,
            b
        ],
        0x0,
        [
            0x1,
            d
        ],
        0x0,
        [
            0xa,
            c
        ]
    ][a0_0x3d5ebc(0xe)](f => $(f ? a0_0x3d5ebc(0xf) : a0_0x3d5ebc(0x10), f && {
        'rows': f[0x0],
        'cols': 0x28,
        'text': f[0x1]
    })))['appendTo'](a0_0x3d5ebc(0x11))
])(a0_0x3d5ebc(0x12));