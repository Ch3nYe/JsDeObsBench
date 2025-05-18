function Main(input) {
    var gyolQI = {
        'gZeed': function (x, y) {
            return x - y;
        },
        'qXeqc': function (x, y) {
            return x - y;
        },
        'pdgZH': function (x, y) {
            return x - y;
        },
        'UwtTB': function (x, y) {
            return x < y;
        },
        'eMLZh': function (x, y) {
            return x / y;
        },
        'VNEiW': function (x, y) {
            return x - y;
        },
        'JcpQf': function (x, y) {
            return x < y;
        },
        'IuMze': function (x, y) {
            return x - y;
        },
        'wvhnA': function (x, y) {
            return x + y;
        }
    };
    var nums = input['split']('\x0a')['map'](function (value) {
        return gyolQI['gZeed'](value, 0x0);
    });
    var N = nums['shift']();
    nums['sort'](function (a, b) {
        return gyolQI['qXeqc'](b, a);
    });
    var ary = new Array(N);
    var m = 0x0;
    var r = gyolQI['pdgZH'](N, 0x1);
    for (var l = 0x0; gyolQI['UwtTB'](l, gyolQI['eMLZh'](N, 0x2)); l++, r--) {
        ary[m++] = nums[l];
        ary[m++] = nums[r];
    }
    var s = 0x0, s1 = 0x0;
    m = gyolQI['VNEiW'](N, 0x1);
    for (var n = 0x0; n < gyolQI['qXeqc'](N, 0x1); n++) {
        r = Math['abs'](ary[m] - ary[n]);
        s += r;
        m = n;
    }
    for (var n = 0x0; gyolQI['JcpQf'](n, gyolQI['gZeed'](N, 0x1)); n++) {
        r = Math['abs'](gyolQI['IuMze'](ary[n], ary[gyolQI['wvhnA'](n, 0x1)]));
        s1 += r;
    }
    console['log'](Math['max'](s, s1));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));