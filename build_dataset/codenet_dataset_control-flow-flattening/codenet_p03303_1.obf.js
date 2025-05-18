function myout(text) {
    console['log'](text);
}
function Main(input) {
    var mySuHr = {
        'HyBTx': function (x, y) {
            return x != y;
        },
        'FbbQQ': function (x, y) {
            return x != y;
        },
        'SuUUp': function (x, y) {
            return x < y;
        },
        'umDwr': function (callee, param1) {
            return callee(param1);
        },
        'MMgqH': function (callee, param1) {
            return callee(param1);
        }
    };
    var JDTLmd = '0|5|4|8|6|3|1|7|2|9'['split']('|');
    var ZhRGyY = 0x0;
    while (!![]) {
        switch (JDTLmd[ZhRGyY++]) {
        case '0':
            input = input['split']('\x0a');
            continue;
        case '1':
            while (mySuHr['HyBTx'](S['length'], 0x0)) {
                var tmp = '';
                for (var i = 0x0; i < w; i++) {
                    if (mySuHr['FbbQQ'](S['length'], 0x0)) {
                        tmp += S['shift']();
                    }
                }
                list['push'](tmp);
            }
            continue;
        case '2':
            for (var i = 0x0; mySuHr['SuUUp'](i, list['length']); i++) {
                output += list[i]['slice'](0x0, 0x1);
            }
            continue;
        case '3':
            var list = [];
            continue;
        case '4':
            var w = parseInt(input[0x1]);
            continue;
        case '5':
            var S = input[0x0];
            continue;
        case '6':
            S = S['split']('');
            continue;
        case '7':
            var output = '';
            continue;
        case '8':
            if (w == 0x1) {
                mySuHr['umDwr'](myout, S);
                return;
            }
            continue;
        case '9':
            mySuHr['MMgqH'](myout, output);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());