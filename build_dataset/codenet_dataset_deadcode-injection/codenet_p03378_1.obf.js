var a0_0x8bbe3b = a0_0x16d5;
const BKRT = '\x0a';
function a0_0x16d5(aCUUta, key) {
    var stringArray = a0_0xabff();
    a0_0x16d5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16d5(aCUUta, key);
}
const SPAC = '\x20';
function a0_0xabff() {
    var _0x138767 = [
        'split',
        'map',
        'shift',
        'sHFtO',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'join',
        'QimFo',
        'stack',
        'message',
        'string',
        'stringify',
        'append',
        '<textarea>',
        '<br>',
        'appendTo',
        'body',
        '\x0a5\x203\x203\x0a1\x202\x204\x0a'
    ];
    a0_0xabff = function () {
        return _0x138767;
    };
    return a0_0xabff();
}
const NOSP = '';
function Main(input) {
    var _0x27bee8 = a0_0x16d5;
    input = []['concat'](...input[_0x27bee8(0x0)](BKRT)[_0x27bee8(0x1)](a => a['split'](SPAC)));
    const strShift = () => input[_0x27bee8(0x2)]();
    const intShift = () => ~~input[_0x27bee8(0x2)]();
    var N = intShift();
    var M = intShift();
    var X = intShift();
    var right = 0x0;
    var left = 0x0;
    for (var i = 0x0; i < M; i++) {
        var a = intShift();
        if (a < X) {
            if (_0x27bee8(0x3) !== _0x27bee8(0x3)) {
                right++;
            } else {
                left++;
            }
        } else {
            right++;
        }
    }
    return ~~Math[_0x27bee8(0x4)](left, right);
}
((b, c, d) => 'undefined' != typeof require ? console[a0_0x8bbe3b(0x5)](Main(require('fs')[a0_0x8bbe3b(0x6)](a0_0x8bbe3b(0x7), a0_0x8bbe3b(0x8)))) : [
    b = b[a0_0x8bbe3b(0x0)]('\x0a')['slice'](0x1, -0x1)[a0_0x8bbe3b(0x9)]('\x0a'),
    c = (function () {
        var _0x29bd7e = a0_0x16d5;
        try {
            return Main(b);
        } catch (f) {
            if ('QimFo' !== _0x29bd7e(0xa)) {
                var a = intShift();
                if (a < X) {
                    left++;
                } else {
                    right++;
                }
            } else {
                return f[_0x29bd7e(0xb)] || f[_0x29bd7e(0xc)];
            }
        }
    }()),
    d = typeof c,
    a0_0x8bbe3b(0xd) == d || (c = JSON[a0_0x8bbe3b(0xe)](c)),
    $('<form>')[a0_0x8bbe3b(0xf)]([
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
    ]['map'](f => $(f ? a0_0x8bbe3b(0x10) : a0_0x8bbe3b(0x11), f && {
        'rows': f[0x0],
        'cols': 0x28,
        'text': f[0x1]
    })))[a0_0x8bbe3b(0x12)](a0_0x8bbe3b(0x13))
])(a0_0x8bbe3b(0x14));