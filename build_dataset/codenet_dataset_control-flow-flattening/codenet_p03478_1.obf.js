function Main(input) {
    var hgQmrP = {
        'iQvom': function (x, y) {
            return x <= y;
        },
        'tJjtl': function (x, y) {
            return x <= y;
        },
        'bqQlR': function (x, y) {
            return x <= y;
        },
        'xgORB': function (x, y) {
            return x <= y;
        }
    };
    var input = input['split']('\x20');
    var n = input[0x0];
    var a = input[0x1];
    var b = input[0x2];
    var Sum = 0x0;
    for (j = 0x1; hgQmrP['iQvom'](j, n); j++) {
        if (hgQmrP['iQvom'](0x0, j) && hgQmrP['tJjtl'](j, 0x9)) {
            if (hgQmrP['bqQlR'](a, j) && hgQmrP['xgORB'](j, b)) {
                Sum += j;
            }
        } else {
            var str = j['toString']();
            var arr = str['split']('')['map'](n => parseInt(n));
            var x = arr['reduce'](function (prev, current, i, arr) {
                return prev + current;
            });
        }
        ;
        if (a <= x && hgQmrP['xgORB'](x, b)) {
            Sum += j;
        }
    }
    console['log'](Sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));