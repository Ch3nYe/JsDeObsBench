function Main(input) {
    var jCAmIz = {
        'AgAlm': '3|2|6|4|5|8|1|7|0',
        'tbDJi': function (x, y) {
            return x == y;
        },
        'DYsGA': 'Bad',
        'jfaLd': 'Good',
        'lTHFo': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var xgLQXJ = jCAmIz['AgAlm']['split']('|');
    var OLujNf = 0x0;
    while (!![]) {
        switch (xgLQXJ[OLujNf++]) {
        case '0':
            if (jCAmIz['tbDJi'](a, b)) {
                console['log']('Bad');
            } else if (jCAmIz['tbDJi'](b, c)) {
                console['log'](jCAmIz['DYsGA']);
            } else if (c == d) {
                console['log'](jCAmIz['DYsGA']);
            } else {
                console['log'](jCAmIz['jfaLd']);
            }
            continue;
        case '1':
            var c = jCAmIz['lTHFo'](parseInt, arr[0x2], 0xa);
            continue;
        case '2':
            var tem = input;
            continue;
        case '3':
            input = input['split']('\x20');
            continue;
        case '4':
            var arr = String(tem)['split']('');
            continue;
        case '5':
            var a = parseInt(arr[0x0], 0xa);
            continue;
        case '6':
            var beforeText = tem;
            continue;
        case '7':
            var d = jCAmIz['lTHFo'](parseInt, arr[0x3], 0xa);
            continue;
        case '8':
            var b = jCAmIz['lTHFo'](parseInt, arr[0x1], 0xa);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));