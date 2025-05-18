function Main(input) {
    var iIqsMQ = {
        'URLlP': '2|1|6|3|5|0|4',
        'kWPMJ': function (callee, param1) {
            return callee(param1);
        },
        'VnlCn': function (callee, param1) {
            return callee(param1);
        }
    };
    var OvZXUl = iIqsMQ['URLlP']['split']('|');
    var BZSAke = 0x0;
    while (!![]) {
        switch (OvZXUl[BZSAke++]) {
        case '0':
            console['log']('%s', ans);
            continue;
        case '1':
            var A = iIqsMQ['kWPMJ'](Number, input[0x0]['split']('\x20')[0x0]);
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            var ans = iIqsMQ['VnlCn'](BigInt, Math['floor'](A * B));
            continue;
        case '4':
            return ans;
        case '5':
            var ans = ans['toString']();
            continue;
        case '6':
            var B = iIqsMQ['VnlCn'](Number, input[0x0]['split']('\x20')[0x1]);
            continue;
        }
        break;
    }
}
function debug(n) {
    var ELtrOm = {
        'eIXQt': '4|1|0|2|3',
        'TmRYu': function (callee, param1) {
            return callee(param1);
        },
        'QRRsg': function (x, y) {
            return x == y;
        },
        'GQkIZ': function (x, y) {
            return x + y;
        },
        'LGpri': 'output',
        'VSXFz': 'result',
        'rFmGa': function (x, y) {
            return x + y;
        },
        'LRrGn': 'input'
    };
    var rRqKtD = ELtrOm['eIXQt']['split']('|');
    var ihbmkP = 0x0;
    while (!![]) {
        switch (rRqKtD[ihbmkP++]) {
        case '0':
            var result = 'WA';
            continue;
        case '1':
            var ans = ELtrOm['TmRYu'](Main, input);
            continue;
        case '2':
            if (ELtrOm['QRRsg'](ans, document['getElementById'](ELtrOm['GQkIZ'](ELtrOm['LGpri'], n))['value']['split']('\x0a')[0x0])) {
                result = 'AC';
            }
            continue;
        case '3':
            document['getElementById'](ELtrOm['VSXFz'] + n)['innerHTML'] = result;
            continue;
        case '4':
            var input = document['getElementById'](ELtrOm['rFmGa'](ELtrOm['LRrGn'], n))['value'];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));