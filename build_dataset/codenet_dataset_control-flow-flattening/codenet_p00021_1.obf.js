(function (input) {
    var VLpRhj = {
        'PxMoH': function (callee, param1) {
            return callee(param1);
        },
        'GRXMI': function (x, y) {
            return x < y;
        },
        'zGMAw': function (x, y) {
            return x === y;
        },
        'slwIZ': function (x, y) {
            return x / y;
        },
        'PnQjn': function (x, y) {
            return x - y;
        },
        'pgwHS': function (x, y) {
            return x / y;
        },
        'kyZet': function (x, y) {
            return x - y;
        },
        'isvAp': 'YES'
    };
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    var n = VLpRhj['PxMoH'](Number, p['shift']());
    var i = 0x0;
    while (VLpRhj['GRXMI'](i++, n)) {
        var args = p['shift']()['split']('\x20')['map'](Number);
        var x1 = args['shift']();
        var y1 = args['shift']();
        var x2 = args['shift']();
        var y2 = args['shift']();
        var x3 = args['shift']();
        var y3 = args['shift']();
        var x4 = args['shift']();
        var y4 = args['shift']();
        console['log'](VLpRhj['zGMAw'](VLpRhj['slwIZ'](VLpRhj['PnQjn'](y2, y1), VLpRhj['PnQjn'](x2, x1))['toFixed'](0x5), VLpRhj['pgwHS'](VLpRhj['kyZet'](y4, y3), x4 - x3)['toFixed'](0x5)) ? VLpRhj['isvAp'] : 'NO');
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));