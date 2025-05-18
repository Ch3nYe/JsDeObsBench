var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
for (var i = 0x0; i < AL; i++) {
    var cJenKV = '1|4|5|3|0|2'['split']('|');
    var KkBhcY = 0x0;
    while (!![]) {
        switch (cJenKV[KkBhcY++]) {
        case '0':
            var b = arr['join']('');
            continue;
        case '1':
            var arr = Arr[i]['split']('')['map'](Number);
            continue;
        case '2':
            console['log'](parseInt(a) - parseInt(b));
            continue;
        case '3':
            arr['sort'](function (a, b) {
                var xWAwSl = {
                    'mGtmb': function (x, y) {
                        return x - y;
                    }
                };
                return xWAwSl['mGtmb'](a, b);
            });
            continue;
        case '4':
            arr['sort'](function (a, b) {
                var vsJWKx = {
                    'vzFvp': function (x, y) {
                        return x - y;
                    }
                };
                return vsJWKx['vzFvp'](b, a);
            });
            continue;
        case '5':
            var a = arr['join']('');
            continue;
        }
        break;
    }
}