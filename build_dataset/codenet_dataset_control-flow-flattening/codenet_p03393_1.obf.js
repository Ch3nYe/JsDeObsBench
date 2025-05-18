function Main(s) {
    var PyvaRU = {
        'IPfYR': function (callee, param1) {
            return callee(param1);
        },
        'DbMLZ': function (x, y) {
            return x < y;
        },
        'OGKnG': function (x, y) {
            return x - y;
        },
        'gzBaf': function (x, y) {
            return x < y;
        },
        'GJlEq': function (x, y) {
            return x + y;
        },
        'EeZyZ': function (x, y) {
            return x === y;
        },
        'CCOff': 'zyxwvutsrqponmlkjihgfedcba',
        'hVSZb': function (x, y) {
            return x >= y;
        },
        'QENsi': function (x, y) {
            return x > y;
        },
        'jnBOQ': function (x, y) {
            return x < y;
        },
        'nsXit': function (x, y) {
            return x === y;
        }
    };
    const n = s['length'];
    const a = 'a'['charCodeAt']();
    var b = PyvaRU['IPfYR'](Array, 0x1a)['fill'](0x1);
    var i;
    if (n < 0x1a) {
        for (i = 0x0; PyvaRU['DbMLZ'](i, n); i++) {
            b[PyvaRU['OGKnG'](s['charCodeAt'](i), a)] = 0x0;
        }
        for (i = 0x0; PyvaRU['gzBaf'](i, 0x1a); i++) {
            if (b[i]) {
                s += String['fromCharCode'](PyvaRU['GJlEq'](a, i));
                break;
            }
        }
    } else {
        if (PyvaRU['EeZyZ'](s, PyvaRU['CCOff'])) {
            console['log'](-0x1);
            return;
        }
        var c = s[0x19];
        b[PyvaRU['OGKnG'](s['charCodeAt'](0x19), a)] = 0x0;
        for (i = 0x18; PyvaRU['hVSZb'](i, 0x0); i--) {
            if (PyvaRU['QENsi'](c, s[i])) {
                c = s['charCodeAt'](i) - a;
                s = s['slice'](0x0, i);
                break;
            } else {
                b[PyvaRU['OGKnG'](s['charCodeAt'](i), a)] = 0x0;
            }
        }
        for (var j = PyvaRU['OGKnG'](c, a); PyvaRU['jnBOQ'](j, 0x1a); j++) {
            if (PyvaRU['nsXit'](b[j], 0x0)) {
                s += String['fromCharCode'](PyvaRU['GJlEq'](a, j));
                break;
            }
        }
    }
    console['log'](s);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());