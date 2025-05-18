function Main(input) {
    var lECRLl = {
        'GwbAL': function (callee, param1) {
            return callee(param1);
        },
        'pnNVI': function (x, y) {
            return x < y;
        },
        'gMlDt': function (x, y) {
            return x - y;
        },
        'kVNcX': function (x, y) {
            return x - y;
        },
        'KREnz': function (x, y) {
            return x != y;
        }
    };
    input = input['split']('\x0a');
    var N = Number(input[0x0]['split']('\x20')[0x0]);
    var x = lECRLl['GwbAL'](Number, input[0x0]['split']('\x20')[0x1]);
    var a = input[0x1]['split']('\x20')['map'](a => Number(a))['sort']((a, b) => a - b);
    var match = 0x0;
    var left = 0x0;
    for (var i = 0x0; lECRLl['pnNVI'](i, N); i++) {
        if (lECRLl['gMlDt'](x, a[i]) >= 0x0) {
            x = lECRLl['kVNcX'](x, a[i]);
            match++;
        } else {
            break;
        }
    }
    if (x > 0x0 && lECRLl['KREnz'](match, 0x0)) {
        match--;
    }
    console['log'](match);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));