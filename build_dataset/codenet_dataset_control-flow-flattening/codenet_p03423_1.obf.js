function main(input) {
    const ZnfpGZ = {
        'vOIiP': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'RiXRD': function (x, y) {
            return x / y;
        }
    };
    input = input['trim']();
    const a = ZnfpGZ['vOIiP'](parseInt, input['split']('\x20')[0x0], 0xa);
    console['log'](Math['floor'](ZnfpGZ['RiXRD'](a, 0x3)));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));