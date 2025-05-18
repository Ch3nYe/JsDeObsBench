function Main(s) {
    var yjfaTg = {
        'tylPS': function (x, y) {
            return x < y;
        },
        'Sylkg': function (x, y) {
            return x - y;
        },
        'YGzQS': function (x, y) {
            return x / y;
        },
        'tcwYL': function (x, y) {
            return x - y;
        },
        'axOBP': function (x, y) {
            return x / y;
        },
        'dVfZu': '%d\x20%d'
    };
    s = s['split']('\x0a');
    var a = s[0x1]['split']('\x20')['map'](a => +a);
    const n = +s[0x0];
    var m = Math['max'](...a);
    var b = [...a]['sort']((a, b) => a - b);
    var c = 0x218711a00;
    for (var i = 0x0; yjfaTg['tylPS'](i, yjfaTg['Sylkg'](n, 0x1)); i++) {
        if (Math['abs'](yjfaTg['YGzQS'](m, 0x2) - b[i]) < c)
            c = Math['abs'](yjfaTg['tcwYL'](yjfaTg['axOBP'](m, 0x2), b[i]));
        else
            break;
    }
    console['log'](yjfaTg['dVfZu'], m, b[i - 0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));