(function (stdin) {
    var VNrpEH = {
        'aEFBN': function (x, y) {
            return x < y;
        },
        'gkNYY': function (x, y) {
            return x - y;
        },
        'Dbxgq': function (x, y) {
            return x + y;
        },
        'chvku': function (x, y) {
            return x > y;
        },
        'skPfG': function (x, y) {
            return x + y;
        },
        'boWGH': function (x, y) {
            return x && y;
        },
        'uLOsF': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var NFWqNV = '4|6|2|1|5|7|0|3'['split']('|');
    var GpLKMd = 0x0;
    while (!![]) {
        switch (NFWqNV[GpLKMd++]) {
        case '0':
            for (var i = 0x0; VNrpEH['aEFBN'](i, VNrpEH['gkNYY'](n, 0x1)); i++) {
                if (a[i] < a[VNrpEH['Dbxgq'](i, 0x1)]) {
                    up = !![];
                }
                if (VNrpEH['chvku'](a[i], a[VNrpEH['skPfG'](i, 0x1)])) {
                    down = !![];
                }
                if (VNrpEH['boWGH'](up, down)) {
                    up = down = ![];
                    ans++;
                }
            }
            continue;
        case '1':
            var ans = 0x1;
            continue;
        case '2':
            var a = input[0x1]['split']('\x20');
            continue;
        case '3':
            console['log']('%d', ans);
            continue;
        case '4':
            input = stdin['split']('\x0a');
            continue;
        case '5':
            var up = ![];
            continue;
        case '6':
            var n = VNrpEH['uLOsF'](parseInt, input[0x0], 0xa);
            continue;
        case '7':
            var down = ![];
            continue;
        }
        break;
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));