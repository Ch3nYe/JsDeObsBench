var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
arr['some'](function (v) {
    var iDRPdN = {
        'MOaNd': function (x, y) {
            return x == y;
        },
        'moedM': function (x, y) {
            return x <= y;
        },
        'FHtEY': function (x, y) {
            return x * y;
        },
        'EzWOa': function (x, y) {
            return x < y;
        },
        'IRelf': function (x, y) {
            return x + y;
        },
        'hReyZ': function (x, y) {
            return x * y;
        },
        'Bahgx': function (x, y) {
            return x == y;
        },
        'jyzlG': function (x, y) {
            return x < y;
        },
        'iZUVd': function (x, y) {
            return x < y;
        }
    };
    if (iDRPdN['MOaNd'](v, 0x0))
        return !![];
    var cnt = 0x0;
    for (var a = 0x1; iDRPdN['moedM'](a, 0xb5); a++) {
        var A = iDRPdN['FHtEY'](a, a);
        if (iDRPdN['EzWOa'](v, A))
            break;
        if (A == v)
            cnt++;
        for (var b = a; b <= 0xb5; b++) {
            var B = iDRPdN['IRelf'](A, iDRPdN['hReyZ'](b, b));
            if (v < B)
                break;
            if (iDRPdN['Bahgx'](B, v))
                cnt++;
            for (var c = b; iDRPdN['moedM'](c, 0xb5); c++) {
                var C = B + c * c;
                if (iDRPdN['jyzlG'](v, C))
                    break;
                if (iDRPdN['MOaNd'](C, v))
                    cnt++;
                for (var d = c; d <= 0xb5; d++) {
                    var D = iDRPdN['IRelf'](C, iDRPdN['hReyZ'](d, d));
                    if (iDRPdN['iZUVd'](v, D))
                        break;
                    if (D == v)
                        cnt++;
                }
            }
        }
    }
    console['log'](cnt);
});