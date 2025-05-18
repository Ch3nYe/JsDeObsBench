function Main(input) {
    var LDVFFu = {
        'KhSNA': function (x, y) {
            return x + y;
        },
        'BJTcW': function (x, y) {
            return x < y;
        },
        'QoASm': function (x, y) {
            return x > y;
        },
        'OLuMx': function (callee, param1) {
            return callee(param1);
        },
        'kshpo': function (callee, param1) {
            return callee(param1);
        },
        'BKqfh': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x0a');
    inputStr = input[0x0]['split']('\x20');
    var N = Number['parseInt'](inputStr[0x0]);
    var M = Number['parseInt'](inputStr[0x1]);
    var tmp = [];
    var array = [];
    var buycnt = 0x0;
    var okane = 0x0;
    var mokori = M;
    for (i = 0x0; i < N; i++) {
        tmp = input[i + 0x1]['split']('\x20');
        array[i] = tmp['map'](tmp => parseInt(tmp, 0xa));
        array[i][0x0] = LDVFFu['KhSNA']('0000000000', array[i][0x0])['substr'](-0xa);
    }
    array['sort']();
    for (i = 0x0; LDVFFu['BJTcW'](i, N); i++) {
        if (LDVFFu['QoASm'](mokori, LDVFFu['OLuMx'](parseInt, array[i][0x1]))) {
            okane += parseInt(array[i][0x0]) * LDVFFu['kshpo'](parseInt, array[i][0x1]);
            mokori -= LDVFFu['OLuMx'](parseInt, array[i][0x1]);
        } else {
            okane += LDVFFu['BKqfh'](LDVFFu['kshpo'](parseInt, array[i][0x0]), mokori);
            break;
        }
    }
    console['log'](okane);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));