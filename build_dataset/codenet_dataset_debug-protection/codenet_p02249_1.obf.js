var a0_0x380bab = (function () {
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
    a0_0x380bab(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x26c753('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x26c753();
        }
    })();
}());
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['split'](config['newline']);
line[0x0] = line[0x0]['split']('\x20')['map'](Number);
H = line[0x0][0x0];
W = line[0x0][0x1];
field = line['slice'](0x1, 0x1 + H);
line[0x1 + H] = line[0x1 + H]['split']('\x20')['map'](Number);
R = line[0x1 + H][0x0];
C = line[0x1 + H][0x1];
pat = line['slice'](0x1 + H + 0x1, 0x1 + H + 0x1 + R);
mem = new Array(H);
for (i = 0x0; i < H; i++) {
    mem[i] = new Array(R);
    for (j = 0x0; j < R; j++) {
        mem[i][j] = {};
        k = field[i]['indexOf'](pat[j]);
        while (k !== -0x1) {
            mem[i][j][k] = !![];
            k = field[i]['indexOf'](pat[j], k + 0x1);
        }
    }
}
for (i = 0x0; i <= H - R; i++) {
    for (j = 0x0; j <= W - C; j++) {
        flag = !![];
        for (k = 0x0; k < R; k++) {
            if (!mem[i + k][k]['hasOwnProperty'](j)) {
                flag = ![];
                break;
            }
        }
        if (flag)
            console['log']('%d\x20%d', i, j);
    }
}
function a0_0x26c753(ret) {
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