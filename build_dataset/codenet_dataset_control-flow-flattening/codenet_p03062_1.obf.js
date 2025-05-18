function main(input) {
    var ooMwyr = {
        'obMnT': function (x, y) {
            return x < y;
        },
        'kiQmF': function (x, y) {
            return x == y;
        },
        'TcUBB': function (x, y) {
            return x * y;
        },
        'SvUOV': function (x, y) {
            return x + y;
        },
        'InhjB': function (x, y) {
            return x - y;
        },
        'bsbZX': function (x, y) {
            return x - y;
        },
        'ksBQL': function (x, y) {
            return x - y;
        },
        'paMwV': function (x, y) {
            return x - y;
        }
    };
    const formatted_input = input['split']('\x0a');
    const N = parseInt(formatted_input[0x0], 0xa);
    const As = formatted_input[0x1]['split']('\x20')['map'](x => parseInt(x));
    dp = [];
    for (var i = 0x0; ooMwyr['obMnT'](i, N); i++) {
        var results = [];
        if (ooMwyr['kiQmF'](i, 0x0)) {
            results = [
                As[i],
                ooMwyr['TcUBB'](As[i], -0x1)
            ];
        } else {
            var not_flipped = Math['max'](ooMwyr['SvUOV'](dp[ooMwyr['InhjB'](i, 0x1)][0x0], As[i]), ooMwyr['bsbZX'](dp[ooMwyr['ksBQL'](i, 0x1)][0x1], As[i]));
            var flipped = Math['max'](ooMwyr['bsbZX'](dp[i - 0x1][0x0], As[i]), ooMwyr['SvUOV'](dp[ooMwyr['paMwV'](i, 0x1)][0x1], As[i]));
            results = [
                not_flipped,
                flipped
            ];
        }
        dp['push'](results);
    }
    console['log'](dp[ooMwyr['InhjB'](N, 0x1)][0x0]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));