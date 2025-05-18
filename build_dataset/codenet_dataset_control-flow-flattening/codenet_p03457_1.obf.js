function Main(input) {
    var RtULTG = {
        'UNfJF': '5|0|6|4|8|10|7|2|9|3|1',
        'jbVgW': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'uvJLb': function (x, y) {
            return x + y;
        },
        'bKaoh': function (callee, param1) {
            return callee(param1);
        },
        'EJlEm': 'Yes',
        'RQUAP': function (x, y) {
            return x + y;
        },
        'JmTOJ': function (x, y) {
            return x < y;
        },
        'DdIPg': '1|4|2|0|3',
        'ZdVAO': function (x, y) {
            return x - y;
        },
        'CVOyz': function (x, y) {
            return x - y;
        },
        'hEJxc': function (x, y) {
            return x - y;
        },
        'arrGI': function (x, y) {
            return x === y;
        },
        'KHypY': function (x, y) {
            return x % y;
        }
    };
    var tmkQxz = RtULTG['UNfJF']['split']('|');
    var BGrrAu = 0x0;
    while (!![]) {
        switch (tmkQxz[BGrrAu++]) {
        case '0':
            var N = RtULTG['jbVgW'](parseInt, args, 0xa);
            continue;
        case '1':
            console['log'](answer);
            continue;
        case '2':
            for (var i = 0x0; i < N; i++) {
                plan[RtULTG['uvJLb'](i, 0x1)] = RtULTG['bKaoh'](parser, history[i]);
            }
            continue;
        case '3':
            answer = flg ? RtULTG['EJlEm'] : 'No';
            continue;
        case '4':
            var answer;
            continue;
        case '5':
            var args = input['split']('\x0a');
            continue;
        case '6':
            var history = args['slice'](0x1, RtULTG['RQUAP'](N, 0x1));
            continue;
        case '7':
            plan[0x0] = [
                0x0,
                0x0,
                0x0
            ];
            continue;
        case '8':
            var flg = 0x1;
            continue;
        case '9':
            for (var i = 0x1; RtULTG['JmTOJ'](i, plan['length']); i++) {
                var AObzLT = RtULTG['DdIPg']['split']('|');
                var ofHgPp = 0x0;
                while (!![]) {
                    switch (AObzLT[ofHgPp++]) {
                    case '0':
                        var dist = Math['abs'](RtULTG['ZdVAO'](RtULTG['RQUAP'](rec2[0x1], rec2[0x2]), rec1[0x1]) - rec1[0x2]);
                        continue;
                    case '1':
                        var rec1 = plan[RtULTG['CVOyz'](i, 0x1)];
                        continue;
                    case '2':
                        var dt = RtULTG['hEJxc'](rec2[0x0], rec1[0x0]);
                        continue;
                    case '3':
                        if (dt >= dist && RtULTG['arrGI'](dt % 0x2, RtULTG['KHypY'](dist, 0x2))) {
                        } else {
                            flg = 0x0;
                        }
                        continue;
                    case '4':
                        var rec2 = plan[i];
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '10':
            var plan = [];
            continue;
        }
        break;
    }
}
function parser(record) {
    var OsMlMk = {
        'OIbXu': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'tHFaP': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var tPmumY = '5|3|2|0|4|1'['split']('|');
    var yPQAIl = 0x0;
    while (!![]) {
        switch (tPmumY[yPQAIl++]) {
        case '0':
            return_val['push'](OsMlMk['OIbXu'](parseInt, args[0x1], 0xa));
            continue;
        case '1':
            return return_val;
        case '2':
            return_val['push'](parseInt(args[0x0], 0xa));
            continue;
        case '3':
            var return_val = [];
            continue;
        case '4':
            return_val['push'](OsMlMk['tHFaP'](parseInt, args[0x2], 0xa));
            continue;
        case '5':
            var args = record['split']('\x20');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));