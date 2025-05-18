process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
function Main(input) {
    var CKyKAo = {
        'UyJPp': '7|5|2|1|3|9|4|8|0|6|10',
        'dvqUC': function (callee, param1) {
            return callee(param1);
        },
        'mHtpI': 'initial_answer',
        'pVEvG': function (x, y) {
            return x < y;
        },
        'rxogr': function (x, y) {
            return x * y;
        },
        'QsqYG': function (x, y) {
            return x + y;
        },
        'rASkF': function (x, y) {
            return x * y;
        },
        'BOIbL': function (x, y) {
            return x - y;
        }
    };
    var Ifvqbk = CKyKAo['UyJPp']['split']('|');
    var rMuTYy = 0x0;
    while (!![]) {
        switch (Ifvqbk[rMuTYy++]) {
        case '0':
            var input4 = CKyKAo['dvqUC'](Number, line3[0x0]);
            continue;
        case '1':
            var line2 = arg[0x2]['split']('\x20');
            continue;
        case '2':
            var line1 = arg[0x1]['split']('\x20');
            continue;
        case '3':
            var line3 = arg[0x3]['split']('\x20');
            continue;
        case '4':
            var input2 = Number(line1[0x0]);
            continue;
        case '5':
            var line0 = arg[0x0]['split']('\x20');
            continue;
        case '6':
            var ans = CKyKAo['mHtpI'];
            continue;
        case '7':
            var arg = input['split']('\x0a');
            continue;
        case '8':
            var input3 = CKyKAo['dvqUC'](Number, line2[0x0]);
            continue;
        case '9':
            var input1 = CKyKAo['dvqUC'](Number, line0[0x0]);
            continue;
        case '10':
            if (CKyKAo['pVEvG'](input1, input2))
                console['log'](CKyKAo['rxogr'](input3, input1));
            else
                console['log'](CKyKAo['QsqYG'](input3 * input2, CKyKAo['rASkF'](CKyKAo['BOIbL'](input1, input2), input4)));
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));