'use strict';
const main = arg => {
    const WmKScQ = {
        'NaUvh': function (callee, param1) {
            return callee(param1);
        },
        'agqQq': function (x, y) {
            return x % y;
        },
        'vkwux': function (x, y) {
            return x + y;
        },
        'VEPOY': function (x, y) {
            return x / y;
        },
        'ZirRz': function (x, y) {
            return x > y;
        },
        'OKLTQ': function (x, y) {
            return x % y;
        },
        'yOLAE': function (x, y) {
            return x + y;
        },
        'rZhWp': function (x, y) {
            return x * y;
        }
    };
    const input = arg['trim']()['split']('\x0a');
    let x = WmKScQ['NaUvh'](Number, input[0x0]['split']('\x20')[0x0]);
    if (WmKScQ['agqQq'](x, 0xb) > 0x6) {
        console['log'](WmKScQ['vkwux'](Math['floor'](WmKScQ['VEPOY'](x, 0xb)) * 0x2, 0x2));
    } else if (WmKScQ['ZirRz'](WmKScQ['OKLTQ'](x, 0xb), 0x0)) {
        console['log'](WmKScQ['yOLAE'](WmKScQ['rZhWp'](Math['floor'](WmKScQ['VEPOY'](x, 0xb)), 0x2), 0x1));
    } else {
        console['log'](Math['floor'](x / 0xb) * 0x2);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));