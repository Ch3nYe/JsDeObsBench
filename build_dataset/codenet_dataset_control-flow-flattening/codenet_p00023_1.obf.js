(function (input) {
    var XrQcUY = {
        'BeUXS': function (callee, param1) {
            return callee(param1);
        },
        'OhwcA': function (x, y) {
            return x < y;
        },
        'qUlJa': function (x, y) {
            return x + y;
        },
        'GdjQN': function (x, y) {
            return x - y;
        },
        'DGKNg': function (x, y) {
            return x > y;
        },
        'WzdxT': function (x, y) {
            return x + y;
        }
    };
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    var n = XrQcUY['BeUXS'](Number, p['shift']());
    for (var i = 0x0; XrQcUY['OhwcA'](i, n); i++) {
        var args = p['shift']()['split']('\x20')['map'](Number);
        var xa = args['shift']();
        var ya = args['shift']();
        var ra = args['shift']();
        var xb = args['shift']();
        var yb = args['shift']();
        var rb = args['shift']();
        var d = Math['sqrt'](XrQcUY['qUlJa'](Math['pow'](XrQcUY['GdjQN'](xb, xa), 0x2), Math['pow'](yb - ya, 0x2)));
        if (XrQcUY['DGKNg'](ra, XrQcUY['WzdxT'](d, rb))) {
            console['log'](0x2);
        } else if (XrQcUY['DGKNg'](rb, d + ra)) {
            console['log'](-0x2);
        } else if (XrQcUY['OhwcA'](d, ra + rb)) {
            console['log'](0x1);
        } else {
            console['log'](0x0);
        }
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));