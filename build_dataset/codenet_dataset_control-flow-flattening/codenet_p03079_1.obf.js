function Main(input) {
    var MHSGWY = {
        'YrycC': function (x, y) {
            return x == y;
        },
        'kUayC': 'Yes'
    };
    var str = input;
    var tmp = str['split']('\x20')['map'](Number);
    if (MHSGWY['YrycC'](tmp[0x0], tmp[0x1]) && MHSGWY['YrycC'](tmp[0x1], tmp[0x2])) {
        console['log'](MHSGWY['kUayC']);
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));