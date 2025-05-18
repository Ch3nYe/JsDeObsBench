function Main(input) {
    var qDpuCO = {
        'TThlw': function (x, y) {
            return x - y;
        },
        'zldDe': function (x, y) {
            return x >= y;
        },
        'cqyNa': function (x, y) {
            return x == y;
        },
        'zoLBT': function (x, y) {
            return x - y;
        },
        'KypwQ': function (x, y) {
            return x + y;
        },
        'wlNQW': function (x, y) {
            return x - y;
        },
        'KBdxm': function (x, y) {
            return x == y;
        }
    };
    var output = 0x0;
    var list = [];
    var output = input['length'];
    var tmp = '';
    for (var i = qDpuCO['TThlw'](input['length'], 0x1); qDpuCO['zldDe'](i, 0x0); i--) {
        var tmp2 = input['slice'](i, i + 0x1);
        if (qDpuCO['cqyNa'](list['length'], 0x0)) {
            list['push'](tmp2);
            continue;
        } else {
            var tmp1 = list[qDpuCO['zoLBT'](list['length'], 0x1)];
            if (qDpuCO['cqyNa'](tmp1, tmp2)) {
                list['push'](qDpuCO['KypwQ'](input['slice'](qDpuCO['wlNQW'](i, 0x1), i), tmp2));
                i--;
            } else {
                list['push'](tmp2);
            }
        }
    }
    output = list['length'];
    var first = input['slice'](0x0, 0x1);
    var second = input['slice'](0x1, 0x2);
    if (qDpuCO['KBdxm'](first, second)) {
        output--;
    }
    console['log'](output['toString']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));