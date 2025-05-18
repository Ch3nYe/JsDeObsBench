function main(input) {
    const HujYmJ = {
        'wLVta': function (x, y) {
            return x == y;
        },
        'OGaLx': function (x, y) {
            return x % y;
        },
        'kaALq': function (x, y) {
            return x + y;
        },
        'SAGwy': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']();
    const a = input['split']('\x20')['map'](Number);
    console['log'](HujYmJ['wLVta'](HujYmJ['OGaLx'](a[0x1], a[0x0]), 0x0) ? HujYmJ['kaALq'](a[0x0], a[0x1]) : HujYmJ['SAGwy'](a[0x1], a[0x0]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));