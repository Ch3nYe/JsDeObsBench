function Main(input) {
    var GfzMFs = {
        'WbJqw': '3|0|4|1|9|15|14|12|10|8|7|13|2|6|11|5',
        'OfTbo': function (callee, param1) {
            return callee(param1);
        },
        'sdGzX': function (x, y) {
            return x % y;
        },
        'MAqjE': function (x, y) {
            return x - y;
        },
        'klIQK': function (x, y) {
            return x > y;
        },
        'gWiDL': function (x, y) {
            return x / y;
        },
        'sOOKU': function (x, y) {
            return x - y;
        },
        'RUFLe': function (x, y) {
            return x + y;
        },
        'bUsVQ': function (x, y) {
            return x - y;
        },
        'FAhpo': function (x, y) {
            return x - y;
        },
        'MXaJx': function (x, y) {
            return x - y;
        },
        'acYft': function (x, y) {
            return x <= y;
        },
        'xDMpO': function (x, y) {
            return x + y;
        },
        'pEGKg': function (x, y) {
            return x * y;
        },
        'xjiGn': function (x, y) {
            return x + y;
        },
        'rcwTw': function (x, y) {
            return x - y;
        },
        'WKrqW': function (x, y) {
            return x == y;
        }
    };
    var lMhEMq = GfzMFs['WbJqw']['split']('|');
    var sYmWrH = 0x0;
    while (!![]) {
        switch (lMhEMq[sYmWrH++]) {
        case '0':
            var N = GfzMFs['OfTbo'](parseInt, input[0x0]['split']('\x20')[0x0]);
            continue;
        case '1':
            bans = new Array(0x32);
            continue;
        case '2':
            if (GfzMFs['sdGzX'](X, 0x2) == 0x0) {
                X = GfzMFs['MAqjE'](all[N], X);
                flag = 0x1;
            }
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            var X = parseInt(input[0x0]['split']('\x20')[0x1]);
            continue;
        case '5':
            console['log']('%s', ans);
            continue;
        case '6':
            while (GfzMFs['klIQK'](X, 0x0)) {
                if (GfzMFs['klIQK'](X, GfzMFs['gWiDL'](full - 0x1, 0x2))) {
                    X = GfzMFs['MAqjE'](GfzMFs['sOOKU'](X, GfzMFs['gWiDL'](full - 0x1, 0x2)), 0x1);
                    ans = GfzMFs['RUFLe'](ans, GfzMFs['gWiDL'](GfzMFs['sOOKU'](bs, 0x1), 0x2)) + 0x1;
                    full = GfzMFs['gWiDL'](GfzMFs['bUsVQ'](full, 0x1), 0x2) - 0x1;
                    bs = GfzMFs['FAhpo'](bs, 0x1) / 0x2;
                } else {
                    X = X - 0x1;
                    full = GfzMFs['FAhpo'](GfzMFs['MAqjE'](full, 0x1) / 0x2, 0x1);
                    bs = GfzMFs['MXaJx'](bs, 0x1) / 0x2;
                }
            }
            continue;
        case '7':
            var bs = bans[N];
            continue;
        case '8':
            var full = all[N];
            continue;
        case '9':
            all = new Array(0x32);
            continue;
        case '10':
            for (i = 0x1; GfzMFs['acYft'](i, 0x32); i++) {
                bans[i] = GfzMFs['xDMpO'](GfzMFs['pEGKg'](bans[i - 0x1], 0x2), 0x1);
                all[i] = GfzMFs['xjiGn'](GfzMFs['pEGKg'](all[GfzMFs['rcwTw'](i, 0x1)], 0x2), 0x3);
            }
            continue;
        case '11':
            if (GfzMFs['WKrqW'](flag, 0x1)) {
                ans = bans[N] - ans;
            }
            continue;
        case '12':
            var ans = 0x0;
            continue;
        case '13':
            var flag = 0x0;
            continue;
        case '14':
            all[0x0] = 0x1;
            continue;
        case '15':
            bans[0x0] = 0x1;
            continue;
        }
        break;
    }
}
function debug() {
    var axTWjN = {
        'IvYHO': 'input',
        'ynkFw': function (callee, param1) {
            return callee(param1);
        }
    };
    var input = document['getElementById'](axTWjN['IvYHO'])['value'];
    axTWjN['ynkFw'](Main, input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));