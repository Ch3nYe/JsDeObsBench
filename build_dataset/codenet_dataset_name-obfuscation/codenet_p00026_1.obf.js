var input = '';
var mem = new Array(0xe);
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
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x372827) {
    input += _0x372827;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    for (var _0x4e7368 = 0x0; _0x4e7368 < input['length']; _0x4e7368++) {
        s = input[_0x4e7368]['split'](',');
        x = Number(s[0x0]) + 0x2;
        y = Number(s[0x1]) + 0x2;
        v = Number(s[0x2]) - 0x1;
        for (var _0x4ee6b2 in dx[v])
            mem[x + dx[v][_0x4ee6b2]][y + dy[v][_0x4ee6b2]]++;
    }
    m = 0x0;
    b = 0x0;
    for (var _0x4e7368 = 0x2; _0x4e7368 < 0xc; _0x4e7368++) {
        for (var _0x4ee6b2 = 0x2; _0x4ee6b2 < 0xc; _0x4ee6b2++) {
            if (mem[_0x4e7368][_0x4ee6b2] == 0x0)
                b++;
            m = Math['max'](m, mem[_0x4e7368][_0x4ee6b2]);
        }
    }
    console['log'](b);
    console['log'](m);
});