function Main(input) {
    var EGGZnq = {
        'YeyPX': function (callee, param1) {
            return callee(param1);
        },
        'lawQN': function (x, y) {
            return x < y;
        },
        'nOGWA': function (x, y) {
            return x - y;
        },
        'axzQU': function (x, y) {
            return x + y;
        },
        'ZliQu': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    var a1 = input[0x1]['split']('\x20')['map'](e => {
        return EGGZnq['YeyPX'](parseInt, e);
    });
    var a2 = input[0x2]['split']('\x20')['map'](e => {
        return parseInt(e);
    });
    var j = a1['length'] - 0x1;
    var m = 0x0, n = EGGZnq['nOGWA'](a1['length'], 0x2);
    var r = 0x0;
    var temp;
    for (var i = j; i >= m; i--) {
        temp = EGGZnq['axzQU'](EGGZnq['YeyPX'](sum, a1['slice'](m, EGGZnq['ZliQu'](i, 0x1))), EGGZnq['YeyPX'](sum, a2['slice'](i)));
        if (EGGZnq['lawQN'](r, temp))
            r = temp;
    }
    function sum(arr) {
        var r = 0x0;
        for (var i = 0x0; EGGZnq['lawQN'](i, arr['length']); i++) {
            r += arr[i];
        }
        return r;
    }
    console['log'](r);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));