(function (stdin) {
    var sucKRH = {
        'uemel': function (callee, param1) {
            return callee(param1);
        },
        'BkvDl': function (x, y) {
            return x < y;
        },
        'PdEsN': function (x, y) {
            return x > y;
        },
        'lZboV': function (x, y) {
            return x + y;
        }
    };
    var lines = stdin['trim']()['split']('\x0a');
    while (0x1) {
        var line = lines['shift']();
        if (line == '0') {
            break;
        }
        var n = sucKRH['uemel'](Number, line);
        var a = 0x0, b = 0x0;
        for (var i = 0x0; sucKRH['BkvDl'](i, n); i++) {
            var numbers = lines['shift']()['split']('\x20')['map'](Number);
            if (numbers[0x0] == numbers[0x1]) {
                a += numbers[0x0];
                b += numbers[0x0];
            } else if (sucKRH['PdEsN'](numbers[0x0], numbers[0x1])) {
                a += sucKRH['lZboV'](numbers[0x0], numbers[0x1]);
            } else {
                b += numbers[0x0] + numbers[0x1];
            }
        }
        console['log']([
            a,
            b
        ]['join']('\x20'));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));