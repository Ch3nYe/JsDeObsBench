function main(input) {
    var vOddiP = {
        'xXyCu': function (x, y) {
            return x - y;
        },
        'YDXuT': function (x, y) {
            return x - y;
        },
        'OCQWs': function (x, y) {
            return x <= y;
        },
        'vsObq': function (x, y) {
            return x !== y;
        },
        'tHyvl': function (x, y) {
            return x - y;
        },
        'GpJDp': function (x, y) {
            return x - y;
        },
        'nPqBf': function (x, y) {
            return x > y;
        },
        'zPVwG': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var n = input[0x0]['split']('\x20')[0x0] - 0x0;
    var m = vOddiP['YDXuT'](input[0x0]['split']('\x20')[0x1], 0x0);
    var nummap = [
        0x0,
        0x2,
        0x5,
        0x5,
        0x4,
        0x5,
        0x6,
        0x3,
        0x7,
        0x6
    ];
    var mattis = input[0x1]['split']('\x20')['map'](v => {
        return {
            'val': v,
            'num': nummap[vOddiP['xXyCu'](v, 0x0)]
        };
    });
    var ans = '';
    var dp = [];
    dp[0x0] = '';
    for (var i = 0x1; vOddiP['OCQWs'](i, n); i++) {
        for (var j = 0x0; j < m; j++) {
            var matti = mattis[j];
            if (vOddiP['vsObq'](dp[vOddiP['YDXuT'](i, matti['num'])], undefined)) {
                var tv = (dp[vOddiP['tHyvl'](i, matti['num'])] ? dp[vOddiP['GpJDp'](i, matti['num'])] : '') + matti['val'];
                if (dp[i] === undefined || vOddiP['nPqBf'](vOddiP['zPVwG'](diff, tv, dp[i]), 0x0)) {
                    dp[i] = tv;
                }
            }
        }
    }
    console['log'](dp[n]);
}
function diff(a, b) {
    var QtuWzk = {
        'qwMoR': function (x, y) {
            return x != y;
        },
        'iHNnk': function (x, y) {
            return x - y;
        }
    };
    if (QtuWzk['qwMoR'](a['length'], b['length']))
        return QtuWzk['iHNnk'](a['length'], b['length']);
    for (var i = 0x0; i < a['length']; i++) {
        if (QtuWzk['qwMoR'](a[i], b[i]))
            return a[i] - b[i];
    }
    return 0x0;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));