function Main(input) {
    var HWljJc = {
        'EHaLV': '7|5|3|0|1|2|8|6|4',
        'GiUVU': function (x, y) {
            return x < y;
        },
        'dMvas': function (x, y) {
            return x + y;
        },
        'osqGB': function (x, y) {
            return x % y;
        },
        'ZoSgp': function (callee, param1) {
            return callee(param1);
        },
        'McmDH': function (x, y) {
            return x * y;
        },
        'AKDFW': function (x, y) {
            return x * y;
        },
        'ybelG': '0|1|5|4|2|3',
        'LgyZI': function (x, y) {
            return x * y;
        },
        'Zojqr': function (x, y) {
            return x < y;
        },
        'URcqG': function (x, y) {
            return x - y;
        },
        'DaheV': function (x, y) {
            return x - y;
        },
        'BBVqx': function (x, y) {
            return x + y;
        },
        'ZTZHV': function (x, y) {
            return x + y;
        },
        'Qmdxy': function (x, y) {
            return x < y;
        },
        'zYIsm': function (x, y) {
            return x === y;
        },
        'vrVRf': function (x, y) {
            return x & y;
        },
        'MoSfN': function (x, y) {
            return x / y;
        },
        'vkbuY': function (x, y) {
            return x / y;
        }
    };
    var CQLcqb = HWljJc['EHaLV']['split']('|');
    var uNEfGI = 0x0;
    while (!![]) {
        switch (CQLcqb[uNEfGI++]) {
        case '0':
            N = N[0x0];
            continue;
        case '1':
            var x = [], y = [], c = [];
            continue;
        case '2':
            for (var i = 0x0; HWljJc['GiUVU'](i, N); i++) {
                x[i] = input[HWljJc['dMvas'](i, 0x1)]['split']('\x20');
                y[i] = HWljJc['osqGB'](HWljJc['ZoSgp'](parseInt, x[i][0x1]), HWljJc['McmDH'](K, 0x2));
                c[i] = x[i][0x2] === 'W' ? 0x0 : 0x1;
                x[i] = HWljJc['osqGB'](HWljJc['ZoSgp'](parseInt, x[i][0x0]), HWljJc['AKDFW'](K, 0x2));
            }
            continue;
        case '3':
            var K = N[0x1];
            continue;
        case '4':
            console['log'](ans);
            continue;
        case '5':
            var N = input[0x0]['split']('\x20')['map'](a => parseInt(a));
            continue;
        case '6':
            for (i = 0x0; i < K; i++) {
                var jMcGyh = HWljJc['ybelG']['split']('|');
                var VcxuDt = 0x0;
                while (!![]) {
                    switch (jMcGyh[VcxuDt++]) {
                    case '0':
                        var now = 0x0;
                        continue;
                    case '1':
                        var Y1 = new Array(HWljJc['LgyZI'](K, 0x2))['fill'](0x0), Y2 = new Array(HWljJc['LgyZI'](K, 0x2))['fill'](0x0);
                        continue;
                    case '2':
                        if (HWljJc['Zojqr'](ans, HWljJc['URcqG'](N, now)))
                            ans = HWljJc['URcqG'](N, now);
                        continue;
                    case '3':
                        for (var j = 0x0; HWljJc['Zojqr'](j, HWljJc['URcqG'](K, 0x1)); j++) {
                            now += HWljJc['URcqG'](HWljJc['DaheV'](Y2[j], Y1[j]) + Y2[HWljJc['BBVqx'](j, K)], Y1[HWljJc['ZTZHV'](j, K)]);
                            if (ans < now)
                                ans = now;
                            if (HWljJc['GiUVU'](ans, N - now))
                                ans = HWljJc['DaheV'](N, now);
                        }
                        continue;
                    case '4':
                        if (ans < now)
                            ans = now;
                        continue;
                    case '5':
                        for (var k = 0x0; HWljJc['Qmdxy'](k, N); k++) {
                            if (HWljJc['zYIsm'](HWljJc['vrVRf'](HWljJc['MoSfN'](HWljJc['dMvas'](x[k], i), K) ^ HWljJc['vkbuY'](y[k], K), 0x1), c[k])) {
                                now++;
                                Y1[y[k]]++;
                            } else
                                Y2[y[k]]++;
                        }
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '7':
            input = input['split']('\x0a');
            continue;
        case '8':
            var ans = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));