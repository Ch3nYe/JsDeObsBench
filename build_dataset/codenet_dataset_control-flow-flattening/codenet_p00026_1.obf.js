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
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var KnZJeA = {
        'BSvQg': '6|5|2|1|4|3|0',
        'qYjOi': function (x, y) {
            return x < y;
        },
        'vnagO': function (x, y) {
            return x < y;
        },
        'pTnSV': function (x, y) {
            return x == y;
        },
        'pgnmf': '2|1|4|3|0',
        'ZRKBf': function (x, y) {
            return x + y;
        },
        'MlQGX': function (callee, param1) {
            return callee(param1);
        },
        'zpxXZ': function (x, y) {
            return x - y;
        },
        'Tarxj': function (x, y) {
            return x + y;
        }
    };
    var FDfRXw = KnZJeA['BSvQg']['split']('|');
    var VfyRMg = 0x0;
    while (!![]) {
        switch (FDfRXw[VfyRMg++]) {
        case '0':
            console['log'](m);
            continue;
        case '1':
            b = 0x0;
            continue;
        case '2':
            m = 0x0;
            continue;
        case '3':
            console['log'](b);
            continue;
        case '4':
            for (var i = 0x2; KnZJeA['qYjOi'](i, 0xc); i++) {
                for (var j = 0x2; KnZJeA['vnagO'](j, 0xc); j++) {
                    if (KnZJeA['pTnSV'](mem[i][j], 0x0))
                        b++;
                    m = Math['max'](m, mem[i][j]);
                }
            }
            continue;
        case '5':
            for (var i = 0x0; i < input['length']; i++) {
                var imbDmA = KnZJeA['pgnmf']['split']('|');
                var lYbfze = 0x0;
                while (!![]) {
                    switch (imbDmA[lYbfze++]) {
                    case '0':
                        for (var j in dx[v])
                            mem[x + dx[v][j]][KnZJeA['ZRKBf'](y, dy[v][j])]++;
                        continue;
                    case '1':
                        x = KnZJeA['MlQGX'](Number, s[0x0]) + 0x2;
                        continue;
                    case '2':
                        s = input[i]['split'](',');
                        continue;
                    case '3':
                        v = KnZJeA['zpxXZ'](Number(s[0x2]), 0x1);
                        continue;
                    case '4':
                        y = KnZJeA['Tarxj'](KnZJeA['MlQGX'](Number, s[0x1]), 0x2);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '6':
            input = input['split']('\x0a');
            continue;
        }
        break;
    }
});