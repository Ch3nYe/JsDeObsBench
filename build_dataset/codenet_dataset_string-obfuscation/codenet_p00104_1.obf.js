var a0_0x5fb444 = a0_0x4db0;
(function (stringArrayFunction, comparisonValue) {
    var _0x491599 = a0_0x4db0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x491599(0x194)) / 0x1 * (parseInt(_0x491599(0x191)) / 0x2) + parseInt(_0x491599(0x197)) / 0x3 + -parseInt(_0x491599(0x190)) / 0x4 * (parseInt(_0x491599(0x196)) / 0x5) + parseInt(_0x491599(0x18f)) / 0x6 + -parseInt(_0x491599(0x18a)) / 0x7 * (parseInt(_0x491599(0x195)) / 0x8) + parseInt(_0x491599(0x19c)) / 0x9 * (-parseInt(_0x491599(0x18d)) / 0xa) + parseInt(_0x491599(0x193)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3174, 0x2bbc6));
process[a0_0x5fb444(0x18e)][a0_0x5fb444(0x19d)]();
function a0_0x3174() {
    var _0xd76c71 = [
        '3204905xRAaDj',
        '609HzDiyz',
        '9544LgAhsC',
        '2195xdpbBO',
        '137868azMROA',
        'split',
        'LOOP',
        'data',
        'utf8',
        '450315ozCBTe',
        'resume',
        '1547dsWHVb',
        'log',
        'trim',
        '30WJpWNZ',
        'stdin',
        '2112570ZQCUip',
        '2372VvTVRP',
        '538oqJFyE',
        'setEncoding'
    ];
    a0_0x3174 = function () {
        return _0xd76c71;
    };
    return a0_0x3174();
}
function a0_0x4db0(QveLCt, key) {
    var stringArray = a0_0x3174();
    a0_0x4db0 = function (index, key) {
        index = index - 0x18a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4db0(QveLCt, key);
}
process['stdin'][a0_0x5fb444(0x192)](a0_0x5fb444(0x19b));
process[a0_0x5fb444(0x18e)]['on'](a0_0x5fb444(0x19a), function (chunk) {
    var _0x3868d9 = a0_0x5fb444;
    main(chunk[_0x3868d9(0x18c)]());
});
function main(chunk) {
    var _0x6771a3 = a0_0x5fb444;
    var lines = chunk[_0x6771a3(0x198)]('\x0a');
    for (var n = 0x0; n < lines['length'] - 0x1;) {
        var H = Number(lines[n][_0x6771a3(0x198)]('\x20')[0x0]);
        var W = Number(lines[n][_0x6771a3(0x198)]('\x20')[0x1]);
        var map = [];
        n++;
        for (var i = 0x0; i < H; i++) {
            map[i] = lines[n][_0x6771a3(0x198)]('');
            n++;
        }
        console[_0x6771a3(0x18b)](calc(map, 0x0, 0x0));
    }
}
function calc(map, h, w) {
    var _0x1fc7a4 = a0_0x5fb444;
    if (map[h][w] == '.') {
        return w + '\x20' + h;
    }
    if (map[h][w] == '1') {
        return _0x1fc7a4(0x199);
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