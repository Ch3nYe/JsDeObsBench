process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    main(chunk['trim']());
});
function main(chunk) {
    var QErfXQ = {
        'PGBRg': function (x, y) {
            return x < y;
        },
        'HtSCs': function (x, y) {
            return x - y;
        },
        'YogMh': function (callee, param1) {
            return callee(param1);
        },
        'UTKUJ': function (x, y) {
            return x < y;
        },
        'MrkJL': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    var lines = chunk['split']('\x0a');
    for (var n = 0x0; QErfXQ['PGBRg'](n, QErfXQ['HtSCs'](lines['length'], 0x1));) {
        var H = Number(lines[n]['split']('\x20')[0x0]);
        var W = QErfXQ['YogMh'](Number, lines[n]['split']('\x20')[0x1]);
        var map = [];
        n++;
        for (var i = 0x0; QErfXQ['UTKUJ'](i, H); i++) {
            map[i] = lines[n]['split']('');
            n++;
        }
        console['log'](QErfXQ['MrkJL'](calc, map, 0x0, 0x0));
    }
}
function calc(map, h, w) {
    var XjWgGO = {
        'kElPb': function (x, y) {
            return x == y;
        },
        'EcoHi': function (x, y) {
            return x + y;
        },
        'zsQpp': 'LOOP',
        'xpNhY': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'xyaDH': function (x, y) {
            return x + y;
        },
        'piCqx': function (x, y) {
            return x - y;
        },
        'XPdpQ': function (x, y) {
            return x + y;
        }
    };
    if (XjWgGO['kElPb'](map[h][w], '.')) {
        return XjWgGO['EcoHi'](w + '\x20', h);
    }
    if (XjWgGO['kElPb'](map[h][w], '1')) {
        return XjWgGO['zsQpp'];
    }
    switch (map[h][w]) {
    case '>':
        map[h][w] = '1';
        return XjWgGO['xpNhY'](calc, map, h, XjWgGO['xyaDH'](w, 0x1));
    case '<':
        map[h][w] = '1';
        return XjWgGO['xpNhY'](calc, map, h, XjWgGO['piCqx'](w, 0x1));
    case 'v':
        map[h][w] = '1';
        return XjWgGO['xpNhY'](calc, map, XjWgGO['XPdpQ'](h, 0x1), w);
    case '^':
        map[h][w] = '1';
        return XjWgGO['xpNhY'](calc, map, XjWgGO['piCqx'](h, 0x1), w);
    }
}