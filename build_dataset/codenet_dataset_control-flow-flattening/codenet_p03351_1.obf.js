function Main(input) {
    var rHqRSz = {
        'NmRwy': function (callee, param1) {
            return callee(param1);
        },
        'AzXBB': function (x, y) {
            return x <= y;
        },
        'isKQB': function (x, y) {
            return x - y;
        },
        'qHoYK': 'Yes',
        'uSyAV': function (x, y) {
            return x <= y;
        },
        'FNheU': function (x, y) {
            return x <= y;
        }
    };
    input = input['split'](/\s/);
    input['forEach'](function (e, i, a) {
        a[i] = rHqRSz['NmRwy'](Number, a[i]);
    });
    var ans = 'No';
    if (rHqRSz['AzXBB'](Math['abs'](rHqRSz['isKQB'](input[0x0], input[0x2])), input[0x3])) {
        ans = rHqRSz['qHoYK'];
    }
    if (rHqRSz['uSyAV'](Math['abs'](input[0x0] - input[0x1]), input[0x3]) && rHqRSz['FNheU'](Math['abs'](input[0x1] - input[0x2]), input[0x3])) {
        ans = rHqRSz['qHoYK'];
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));