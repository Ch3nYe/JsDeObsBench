const BKRT = '\x0a';
const SPAC = '\x20';
const NOSP = '';
function Main(input) {
    var IngrHR = {
        'behnz': function (callee) {
            return callee();
        },
        'PZKro': function (x, y) {
            return x < y;
        }
    };
    input = []['concat'](...input['split'](BKRT)['map'](a => a['split'](SPAC)));
    const strShift = () => input['shift']();
    const intShift = () => ~~input['shift']();
    var N = IngrHR['behnz'](intShift);
    var M = IngrHR['behnz'](intShift);
    var X = IngrHR['behnz'](intShift);
    var right = 0x0;
    var left = 0x0;
    for (var i = 0x0; IngrHR['PZKro'](i, M); i++) {
        var a = IngrHR['behnz'](intShift);
        if (IngrHR['PZKro'](a, X)) {
            left++;
        } else {
            right++;
        }
    }
    return ~~Math['min'](left, right);
}
((b, c, d) => 'undefined' != typeof require ? console['log'](Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'))) : [
    b = b['split']('\x0a')['slice'](0x1, -0x1)['join']('\x0a'),
    c = (function () {
        try {
            return Main(b);
        } catch (f) {
            return f['stack'] || f['message'];
        }
    }()),
    d = typeof c,
    'string' == d || (c = JSON['stringify'](c)),
    $('<form>')['append']([
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
    ]['map'](f => $(f ? '<textarea>' : '<br>', f && {
        'rows': f[0x0],
        'cols': 0x28,
        'text': f[0x1]
    })))['appendTo']('body')
])('\x0a5\x203\x203\x0a1\x202\x204\x0a');