var a0_0x418a41 = a0_0x5b9b;
process[a0_0x418a41(0x0)][a0_0x418a41(0x1)]();
function a0_0x5b9b(XJsNPc, key) {
    var stringArray = a0_0xe3ae();
    a0_0x5b9b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b9b(XJsNPc, key);
}
function a0_0xe3ae() {
    var _0x59a2b6 = [
        'stdin',
        'resume',
        'setEncoding',
        'data',
        'trim',
        'length',
        'split',
        'qxHIs',
        'log',
        'wQBtC',
        'LOOP'
    ];
    a0_0xe3ae = function () {
        return _0x59a2b6;
    };
    return a0_0xe3ae();
}
process[a0_0x418a41(0x0)][a0_0x418a41(0x2)]('utf8');
process['stdin']['on'](a0_0x418a41(0x3), function (chunk) {
    var _0x3765bc = a0_0x5b9b;
    main(chunk[_0x3765bc(0x4)]());
});
function main(chunk) {
    var _0x4d772d = a0_0x5b9b;
    var lines = chunk['split']('\x0a');
    for (var n = 0x0; n < lines[_0x4d772d(0x5)] - 0x1;) {
        var H = Number(lines[n][_0x4d772d(0x6)]('\x20')[0x0]);
        var W = Number(lines[n][_0x4d772d(0x6)]('\x20')[0x1]);
        var map = [];
        n++;
        for (var i = 0x0; i < H; i++) {
            if ('dZmsj' !== _0x4d772d(0x7)) {
                map[i] = lines[n][_0x4d772d(0x6)]('');
                n++;
            } else {
                map[i] = lines[n][_0x4d772d(0x6)]('');
                n++;
            }
        }
        console[_0x4d772d(0x8)](calc(map, 0x0, 0x0));
    }
}
function calc(map, h, w) {
    var _0x4bbafb = a0_0x5b9b;
    if (map[h][w] == '.') {
        if (_0x4bbafb(0x9) === 'faZGf') {
            var H = Number(lines[n]['split']('\x20')[0x0]);
            var W = Number(lines[n]['split']('\x20')[0x1]);
            var map = [];
            n++;
            for (var i = 0x0; i < H; i++) {
                map[i] = lines[n][_0x4bbafb(0x6)]('');
                n++;
            }
            console[_0x4bbafb(0x8)](calc(map, 0x0, 0x0));
        } else {
            return w + '\x20' + h;
        }
    }
    if (map[h][w] == '1') {
        return _0x4bbafb(0xa);
    }
    switch (map[h][w]) {
    case '>':
        map[h][w] = '1';
        return calc(map, h, w + 0x1);
    case '<':
        map[h][w] = '1';
        return calc(map, h, w - 0x1);
    case 'v':
        map[h][w] = '1';
        return calc(map, h + 0x1, w);
    case '^':
        map[h][w] = '1';
        return calc(map, h - 0x1, w);
    }
}