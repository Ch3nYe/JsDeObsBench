var lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
var n = lines[0x0] | 0x0;
var s = lines['slice'](0x1);
function good(a, b) {
    var YAgtsV = {
        'ylrym': function (x, y) {
            return x < y;
        },
        'ToRNc': function (x, y) {
            return x < y;
        },
        'hcMnF': function (x, y) {
            return x !== y;
        },
        'IgQFg': function (x, y) {
            return x % y;
        },
        'RvSJC': function (x, y) {
            return x + y;
        },
        'jONzE': function (x, y) {
            return x % y;
        },
        'aOFve': function (x, y) {
            return x + y;
        }
    };
    for (var i = 0x0; YAgtsV['ylrym'](i, n); ++i) {
        for (var j = 0x0; YAgtsV['ToRNc'](j, n); ++j) {
            if (YAgtsV['hcMnF'](s[YAgtsV['IgQFg'](YAgtsV['RvSJC'](i, a), n)][YAgtsV['jONzE'](YAgtsV['RvSJC'](j, b), n)], s[YAgtsV['IgQFg'](YAgtsV['aOFve'](j, a), n)][(i + b) % n]))
                return 0x0;
        }
    }
    return 0x1;
}
var ans = 0x0;
for (var a = 0x0; a < n; ++a) {
    for (var b = 0x0; b < n; ++b) {
        ans += good(a, b);
    }
}
console['log'](ans);