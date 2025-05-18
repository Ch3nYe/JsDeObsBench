function Main(input) {
    var QgBvYC = {
        'HrHnt': '0|5|2|4|1|3',
        'CqaFL': function (x, y) {
            return x === y;
        },
        'azJOn': 'Yes',
        'cDSUu': function (callee, param1) {
            return callee(param1);
        },
        'uXVOU': function (x, y) {
            return x + y;
        }
    };
    var UymEbM = QgBvYC['HrHnt']['split']('|');
    var EPjour = 0x0;
    while (!![]) {
        switch (UymEbM[EPjour++]) {
        case '0':
            var inp = input['split']('\x20');
            continue;
        case '1':
            var flsqn = Math['floor'](Math['sqrt'](n));
            continue;
        case '2':
            var b = inp[0x1];
            continue;
        case '3':
            QgBvYC['CqaFL'](flsqn * flsqn, n) ? console['log'](QgBvYC['azJOn']) : console['log']('No');
            continue;
        case '4':
            var n = QgBvYC['cDSUu'](parseInt, QgBvYC['uXVOU'](a, b));
            continue;
        case '5':
            var a = inp[0x0];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));