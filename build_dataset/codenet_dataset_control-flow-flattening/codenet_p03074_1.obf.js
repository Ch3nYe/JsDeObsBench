'use strict';
function Main(input) {
    const RDvDbv = {
        'cjBHH': function (x, y) {
            return x < y;
        },
        'klUdb': function (x, y) {
            return x == y;
        },
        'fKnVI': function (x, y) {
            return x - y;
        },
        'YOeVL': function (x, y) {
            return x + y;
        },
        'TrSCf': function (x, y) {
            return x - y;
        },
        'PiUdv': function (x, y) {
            return x * y;
        },
        'kjPAA': function (x, y) {
            return x - y;
        },
        'ZnZgS': function (x, y) {
            return x < y;
        },
        'rXsgK': function (x, y) {
            return x < y;
        },
        'NfeFN': function (x, y) {
            return x < y;
        },
        'AHisO': function (x, y) {
            return x + y;
        },
        'NzIsP': function (x, y) {
            return x < y;
        },
        'weHZI': function (x, y) {
            return x < y;
        }
    };
    let lines = input['split']('\x0a');
    let nk = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
    let N = nk[0x0], K = nk[0x1];
    let S = lines['shift']()['split'](/\s/)[0x0]['split']('')['map'](v => v - 0x0);
    let n = 0x0, Z = [];
    let p, b = S[0x0], i = 0x0;
    while (RDvDbv['cjBHH'](n, N)) {
        for (p = n; p < N && RDvDbv['klUdb'](S[p], b); p++) {
        }
        let l = RDvDbv['fKnVI'](p, n);
        Z['push']({
            'kind': b,
            'pos': n,
            'len': l,
            'index': i++
        });
        b = RDvDbv['YOeVL'](b, 0x1) % 0x2;
        n = p;
    }
    let L = Z['length'], LL = RDvDbv['TrSCf'](L, RDvDbv['PiUdv'](RDvDbv['kjPAA'](K, 0x1), 0x2));
    let start = Z[0x0]['kind'];
    let ans = 0x0;
    for (let n = 0x0; RDvDbv['cjBHH'](n, LL); n += 0x2) {
        let sum = 0x0, m, k;
        for (m = n, k = 0x0; RDvDbv['ZnZgS'](m, L) && k < K; k++, m += 0x2) {
            if (RDvDbv['rXsgK'](m, L))
                sum += Z[m]['len'];
            if (RDvDbv['NfeFN'](RDvDbv['AHisO'](m, 0x1), L))
                sum += Z[RDvDbv['YOeVL'](m, 0x1)]['len'];
        }
        if (RDvDbv['klUdb'](start, 0x1) && RDvDbv['NzIsP'](m, L))
            sum += Z[m]['len'];
        if (RDvDbv['weHZI'](ans, sum))
            ans = sum;
    }
    console['log'](ans);
}
if (typeof window == 'undefined')
    Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));