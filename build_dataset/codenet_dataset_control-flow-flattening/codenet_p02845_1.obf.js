function Main(input) {
    var ZUwqZP = {
        'cBIbo': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'OVmnv': function (x, y) {
            return x < y;
        },
        'HnXtS': function (x, y) {
            return x === y;
        },
        'umEVV': function (x, y) {
            return x < y;
        }
    };
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var N = ZUwqZP['cBIbo'](parseInt, input[0x0][0x0], 0xa);
    var RGBWithoutOrder = [
        0x1,
        0x0,
        0x0
    ];
    var tmp1, tmp2, flag;
    var ans = 0x3;
    for (var i = 0x1; ZUwqZP['OVmnv'](i, N); i++) {
        tmp2 = 0x0;
        tmp1 = ZUwqZP['cBIbo'](parseInt, input[0x1][i], 0xa);
        for (var x of RGBWithoutOrder) {
            if (ZUwqZP['HnXtS'](x, tmp1))
                tmp2++;
        }
        ans *= tmp2;
        ans %= 0x3b9aca00 + 0x7;
        for (var j = 0x0; ZUwqZP['umEVV'](j, 0x3); j++) {
            if (ZUwqZP['HnXtS'](RGBWithoutOrder[j], tmp1)) {
                RGBWithoutOrder[j]++;
                break;
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));