function main(arg) {
    var SlzJlU = {
        'oOHxN': function (x, y) {
            return x - y;
        },
        'tNqvh': function (x, y) {
            return x * y;
        },
        'nNVLk': function (x, y) {
            return x * y;
        },
        'uVoTP': function (x, y) {
            return x - y;
        }
    };
    var size = arg['split']('\x0a')[0x0]['split']('\x20');
    var sel = arg['split']('\x0a')[0x1]['split']('\x20');
    console['log'](SlzJlU['oOHxN'](SlzJlU['tNqvh'](size[0x0], size[0x1]) - SlzJlU['nNVLk'](size[0x1], sel[0x0]), SlzJlU['nNVLk'](SlzJlU['uVoTP'](size[0x0], sel[0x0]), sel[0x1])));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));