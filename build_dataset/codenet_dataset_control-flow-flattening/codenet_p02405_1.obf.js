(function () {
    var SRRpjD = {
        'oOAkm': function (x, y) {
            return x >= y;
        },
        'eVjzH': function (x, y) {
            return x % y;
        },
        'VBmXs': function (x, y) {
            return x === y;
        },
        'ZwEvt': function (x, y) {
            return x - y;
        },
        'IgJAM': function (x, y) {
            return x + y;
        },
        'wbCwZ': function (x, y) {
            return x * y;
        },
        'aymlk': function (x, y) {
            return x - y;
        },
        'Czacd': function (callee, param1) {
            return callee(param1);
        },
        'Ufczv': '/dev/stdin',
        'kmVrR': 'ascii',
        'IYzvL': '0\x200',
        'AhiCs': function (x, y) {
            return x + y;
        },
        'UXzqM': function (x, y) {
            return x % y;
        },
        'HOKYH': function (x, y) {
            return x < y;
        }
    };
    var max, max_log2, series, col, j, str, i, line, hw, even, odd;
    max = 0x12c;
    max_log2 = SRRpjD['ZwEvt'](max['toString'](0x2)['length'], 0x1);
    series = [
        0x1,
        0x2
    ];
    col = [
        '#',
        '#.'
    ];
    j = 0x2;
    str = '#.';
    for (i = 0x2; i <= max_log2; i++) {
        series['push'](j *= 0x2);
        col['push'](str = SRRpjD['IgJAM'](str, str));
    }
    series['push'](SRRpjD['wbCwZ'](series[SRRpjD['aymlk'](series['length'], 0x1)], 0x2));
    function get_column(w) {
        var i, res;
        res = '';
        for (i = 0x1; i < series['length']; i++) {
            if (w < series[i])
                break;
            if (SRRpjD['oOAkm'](SRRpjD['eVjzH'](w, series[i + 0x1]), series[i]))
                res = res + col[i];
        }
        if (SRRpjD['VBmXs'](w % 0x2, 0x1))
            res = res + '#';
        return res;
    }
    line = SRRpjD['Czacd'](require, 'fs')['readFileSync'](SRRpjD['Ufczv'], SRRpjD['kmVrR'])['split']('\x0a');
    for (i in line) {
        if (line[i] === SRRpjD['IYzvL'])
            break;
        hw = line[i]['split']('\x20')['map'](Number);
        even = get_column(hw[0x1]);
        odd = SRRpjD['AhiCs'](even['slice'](0x1), SRRpjD['VBmXs'](SRRpjD['UXzqM'](hw[0x1], 0x2), 0x0) ? '#' : '.');
        for (j = 0x0; SRRpjD['HOKYH'](j, hw[0x0]); j++) {
            if (SRRpjD['VBmXs'](SRRpjD['UXzqM'](j, 0x2), 0x0))
                console['log'](even);
            else
                console['log'](odd);
        }
        console['log']('');
    }
}());