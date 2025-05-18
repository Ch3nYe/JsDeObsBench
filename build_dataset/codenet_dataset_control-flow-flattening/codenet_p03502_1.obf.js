function Main(input) {
    var uhHQdy = {
        'eNFlI': '6|0|5|4|1|3|7|2',
        'armSe': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'mJkUp': function (x, y) {
            return x % y;
        },
        'zjwZF': 'Yes',
        'dXNdF': function (x, y) {
            return x >= y;
        },
        'GcFft': function (x, y) {
            return x / y;
        },
        'WGGLA': function (x, y) {
            return x / y;
        },
        'qjaKb': function (x, y) {
            return x === y;
        },
        'jmXQb': function (callee, param1) {
            return callee(param1);
        }
    };
    var gvxtnP = uhHQdy['eNFlI']['split']('|');
    var UMLsgJ = 0x0;
    while (!![]) {
        switch (gvxtnP[UMLsgJ++]) {
        case '0':
            var N = uhHQdy['armSe'](parseInt, input[0x0], 0xa);
            continue;
        case '1':
            var Mod = N;
            continue;
        case '2':
            if (uhHQdy['mJkUp'](N, Sum) === 0x0) {
                console['log'](uhHQdy['zjwZF']);
            } else {
                console['log']('No');
            }
            continue;
        case '3':
            for (var i = 0x5f5e100; uhHQdy['dXNdF'](i, 0xa); i = uhHQdy['GcFft'](i, 0xa)) {
                Sum += parseInt(uhHQdy['WGGLA'](Mod, i));
                Mod = uhHQdy['mJkUp'](Mod, i);
            }
            continue;
        case '4':
            var Sum = 0x0;
            continue;
        case '5':
            if (uhHQdy['qjaKb'](uhHQdy['jmXQb'](parseInt, N / 0xa), 0x0)) {
                console['log']('Yes');
                return;
            }
            continue;
        case '6':
            input = input['split']('\x0a');
            continue;
        case '7':
            Sum += Mod;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));