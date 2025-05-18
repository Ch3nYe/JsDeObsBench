function Main(input) {
    var oypKnS = {
        'PYCtV': '7|8|3|0|10|6|1|4|5|2|9',
        'xxFlq': function (x, y) {
            return x <= y;
        },
        'WGZiL': 'Yes',
        'REXeU': function (x, y) {
            return x == y;
        },
        'wClSF': function (x, y) {
            return x == y;
        },
        'umVyw': function (x, y) {
            return x < y;
        },
        'hflvq': function (callee, param1) {
            return callee(param1);
        },
        'CdfkX': function (x, y) {
            return x % y;
        },
        'APQYN': function (callee, param1) {
            return callee(param1);
        }
    };
    var swQgSd = oypKnS['PYCtV']['split']('|');
    var GSdsjd = 0x0;
    while (!![]) {
        switch (swQgSd[GSdsjd++]) {
        case '0':
            a = new Array(n);
            continue;
        case '1':
            var four = 0x0;
            continue;
        case '2':
            if (oypKnS['xxFlq'](odd, four)) {
                ans = oypKnS['WGZiL'];
            } else if (oypKnS['REXeU'](four + 0x1, odd) && oypKnS['wClSF'](even, 0x0)) {
                ans = oypKnS['WGZiL'];
            }
            continue;
        case '3':
            tmp = input[0x1]['split']('\x20');
            continue;
        case '4':
            for (i = 0x0; oypKnS['umVyw'](i, n); i++) {
                a[i] = oypKnS['hflvq'](parseInt, tmp[i]);
                if (oypKnS['wClSF'](oypKnS['CdfkX'](a[i], 0x4), 0x0)) {
                    four++;
                } else if (oypKnS['wClSF'](oypKnS['CdfkX'](a[i], 0x2), 0x0)) {
                    even++;
                } else {
                    odd++;
                }
            }
            continue;
        case '5':
            var ans = 'No';
            continue;
        case '6':
            var even = 0x0;
            continue;
        case '7':
            input = input['split']('\x0a');
            continue;
        case '8':
            var n = oypKnS['APQYN'](parseInt, input[0x0]);
            continue;
        case '9':
            console['log']('%s', ans);
            continue;
        case '10':
            var odd = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));