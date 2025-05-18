var m = [
    -0x1,
    0x2,
    0x3,
    0x5,
    0x7,
    0xb,
    0xd
];
function p(n) {
    var jbQeQM = {
        'Nszso': function (x, y) {
            return x - y;
        },
        'LyBaK': function (x, y) {
            return x + y;
        },
        'rNsjv': function (callee, param1) {
            return callee(param1);
        },
        'dqalC': function (x, y) {
            return x == y;
        }
    };
    if (m[n])
        return m[n];
    var found = jbQeQM['Nszso'](m['length'], 0x1);
    var foundP = m[found];
    for (var i = jbQeQM['LyBaK'](foundP, 0x2);; i += 0x2) {
        if (jbQeQM['rNsjv'](isPrime, i)) {
            found++;
            m[found] = i;
            if (jbQeQM['dqalC'](found, n))
                return i;
        }
    }
}
function isPrime(num) {
    var WZJmjT = {
        'dAkbr': '4|1|2|3|0',
        'vcxey': function (x, y) {
            return x <= y;
        },
        'qxHoN': function (x, y) {
            return x - y;
        },
        'IKGxP': function (x, y) {
            return x * y;
        },
        'PkjkU': function (x, y) {
            return x == y;
        },
        'WFGLY': function (x, y) {
            return x + y;
        }
    };
    var EUqepA = WZJmjT['dAkbr']['split']('|');
    var SbCpXA = 0x0;
    while (!![]) {
        switch (EUqepA[SbCpXA++]) {
        case '0':
            return !![];
        case '1':
            var limit = Math['round'](Math['sqrt'](num));
            continue;
        case '2':
            var i = 0x1;
            continue;
        case '3':
            while (WZJmjT['vcxey'](WZJmjT['qxHoN'](WZJmjT['IKGxP'](i, 0x6), 0x1), limit)) {
                if (WZJmjT['PkjkU'](num % WZJmjT['qxHoN'](i * 0x6, 0x1), 0x0) || WZJmjT['PkjkU'](num % WZJmjT['WFGLY'](i * 0x6, 0x1), 0x0))
                    return ![];
                i++;
            }
            continue;
        case '4':
            if (WZJmjT['PkjkU'](num % 0x3, 0x0))
                return ![];
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var num = +line;
    if (num == 0x0)
        break;
    var s = 0x0;
    for (var i = num; i > 0x0; i--) {
        s += p(i);
    }
    console['log'](s);
}