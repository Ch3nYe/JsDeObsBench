function rec(a, b) {
    var jSzkaO = {
        'Dlwwc': function (x, y) {
            return x > y;
        },
        'JkhMe': 'GREATER',
        'eKGCE': function (x, y) {
            return x < y;
        },
        'hxtpW': function (x, y) {
            return x == y;
        },
        'Kmiee': 'EQUAL'
    };
    if (jSzkaO['Dlwwc'](a[0x0], b[0x0])) {
        return jSzkaO['JkhMe'];
    } else if (jSzkaO['eKGCE'](a[0x0], b[0x0])) {
        return 'LESS';
    } else if (jSzkaO['hxtpW'](a['length'], 0x1)) {
        return jSzkaO['Kmiee'];
    } else {
        return rec(a['slice'](0x1), b['slice'](0x1));
    }
}
function main(s) {
    var ogfUQo = {
        'iOwzt': 'GREATER',
        'XSPub': function (x, y) {
            return x < y;
        },
        'fSZNs': 'LESS',
        'DTYNK': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    s = s['split']('\x0a');
    if (s[0x0]['length'] > s[0x1]['length']) {
        console['log'](ogfUQo['iOwzt']);
    } else if (ogfUQo['XSPub'](s[0x0]['length'], s[0x1]['length'])) {
        console['log'](ogfUQo['fSZNs']);
    } else {
        console['log']('%s', ogfUQo['DTYNK'](rec, s[0x0]['slice'](0x1), s[0x1]['slice'](0x1)));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));