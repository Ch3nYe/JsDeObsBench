(stdin => {
    var GIsmBg = {
        'aGEFM': function (x, y) {
            return x / y;
        },
        'ijrtw': function (x, y) {
            return x * y;
        }
    };
    var lines = stdin['trim']()['split']('\x0a');
    var inputs = lines['shift']()['split']('\x20')['map'](Number);
    console['log'](Math['floor'](GIsmBg['aGEFM'](GIsmBg['ijrtw'](inputs[0x0], 0x3) + inputs[0x1], 0x2)));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8'));