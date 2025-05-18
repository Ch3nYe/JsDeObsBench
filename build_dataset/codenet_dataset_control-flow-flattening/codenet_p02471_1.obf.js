function euc(a, b) {
    var XVaovC = {
        'xNzph': function (x, y) {
            return x > y;
        },
        'IlNsD': '8|9|3|0|4|7|5|1|6|2',
        'OExPf': function (x, y) {
            return x * y;
        },
        'jRXtP': function (x, y) {
            return x - y;
        },
        'OKykX': function (x, y) {
            return x * y;
        },
        'nlGvy': function (x, y) {
            return x / y;
        },
        'rIuqU': function (x, y) {
            return x % y;
        }
    };
    var r0 = a;
    var r1 = b;
    var x0 = 0x1;
    var x1 = 0x0;
    var y0 = 0x0;
    var y1 = 0x1;
    while (XVaovC['xNzph'](r1, 0x0)) {
        var vIZqjB = XVaovC['IlNsD']['split']('|');
        var YyrvUq = 0x0;
        while (!![]) {
            switch (vIZqjB[YyrvUq++]) {
            case '0':
                var y2 = y0 - XVaovC['OExPf'](q, y1);
                continue;
            case '1':
                x1 = x2;
                continue;
            case '2':
                y1 = y2;
                continue;
            case '3':
                var x2 = XVaovC['jRXtP'](x0, XVaovC['OKykX'](q, x1));
                continue;
            case '4':
                r0 = r1;
                continue;
            case '5':
                x0 = x1;
                continue;
            case '6':
                y0 = y1;
                continue;
            case '7':
                r1 = r2;
                continue;
            case '8':
                var q = Math['floor'](XVaovC['nlGvy'](r0, r1));
                continue;
            case '9':
                var r2 = XVaovC['rIuqU'](r0, r1);
                continue;
            }
            break;
        }
    }
    return [
        x0,
        y0
    ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var nums = input['split']('\x20')['map'](function (num) {
    return +num;
});
var a = nums[0x0];
var b = nums[0x1];
console['log'](euc(a, b)['join']('\x20'));