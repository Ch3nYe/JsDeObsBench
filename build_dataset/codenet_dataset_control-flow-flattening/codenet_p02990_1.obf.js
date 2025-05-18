function Main(input) {
    var TUYhyl = {
        'GrARl': '3|4|2|1|0|7|5|6|8',
        'zquLI': function (x, y) {
            return x + y;
        },
        'JSvCQ': function (callee, param1) {
            return callee(param1);
        },
        'aIOgw': function (x, y) {
            return x <= y;
        },
        'uhSJm': function (x, y) {
            return x % y;
        },
        'glNSC': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'kmOUO': function (x, y) {
            return x - y;
        },
        'HQaVn': function (x, y) {
            return x - y;
        },
        'EHnvS': function (x, y) {
            return x % y;
        },
        'JeFUF': function (x, y) {
            return x * y;
        }
    };
    var CmEPfT = TUYhyl['GrARl']['split']('|');
    var SjoroQ = 0x0;
    while (!![]) {
        switch (CmEPfT[SjoroQ++]) {
        case '0':
            var mod = TUYhyl['zquLI'](Math['pow'](0xa, 0x9), 0x7);
            continue;
        case '1':
            var anssub = new Array();
            continue;
        case '2':
            var K = parseInt(input[0x0]['split']('\x20')[0x1]);
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            var N = TUYhyl['JSvCQ'](parseInt, input[0x0]['split']('\x20')[0x0]);
            continue;
        case '5':
            var ans = anssub['join']('\x0a');
            continue;
        case '6':
            console['log']('%s', ans);
            continue;
        case '7':
            for (var i = 0x1; TUYhyl['aIOgw'](i, K); i++) {
                var a = TUYhyl['uhSJm'](TUYhyl['glNSC'](combination, TUYhyl['zquLI'](TUYhyl['kmOUO'](N, K), 0x1), i), mod);
                var b = TUYhyl['glNSC'](combination, TUYhyl['HQaVn'](K, 0x1), i - 0x1) % mod;
                var c = TUYhyl['EHnvS'](TUYhyl['JeFUF'](a, b), mod);
                anssub['push'](c);
            }
            continue;
        case '8':
            return ans;
        }
        break;
    }
}
function permutation(n, r) {
    var jwLjHM = {
        'dJViO': function (x, y) {
            return x < y;
        },
        'ilkPm': function (x, y) {
            return x - y;
        }
    };
    for (var i = 0x0, res = 0x1; jwLjHM['dJViO'](i, r); i++) {
        res *= jwLjHM['ilkPm'](n, i);
    }
    return res;
}
function combination(n, r) {
    var MeArED = {
        'JVibD': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return MeArED['JVibD'](permutation, n, r) / permutation(r, r);
}
function debug(n) {
    var qEpoPE = {
        'BFCmm': '4|3|0|1|2',
        'Iyypw': function (x, y) {
            return x == y;
        },
        'dXoZW': function (x, y) {
            return x + y;
        },
        'gSELT': 'result',
        'seKnr': function (x, y) {
            return x + y;
        },
        'cvYzK': 'input'
    };
    var epIihn = qEpoPE['BFCmm']['split']('|');
    var ooVPfT = 0x0;
    while (!![]) {
        switch (epIihn[ooVPfT++]) {
        case '0':
            var result = 'WA';
            continue;
        case '1':
            if (qEpoPE['Iyypw'](ans, document['getElementById'](qEpoPE['dXoZW']('output', n))['value']['split']('\x0a')[0x0])) {
                result = 'AC';
            }
            continue;
        case '2':
            document['getElementById'](qEpoPE['dXoZW'](qEpoPE['gSELT'], n))['innerHTML'] = result;
            continue;
        case '3':
            var ans = Main(input);
            continue;
        case '4':
            var input = document['getElementById'](qEpoPE['seKnr'](qEpoPE['cvYzK'], n))['value'];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));