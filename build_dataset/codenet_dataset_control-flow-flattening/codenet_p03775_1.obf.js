function divisor(n) {
    var chXPOd = {
        'MAPZN': function (x, y) {
            return x * y;
        },
        'ztIyv': function (x, y) {
            return x % y;
        },
        'wbWQS': function (x, y) {
            return x / y;
        }
    };
    var ret = [];
    for (var i = 0x1; chXPOd['MAPZN'](i, i) <= n; i++) {
        if (chXPOd['ztIyv'](n, i) == 0x0) {
            ret['push'](i);
            if (chXPOd['MAPZN'](i, i) != n)
                ret['push'](chXPOd['wbWQS'](n, i));
        }
    }
    return ret;
}
function f(a, b) {
    return Math['max'](('' + a)['length'], ('' + b)['length']);
}
function main(input) {
    var qwdjQs = {
        'mBSJn': function (x, y) {
            return x == y;
        },
        'KYKwD': function (callee, param1) {
            return callee(param1);
        },
        'lqrwA': function (x, y) {
            return x - y;
        },
        'cjUpb': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'SgElv': function (x, y) {
            return x % y;
        }
    };
    var lvtKOH = '6|4|1|7|3|5|2|8|0|9'['split']('|');
    var TqTElw = 0x0;
    while (!![]) {
        switch (lvtKOH[TqTElw++]) {
        case '0':
            if (qwdjQs['mBSJn'](surplus, 0x1))
                minF = Math['min'](minF, ('' + divisors[halfLen])['length']);
            continue;
        case '1':
            var divisors = qwdjQs['KYKwD'](divisor, n)['sort']((a, b) => a - b);
            continue;
        case '2':
            var minF = ('' + n)['length'];
            continue;
        case '3':
            var lastIndex = qwdjQs['lqrwA'](divisors['length'], 0x1);
            continue;
        case '4':
            var n = qwdjQs['cjUpb'](parseInt, inputs[0x0], 0xa);
            continue;
        case '5':
            var halfLen = Math['floor'](divisors['length'] / 0x2);
            continue;
        case '6':
            var inputs = input['split']('\x0a');
            continue;
        case '7':
            var surplus = qwdjQs['SgElv'](divisors['length'], 0x2);
            continue;
        case '8':
            for (var i = 0x0; i < halfLen - surplus; i++) {
                minF = Math['min'](minF, f(divisors[i], divisors[lastIndex - i]));
            }
            continue;
        case '9':
            console['log'](minF);
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));