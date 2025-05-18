function Main(input) {
    var caHxah = {
        'ZWntI': '1|4|0|2|3',
        'JKQlT': function (callee, param1) {
            return callee(param1);
        },
        'chzPN': function (x, y) {
            return x / y;
        },
        'QJdrt': function (x, y) {
            return x * y;
        },
        'syAKZ': function (x, y) {
            return x + y;
        }
    };
    var WQHxNN = caHxah['ZWntI']['split']('|');
    var JZSCwN = 0x0;
    while (!![]) {
        switch (WQHxNN[JZSCwN++]) {
        case '0':
            input[0x1] = caHxah['JKQlT'](Number, input[0x1]);
            continue;
        case '1':
            input = input['split']('\x0a');
            continue;
        case '2':
            input[0x2] = caHxah['JKQlT'](Number, input[0x2]);
            continue;
        case '3':
            console['log'](caHxah['chzPN'](caHxah['QJdrt'](caHxah['syAKZ'](input[0x0], input[0x1]), input[0x2]), 0x2));
            continue;
        case '4':
            input[0x0] = Number(input[0x0]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));