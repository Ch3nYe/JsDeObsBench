function main(arg) {
    var qJJHra = {
        'VcXQk': '0|2|1|3|4',
        'sifMX': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'fpwji': function (x, y) {
            return x < y;
        },
        'syZIp': function (x, y) {
            return x + y;
        }
    };
    var BzdVKo = qJJHra['VcXQk']['split']('|');
    var QDKOHH = 0x0;
    while (!![]) {
        switch (BzdVKo[QDKOHH++]) {
        case '0':
            var arg2 = arg['split'](/\n/g);
            continue;
        case '1':
            var alphabet = qJJHra['sifMX'];
            continue;
        case '2':
            var honbun = arg2[0x1];
            continue;
        case '3':
            for (i = 0x0; qJJHra['fpwji'](i, alphabet['length']); i++) {
                var iro = alphabet['substr'](i, 0x1);
                var regkun = new RegExp(qJJHra['syZIp'](iro, '+'), 'g');
                honbun = honbun['replace'](regkun, iro);
            }
            continue;
        case '4':
            console['log'](honbun['length']);
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));