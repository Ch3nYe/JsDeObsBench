function Main(input) {
    var EKtWVp = {
        'pEFuF': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'HHpMf': function (x, y) {
            return x > y;
        },
        'etyBB': function (x, y) {
            return x < y;
        },
        'yphwj': function (x, y) {
            return x - y;
        },
        'xYbiR': function (x, y) {
            return x > y;
        },
        'GWeOq': function (x, y) {
            return x + y;
        },
        'dDqMw': function (x, y) {
            return x > y;
        },
        'LqORK': function (x, y) {
            return x - y;
        },
        'acCKN': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var N = EKtWVp['pEFuF'](parseInt, input[0x0][0x0], 0xa);
    var vec_A = input[0x1]['map'](e => parseInt(e, 0xa));
    var vec_B = input[0x2]['map'](e => parseInt(e, 0xa));
    var vec_C = input[0x3]['map'](e => parseInt(e, 0xa));
    function compareFunc(a, b) {
        return b - a;
    }
    vec_A['sort'](compareFunc);
    vec_B['sort'](compareFunc);
    vec_C['sort'](compareFunc);
    var s = 0x0;
    var t = -0x1;
    var vec_sumB = Array['from']({ 'length': N }, () => 0x0);
    var tmpAdj = 0x0;
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        while (s < N && EKtWVp['HHpMf'](vec_B[s], vec_A[i])) {
            while (EKtWVp['etyBB'](t, EKtWVp['yphwj'](N, 0x1)) && EKtWVp['xYbiR'](vec_C[EKtWVp['GWeOq'](t, 0x1)], vec_B[s])) {
                t++;
            }
            if (EKtWVp['dDqMw'](s, 0x0))
                tmpAdj = vec_sumB[EKtWVp['LqORK'](s, 0x1)];
            else
                tmpAdj = 0x0;
            vec_sumB[s] = EKtWVp['GWeOq'](tmpAdj + t, 0x1);
            s++;
        }
        s = Math['max'](0x0, EKtWVp['acCKN'](s, 0x1));
        ans += vec_sumB[s];
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));