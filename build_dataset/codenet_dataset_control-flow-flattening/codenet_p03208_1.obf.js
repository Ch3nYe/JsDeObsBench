'use strict';
function main(arg) {
    const XyFaLe = {
        'rSzTs': function (x, y) {
            return x - y;
        },
        'mxIrR': function (callee, param1) {
            return callee(param1);
        },
        'oQtVy': function (callee, param1) {
            return callee(param1);
        },
        'weWqu': function (x, y) {
            return x + y;
        },
        'VNtQT': function (x, y) {
            return x - y;
        },
        'bLxoa': function (x, y) {
            return x + y;
        }
    };
    const inputs = arg['split']('\x0a');
    const N = XyFaLe['mxIrR'](parseInt, inputs[0x0]['split']('\x20')[0x0]);
    const K = XyFaLe['oQtVy'](parseInt, inputs[0x0]['split']('\x20')[0x1]);
    const list = inputs['slice'](0x1, XyFaLe['weWqu'](N, 0x1))['map'](x => parseInt(x))['sort']((a, b) => {
        return XyFaLe['rSzTs'](a, b);
    });
    let i, sa = [];
    for (i = 0x0; i < XyFaLe['VNtQT'](N, K) + 0x1; ++i)
        sa['push'](list[XyFaLe['rSzTs'](XyFaLe['bLxoa'](i, K), 0x1)] - list[i]);
    console['log'](Math['min'](...sa));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));