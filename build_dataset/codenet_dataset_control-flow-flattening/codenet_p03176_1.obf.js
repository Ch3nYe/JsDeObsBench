function Main(input) {
    var znPXTx = {
        'YGZxQ': function (callee, param1) {
            return callee(param1);
        },
        'xXuez': function (x, y) {
            return x + y;
        },
        'WJVxT': function (x, y) {
            return x < y;
        },
        'daSLd': function (x, y) {
            return x > y;
        }
    };
    input = input['split']('\x0a');
    var N = znPXTx['YGZxQ'](parseInt, input[0x0]);
    var h = input[0x1]['split']('\x20')['map'](i => parseInt(i));
    var a = input[0x2]['split']('\x20')['map'](i => parseInt(i));
    var dp = new Array(znPXTx['xXuez'](N, 0x1))['fill'](0x0);
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        var max = 0x0;
        tmp = a[i] + dp[h[i]];
        for (var j = h[i]; znPXTx['WJVxT'](j, znPXTx['xXuez'](N, 0x1)); j++) {
            if (znPXTx['daSLd'](tmp, dp[j])) {
                dp[j] = tmp;
            } else {
                break;
            }
        }
        ans = Math['max'](ans, dp[h[i]]);
    }
    console['log']('%s', ans);
    return ans;
}
function debug(n) {
    var wbwCqh = {
        'nEXVO': function (x, y) {
            return x + y;
        },
        'yCBWw': 'input',
        'mlrab': function (callee, param1) {
            return callee(param1);
        },
        'NAGlN': function (x, y) {
            return x == y;
        },
        'XJStT': 'output',
        'UlMHl': 'result'
    };
    var input = document['getElementById'](wbwCqh['nEXVO'](wbwCqh['yCBWw'], n))['value'];
    var ans = wbwCqh['mlrab'](Main, input);
    var result = 'WA';
    if (wbwCqh['NAGlN'](ans, document['getElementById'](wbwCqh['nEXVO'](wbwCqh['XJStT'], n))['value']['split']('\x0a')[0x0])) {
        result = 'AC';
    }
    document['getElementById'](wbwCqh['nEXVO'](wbwCqh['UlMHl'], n))['innerHTML'] = result;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));