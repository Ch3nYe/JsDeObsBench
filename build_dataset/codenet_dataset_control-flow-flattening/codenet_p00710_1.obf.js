(function (input) {
    var CofNbu = {
        'TfMLx': function (callee, param1) {
            return callee(param1);
        },
        'EHziy': function (x, y) {
            return x === y;
        },
        'RUBgS': function (x, y) {
            return x - y;
        }
    };
    var inputs = input['replace'](/\r/g, '')['split']('\x0a');
    while (!![]) {
        var cards = [], line = inputs['shift']()['split']('\x20'), n = parseInt(line[0x0]), r = CofNbu['TfMLx'](parseInt, line[0x1]);
        if (CofNbu['EHziy'](n, 0x0) && r === 0x0)
            break;
        for (var i = n; i > 0x0; i--) {
            cards['push'](i);
        }
        while (r--) {
            var line = inputs['shift']()['split']('\x20'), p = CofNbu['RUBgS'](parseInt(line[0x0]), 0x1), c = CofNbu['TfMLx'](parseInt, line[0x1]), tmp;
            tmp = cards['splice'](p, c);
            cards = tmp['concat'](cards);
        }
        console['log'](cards['shift']());
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));