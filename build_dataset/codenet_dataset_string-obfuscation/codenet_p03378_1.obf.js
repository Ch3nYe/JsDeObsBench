var a0_0x2b68f4 = a0_0x1d0e;
(function (stringArrayFunction, comparisonValue) {
    var _0x4e57b1 = a0_0x1d0e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4e57b1(0xb3)) / 0x1 + parseInt(_0x4e57b1(0xac)) / 0x2 * (-parseInt(_0x4e57b1(0xb0)) / 0x3) + -parseInt(_0x4e57b1(0xb8)) / 0x4 + -parseInt(_0x4e57b1(0xa8)) / 0x5 + parseInt(_0x4e57b1(0xb2)) / 0x6 * (parseInt(_0x4e57b1(0xb5)) / 0x7) + -parseInt(_0x4e57b1(0xa4)) / 0x8 * (-parseInt(_0x4e57b1(0xb6)) / 0x9) + -parseInt(_0x4e57b1(0xaf)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x252f, 0x54a55));
const BKRT = '\x0a';
const SPAC = '\x20';
const NOSP = '';
function Main(input) {
    var _0x1e1ec2 = a0_0x1d0e;
    input = [][_0x1e1ec2(0xae)](...input['split'](BKRT)[_0x1e1ec2(0xb4)](a => a[_0x1e1ec2(0xa0)](SPAC)));
    const strShift = () => input[_0x1e1ec2(0xa9)]();
    const intShift = () => ~~input[_0x1e1ec2(0xa9)]();
    var N = intShift();
    var M = intShift();
    var X = intShift();
    var right = 0x0;
    var left = 0x0;
    for (var i = 0x0; i < M; i++) {
        var a = intShift();
        if (a < X) {
            left++;
        } else {
            right++;
        }
    }
    return ~~Math[_0x1e1ec2(0xa6)](left, right);
}
function a0_0x1d0e(HewRNP, key) {
    var stringArray = a0_0x252f();
    a0_0x1d0e = function (index, key) {
        index = index - 0x9f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1d0e(HewRNP, key);
}
function a0_0x252f() {
    var _0x2809c = [
        '5102460mElWfA',
        '28869LzGFfD',
        '\x0a5\x203\x203\x0a1\x202\x204\x0a',
        '343890PgLSbE',
        '639132HtlLNy',
        'map',
        '35RKYcim',
        '59715HSQmGJ',
        '/dev/stdin',
        '1134376eGOkRx',
        'undefined',
        'split',
        'slice',
        'append',
        'appendTo',
        '672ZOzWXm',
        'utf8',
        'min',
        'message',
        '1375685cuneeb',
        'shift',
        'readFileSync',
        '<form>',
        '14ePhgaO',
        'log',
        'concat'
    ];
    a0_0x252f = function () {
        return _0x2809c;
    };
    return a0_0x252f();
}
((b, c, d) => a0_0x2b68f4(0x9f) != typeof require ? console[a0_0x2b68f4(0xad)](Main(require('fs')[a0_0x2b68f4(0xaa)](a0_0x2b68f4(0xb7), a0_0x2b68f4(0xa5)))) : [
    b = b[a0_0x2b68f4(0xa0)]('\x0a')[a0_0x2b68f4(0xa1)](0x1, -0x1)['join']('\x0a'),
    c = (function () {
        var _0x51aaf2 = a0_0x2b68f4;
        try {
            return Main(b);
        } catch (f) {
            return f['stack'] || f[_0x51aaf2(0xa7)];
        }
    }()),
    d = typeof c,
    'string' == d || (c = JSON['stringify'](c)),
    $(a0_0x2b68f4(0xab))[a0_0x2b68f4(0xa2)]([
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
    ][a0_0x2b68f4(0xb4)](f => $(f ? '<textarea>' : '<br>', f && {
        'rows': f[0x0],
        'cols': 0x28,
        'text': f[0x1]
    })))[a0_0x2b68f4(0xa3)]('body')
])(a0_0x2b68f4(0xb1));