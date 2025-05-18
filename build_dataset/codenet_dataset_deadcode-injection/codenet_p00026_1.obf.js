function a0_0x20fa(FSDCzV, key) {
    var stringArray = a0_0x4ddc();
    a0_0x20fa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x20fa(FSDCzV, key);
}
var a0_0x1994b2 = a0_0x20fa;
var input = '';
var mem = new Array(0xe);
function a0_0x4ddc() {
    var _0x210966 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'split',
        'length',
        'LmveW',
        'FGExj',
        'log'
    ];
    a0_0x4ddc = function () {
        return _0x210966;
    };
    return a0_0x4ddc();
}
for (var i = 0x0; i < 0xe; i++) {
    mem[i] = new Array(0xe);
    for (var j = 0x0; j < 0xe; j++)
        mem[i][j] = 0x0;
}
var dx = [
    [
        0x0,
        -0x1,
        0x0,
        0x1,
        0x0
    ],
    [
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x0,
        0x1
    ],
    [
        0x0,
        -0x1,
        0x0,
        -0x1,
        -0x2,
        -0x1,
        0x0,
        0x1,
        0x2,
        -0x1,
        0x0,
        0x1,
        0x0
    ]
];
var dy = [
    [
        -0x1,
        0x0,
        0x0,
        0x0,
        0x1
    ],
    [
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1
    ],
    [
        -0x2,
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1,
        0x2
    ]
];
process[a0_0x1994b2(0x0)][a0_0x1994b2(0x1)]();
process[a0_0x1994b2(0x0)][a0_0x1994b2(0x2)](a0_0x1994b2(0x3));
process[a0_0x1994b2(0x0)]['on'](a0_0x1994b2(0x4), function (chunk) {
    input += chunk;
});
process[a0_0x1994b2(0x0)]['on']('end', function () {
    var _0x1193f1 = a0_0x20fa;
    input = input[_0x1193f1(0x5)]('\x0a');
    for (var i = 0x0; i < input[_0x1193f1(0x6)]; i++) {
        s = input[i][_0x1193f1(0x5)](',');
        x = Number(s[0x0]) + 0x2;
        y = Number(s[0x1]) + 0x2;
        v = Number(s[0x2]) - 0x1;
        for (var j in dx[v])
            mem[x + dx[v][j]][y + dy[v][j]]++;
    }
    m = 0x0;
    b = 0x0;
    for (var i = 0x2; i < 0xc; i++) {
        if (_0x1193f1(0x7) === _0x1193f1(0x8)) {
            input = input[_0x1193f1(0x5)]('\x0a');
            for (var i = 0x0; i < input['length']; i++) {
                s = input[i]['split'](',');
                x = Number(s[0x0]) + 0x2;
                y = Number(s[0x1]) + 0x2;
                v = Number(s[0x2]) - 0x1;
                for (var j in dx[v])
                    mem[x + dx[v][j]][y + dy[v][j]]++;
            }
            m = 0x0;
            b = 0x0;
            for (var i = 0x2; i < 0xc; i++) {
                for (var j = 0x2; j < 0xc; j++) {
                    if (mem[i][j] == 0x0)
                        b++;
                    m = Math['max'](m, mem[i][j]);
                }
            }
            console['log'](b);
            console['log'](m);
        } else {
            for (var j = 0x2; j < 0xc; j++) {
                if (mem[i][j] == 0x0)
                    b++;
                m = Math['max'](m, mem[i][j]);
            }
        }
    }
    console[_0x1193f1(0x9)](b);
    console[_0x1193f1(0x9)](m);
});