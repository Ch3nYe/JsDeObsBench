function Main(input) {
    var wqzAcf = {
        'LOiIM': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'elaAt': function (x, y) {
            return x + y;
        },
        'PZQDJ': function (x, y) {
            return x - y;
        }
    };
    var NHzxWm = '2|5|6|3|0|4|1'['split']('|');
    var gTXVeh = 0x0;
    while (!![]) {
        switch (NHzxWm[gTXVeh++]) {
        case '0':
            var bw = wqzAcf['LOiIM'](counter, s, 'BW');
            continue;
        case '1':
            console['log'](wqzAcf['elaAt'](bw, wb));
            continue;
        case '2':
            var Fxnnwk = {
                'mEbyq': function (x, y) {
                    return wqzAcf['PZQDJ'](x, y);
                }
            };
            continue;
        case '3':
            var s = lines[0x0];
            continue;
        case '4':
            var wb = wqzAcf['LOiIM'](counter, s, 'WB');
            continue;
        case '5':
            var counter = function (str, seq) {
                return Fxnnwk['mEbyq'](str['split'](seq)['length'], 0x1);
            };
            continue;
        case '6':
            lines = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));