var a0_0x3e1099 = a0_0x396c;
(function (stringArrayFunction, comparisonValue) {
    var _0x3f7b74 = a0_0x396c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3f7b74(0x15b)) / 0x1 + -parseInt(_0x3f7b74(0x156)) / 0x2 * (parseInt(_0x3f7b74(0x15c)) / 0x3) + -parseInt(_0x3f7b74(0x161)) / 0x4 + -parseInt(_0x3f7b74(0x15e)) / 0x5 + parseInt(_0x3f7b74(0x155)) / 0x6 + -parseInt(_0x3f7b74(0x152)) / 0x7 * (-parseInt(_0x3f7b74(0x159)) / 0x8) + -parseInt(_0x3f7b74(0x158)) / 0x9 * (-parseInt(_0x3f7b74(0x162)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x56b2, 0x5b35c));
var input = '';
var mem = new Array(0xe);
for (var i = 0x0; i < 0xe; i++) {
    mem[i] = new Array(0xe);
    for (var j = 0x0; j < 0xe; j++)
        mem[i][j] = 0x0;
}
function a0_0x56b2() {
    var _0x3d2926 = [
        'utf8',
        '2481320CxrBpc',
        '20TEDHnZ',
        'max',
        'log',
        'data',
        '889ofCEbM',
        'setEncoding',
        'split',
        '2080566EToYWt',
        '498KsAukp',
        'resume',
        '1662237gbRagn',
        '40168nXFZnf',
        'stdin',
        '529771lQEXFz',
        '4461cYqIdN',
        'end',
        '2596980mWlEIY',
        'length'
    ];
    a0_0x56b2 = function () {
        return _0x3d2926;
    };
    return a0_0x56b2();
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
process['stdin'][a0_0x3e1099(0x157)]();
process[a0_0x3e1099(0x15a)][a0_0x3e1099(0x153)](a0_0x3e1099(0x160));
process['stdin']['on'](a0_0x3e1099(0x151), function (chunk) {
    input += chunk;
});
function a0_0x396c(qCjyxu, key) {
    var stringArray = a0_0x56b2();
    a0_0x396c = function (index, key) {
        index = index - 0x150;
        var value = stringArray[index];
        return value;
    };
    return a0_0x396c(qCjyxu, key);
}
process[a0_0x3e1099(0x15a)]['on'](a0_0x3e1099(0x15d), function () {
    var _0xa01956 = a0_0x3e1099;
    input = input[_0xa01956(0x154)]('\x0a');
    for (var i = 0x0; i < input[_0xa01956(0x15f)]; i++) {
        s = input[i][_0xa01956(0x154)](',');
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
            m = Math[_0xa01956(0x163)](m, mem[i][j]);
        }
    }
    console[_0xa01956(0x150)](b);
    console['log'](m);
});