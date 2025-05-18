var a0_0x1fdc31 = a0_0x5e8d;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x1fdc31(0x0));
function a0_0x5e8d(VKUTNt, key) {
    var stringArray = a0_0x2f34();
    a0_0x5e8d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e8d(VKUTNt, key);
}
function a0_0x2f34() {
    var _0x1c2903 = [
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'max',
        'length',
        'join',
        'replace',
        'log'
    ];
    a0_0x2f34 = function () {
        return _0x1c2903;
    };
    return a0_0x2f34();
}
var arr = input[a0_0x1fdc31(0x1)]()['split']('\x0a');
while (!![]) {
    var n = arr[a0_0x1fdc31(0x2)]() - 0x0;
    if (n == 0x0)
        break;
    var base = [
        '',
        '',
        '',
        '',
        ''
    ];
    for (var i = 0x0; i < n; i++) {
        var [d, p, q] = arr['shift']()[a0_0x1fdc31(0x3)]('\x20')[a0_0x1fdc31(0x4)](Number);
        q--;
        if (d == 0x1) {
            var max = 0x0;
            for (var j = 0x0; j < p; j++)
                max = Math[a0_0x1fdc31(0x5)](max, base[q + j][a0_0x1fdc31(0x6)]);
            for (var j = 0x0; j < p; j++) {
                while (base[q + j][a0_0x1fdc31(0x6)] < max)
                    base[q + j] += '0';
                base[q + j] += '1';
            }
        } else if (d == 0x2) {
            for (var j = 0x0; j < p; j++)
                base[q] += '1';
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < 0x5; i++)
        max = Math[a0_0x1fdc31(0x5)](max, base[i][a0_0x1fdc31(0x6)]);
    for (var i = 0x0; i < 0x5; i++) {
        while (base[i]['length'] < max)
            base[i] += '0';
    }
    var cnt = 0x0;
    for (var i = 0x0; i < max; i++) {
        var str = base['map'](v => v[i])[a0_0x1fdc31(0x7)]('');
        str = str[a0_0x1fdc31(0x8)]('11111', '')[a0_0x1fdc31(0x8)](/0/g, '');
        cnt += str[a0_0x1fdc31(0x6)];
    }
    console[a0_0x1fdc31(0x9)](cnt);
}