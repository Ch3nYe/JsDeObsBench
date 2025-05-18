function main() {
    var CzFDqX = {
        'WEyLg': function (x, y) {
            return x === y;
        },
        'DZBYP': function (x, y) {
            return x === y;
        },
        'kqaGA': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'qbQES': function (x, y) {
            return x === y;
        }
    };
    input['forEach'](function (line) {
        var a, b, c, p, x, y, z, i;
        if (CzFDqX['WEyLg'](line['trim'](), ''))
            return;
        p = line['match'](/([0-9X]+)\+([0-9X]+)\=([0-9X]+)/);
        a = p[0x1];
        b = p[0x2];
        c = p[0x3];
        for (i = 0x0; i <= 0x9; i++) {
            if (CzFDqX['DZBYP'](i, 0x0) && (CzFDqX['WEyLg'](a['charAt'](0x0), 'X') || b['charAt'](0x0) === 'X' || c['charAt'](0x0) === 'X'))
                continue;
            x = CzFDqX['kqaGA'](parseInt, a['replace'](/X/g, i), 0xa);
            y = parseInt(b['replace'](/X/g, i), 0xa);
            z = parseInt(c['replace'](/X/g, i), 0xa);
            if (CzFDqX['DZBYP'](x + y, z))
                break;
        }
        console['log'](CzFDqX['qbQES'](i, 0xa) ? 'NA' : i);
    });
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});