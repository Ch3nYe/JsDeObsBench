function main(s) {
    var HxKPtL = {
        'xIvnr': function (x, y) {
            return x < y;
        },
        'MUwsk': function (x, y) {
            return x == y;
        },
        'jzZjZ': function (x, y) {
            return x + y;
        }
    };
    var add = 0x0;
    for (var i = 0x0; HxKPtL['xIvnr'](i, 0x3); i++) {
        if (HxKPtL['MUwsk'](s[i], 'o')) {
            add++;
        }
    }
    console['log'](HxKPtL['jzZjZ'](0x2bc, add * 0x64));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));