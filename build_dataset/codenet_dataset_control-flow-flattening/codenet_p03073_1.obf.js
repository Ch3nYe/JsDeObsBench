function Main(input) {
    var IOIriW = {
        'lijTV': function (x, y) {
            return x < y;
        },
        'zOdIZ': function (x, y) {
            return x != y;
        },
        'kKXpO': function (callee, param1) {
            return callee(param1);
        },
        'sPcEe': function (x, y) {
            return x % y;
        },
        'TJCXq': function (x, y) {
            return x - y;
        }
    };
    var cnt = 0x0;
    for (var i = 0x0; IOIriW['lijTV'](i, input['length']); i++) {
        if (IOIriW['zOdIZ'](IOIriW['kKXpO'](parseInt, input[i]), IOIriW['sPcEe'](i, 0x2)))
            cnt++;
    }
    console['log'](IOIriW['kKXpO'](parseInt, Math['min'](cnt, IOIriW['TJCXq'](input['length'], cnt))));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));