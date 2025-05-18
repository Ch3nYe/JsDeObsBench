function myout(text) {
    console['log'](text);
}
function Main(input) {
    var evhuxT = {
        'tpEBs': '9|8|3|5|0|7|6|4|2|1',
        'IDTxO': function (callee, param1) {
            return callee(param1);
        },
        'KthME': function (x, y) {
            return x < y;
        },
        'ajwCv': function (x, y) {
            return x - y;
        },
        'woWJM': function (x, y) {
            return x / y;
        }
    };
    var ZnYeky = evhuxT['tpEBs']['split']('|');
    var TxcXcp = 0x0;
    while (!![]) {
        switch (ZnYeky[TxcXcp++]) {
        case '0':
            var sum = 0x0;
            continue;
        case '1':
            evhuxT['IDTxO'](myout, output);
            continue;
        case '2':
            for (var i = 0x0; evhuxT['KthME'](i, list['length']); i++) {
                output += Math['pow'](evhuxT['ajwCv'](list[i], ave), 0x2);
            }
            continue;
        case '3':
            var list = input[0x1]['split']('\x20')['map'](a => Number(a));
            continue;
        case '4':
            ave = Math['round'](evhuxT['woWJM'](sum, N));
            continue;
        case '5':
            var ave;
            continue;
        case '6':
            for (var i = 0x0; i < list['length']; i++) {
                sum += list[i];
            }
            continue;
        case '7':
            var output = 0x0;
            continue;
        case '8':
            var N = evhuxT['IDTxO'](parseInt, input[0x0]);
            continue;
        case '9':
            input = input['trim']()['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());