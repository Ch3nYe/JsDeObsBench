function Main(input) {
    var KTJCoW = {
        'XOugb': '0|5|7|3|6|4|8|2|1',
        'FwhMJ': function (x, y) {
            return x > y;
        },
        'qHksC': function (x, y) {
            return x / y;
        },
        'WlCFE': function (x, y) {
            return x * y;
        },
        'tcsiN': function (x, y) {
            return x % y;
        }
    };
    var zLsMTd = KTJCoW['XOugb']['split']('|');
    var waltba = 0x0;
    while (!![]) {
        switch (zLsMTd[waltba++]) {
        case '0':
            var dataList = input['split']('\x0a');
            continue;
        case '1':
            console['log'](num);
            continue;
        case '2':
            if (KTJCoW['FwhMJ'](rest, 0x0))
                num += 0x1;
            continue;
        case '3':
            var d = data[0x1];
            continue;
        case '4':
            var num = Math['floor'](KTJCoW['qHksC'](n, checkNum));
            continue;
        case '5':
            var data = dataList[0x0]['split']('\x20');
            continue;
        case '6':
            var checkNum = KTJCoW['WlCFE'](d, 0x2) + 0x1;
            continue;
        case '7':
            var n = data[0x0];
            continue;
        case '8':
            var rest = KTJCoW['tcsiN'](n, checkNum);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));