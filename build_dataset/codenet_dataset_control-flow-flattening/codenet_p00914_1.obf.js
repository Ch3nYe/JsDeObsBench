function kumiawase(start, end, len) {
    var IlrGTM = {
        'KFBVL': function (x, y) {
            return x == y;
        },
        'kYQUz': function (x, y) {
            return x <= y;
        },
        'FQqGH': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'GUZhm': function (x, y) {
            return x + y;
        }
    };
    var ans = [];
    var loop = function (a, arr) {
        if (IlrGTM['KFBVL'](arr['length'], len))
            ans['push'](arr);
        else {
            for (var i = a; IlrGTM['kYQUz'](i, end); i++)
                IlrGTM['FQqGH'](loop, IlrGTM['GUZhm'](i, 0x1), arr['concat'](i));
        }
    };
    IlrGTM['FQqGH'](loop, start, []);
    return ans;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['some'](function (v, i) {
    var RjjhhZ = {
        'dzCaE': function (x, y) {
            return x + y;
        },
        'SCWBj': function (x, y) {
            return x == y;
        },
        'HlgNa': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'dmdHE': '0\x200\x200'
    };
    var xtKleL = '0|4|1|3|5|6|2'['split']('|');
    var tlcLSp = 0x0;
    while (!![]) {
        switch (xtKleL[tlcLSp++]) {
        case '0':
            var nFMfOe = {
                'hncXN': function (x, y) {
                    return RjjhhZ['dzCaE'](x, y);
                },
                'LcOsN': function (x, y) {
                    return RjjhhZ['SCWBj'](x, y);
                }
            };
            continue;
        case '1':
            var nks = v['split']('\x20')['map'](Number);
            continue;
        case '2':
            console['log'](cnt);
            continue;
        case '3':
            var ary = RjjhhZ['HlgNa'](kumiawase, 0x1, nks[0x0], nks[0x1]);
            continue;
        case '4':
            if (RjjhhZ['SCWBj'](v, RjjhhZ['dmdHE']))
                return !![];
            continue;
        case '5':
            var cnt = 0x0;
            continue;
        case '6':
            ary['forEach'](function (v) {
                var sum = v['reduce'](function (a, b) {
                    return nFMfOe['hncXN'](a, b);
                });
                if (nFMfOe['LcOsN'](sum, nks[0x2]))
                    cnt++;
            });
            continue;
        }
        break;
    }
});