var a0_0x399b3e = (function () {
    var firstCall = !![];
    return function (context, fn) {
        var rfn = firstCall ? function () {
            if (fn) {
                var res = fn['apply'](context, arguments);
                fn = null;
                return res;
            }
        } : function () {
        };
        firstCall = ![];
        return rfn;
    };
}());
(function () {
    a0_0x399b3e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5633b5('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5633b5();
        }
    })();
}());
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
    input = input['split']('\x0a');
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
});
function a0_0x5633b5(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}