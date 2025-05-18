function main(input) {
    var udXUUk = {
        'uiHuZ': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'WgNfn': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'HmDFR': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'GIAEA': function (x, y) {
            return x <= y;
        },
        'WZnTw': function (x, y) {
            return x | y;
        },
        'ugtVZ': function (x, y) {
            return x / y;
        },
        'FCdwJ': function (x, y) {
            return x <= y;
        },
        'rRwTq': function (x, y) {
            return x | y;
        },
        'OrluD': function (x, y) {
            return x / y;
        },
        'hIiHm': function (x, y) {
            return x | y;
        },
        'sEXIr': function (x, y) {
            return x * y;
        },
        'FPEHm': function (x, y) {
            return x >= y;
        },
        'vyzvC': function (x, y) {
            return x == y;
        },
        'DlMph': function (x, y) {
            return x + y;
        },
        'euaPY': function (x, y) {
            return x + y;
        },
        'rMUIp': function (x, y) {
            return x * y;
        },
        'yAhdR': function (x, y) {
            return x * y;
        },
        'lvBsr': function (x, y) {
            return x * y;
        }
    };
    const args = input['split']('\x20');
    const R = udXUUk['uiHuZ'](parseInt, args[0x0], 0xa), G = udXUUk['uiHuZ'](parseInt, args[0x1], 0xa), B = udXUUk['WgNfn'](parseInt, args[0x2], 0xa), N = udXUUk['HmDFR'](parseInt, args[0x3], 0xa);
    var s = 0x0;
    var k = 0x0;
    for (var i = 0x0; udXUUk['GIAEA'](i, udXUUk['WZnTw'](udXUUk['ugtVZ'](N, R), 0x0)); ++i) {
        for (var j = 0x0; udXUUk['FCdwJ'](j, udXUUk['rRwTq'](udXUUk['OrluD'](N, G), 0x0)); ++j) {
            k = udXUUk['hIiHm'](udXUUk['ugtVZ'](N - udXUUk['sEXIr'](i, R) - udXUUk['sEXIr'](j, G), B), 0x0);
            if (udXUUk['FPEHm'](k, 0x0) && udXUUk['vyzvC'](udXUUk['DlMph'](udXUUk['euaPY'](udXUUk['rMUIp'](i, R), udXUUk['yAhdR'](j, G)), udXUUk['lvBsr'](k, B)), N))
                ++s;
        }
    }
    console['log'](s);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));