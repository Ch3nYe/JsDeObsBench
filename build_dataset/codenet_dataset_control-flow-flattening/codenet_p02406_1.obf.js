var readable = process['stdin'];
readable['resume']();
readable['setEncoding']('utf-8');
readable['on']('data', function (chunk) {
    var LwQwNQ = {
        'wgPCo': function (x, y) {
            return x == y;
        },
        'sMzlt': function (x, y) {
            return x % y;
        },
        'tvETK': function (x, y) {
            return x + y;
        },
        'YZRmb': function (x, y) {
            return x == y;
        },
        'idCaL': function (x, y) {
            return x + y;
        },
        'JHXQX': function (x, y) {
            return x <= y;
        }
    };
    var n = parseInt(chunk);
    var i = 0x1;
    var output = [];
    do {
        var x = i;
        if (LwQwNQ['wgPCo'](0x0, LwQwNQ['sMzlt'](x, 0x3))) {
            output['push'](LwQwNQ['tvETK']('\x20', i));
        } else {
            do {
                if (LwQwNQ['YZRmb'](0x3, LwQwNQ['sMzlt'](x, 0xa))) {
                    output['push'](LwQwNQ['idCaL']('\x20', i));
                    break;
                } else {
                    x /= 0xa;
                }
            } while (x);
        }
    } while (LwQwNQ['JHXQX'](++i, n));
    console['log'](output['join'](''));
});