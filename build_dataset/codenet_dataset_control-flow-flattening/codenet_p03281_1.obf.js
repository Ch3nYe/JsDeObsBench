function main(input) {
    var XXSqgE = {
        'UbnQa': function (x, y) {
            return x - y;
        },
        'Wpyuy': function (x, y) {
            return x <= y;
        },
        'dvYAW': function (x, y) {
            return x == y;
        },
        'XSNqk': function (x, y) {
            return x % y;
        },
        'YnkMt': function (x, y) {
            return x == y;
        }
    };
    var N = XXSqgE['UbnQa'](input[0x0], 0x0);
    var ans = 0x0;
    for (var i = 0x69; XXSqgE['Wpyuy'](i, N); i += 0x2) {
        var cnt = 0x0;
        for (var j = 0x1; XXSqgE['Wpyuy'](j, i); j++) {
            if (XXSqgE['dvYAW'](XXSqgE['XSNqk'](i, j), 0x0))
                cnt++;
            if (cnt > 0x8)
                break;
        }
        if (XXSqgE['YnkMt'](cnt, 0x8))
            ans++;
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));