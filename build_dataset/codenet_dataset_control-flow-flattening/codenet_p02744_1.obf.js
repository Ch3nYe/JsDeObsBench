function Main(input) {
    var XDxJly = {
        'jgyXO': function (x, y) {
            return x < y;
        },
        'gHpWS': function (x, y) {
            return x + y;
        },
        'BmWgM': function (x, y) {
            return x == y;
        },
        'xRMDm': function (x, y) {
            return x - y;
        }
    };
    var N = XDxJly['xRMDm'](input[0x0], 0x0);
    var list = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k'
    ];
    var ans = {
        0x0: [],
        0x1: ['a']
    };
    for (var i = 0x2; i <= N; i++) {
        ans[i] = [];
        var preAns = ans[XDxJly['xRMDm'](i, 0x1)];
        var nowAns = ans[i];
        preAns['forEach'](preans => {
            var HjfBpn = {
                'UBEbS': function (x, y) {
                    return XDxJly['jgyXO'](x, y);
                }
            };
            var max = 'a';
            preans['split']('')['forEach'](v => {
                max = HjfBpn['UBEbS'](max, v) ? v : max;
            });
            var endflg = ![];
            for (var i = 0x0; i < list['length'] - 0x1; i++) {
                nowAns['push'](XDxJly['gHpWS'](preans, list[i]));
                if (endflg)
                    break;
                if (XDxJly['BmWgM'](max, list[i]))
                    endflg = !![];
            }
        });
    }
    console['log'](ans[N]['join']('\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));