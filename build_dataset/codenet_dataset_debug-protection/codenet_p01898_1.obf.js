var a0_0x4bcdd7 = (function () {
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
    a0_0x4bcdd7(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1d5c24('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1d5c24();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [m, n] = arr['shift']()['split']('\x20')['map'](Number);
var yx = [];
for (var i = 0x0; i < m; i++)
    yx['push'](arr['shift']()['split'](''));
var memo = [];
for (var i = 0x0; i < m; i++) {
    for (var j = 0x0; j < n; j++) {
        if (i == 0x0)
            memo['push']([
                i,
                j
            ]);
        if (yx[i][j] == 'o') {
            [
                [
                    0x0,
                    -0x1
                ],
                [
                    0x0,
                    0x1
                ]
            ]['forEach'](v => {
                var y = i + v[0x0];
                var x = j + v[0x1];
                if ((y < 0x0 || x < 0x0 || y >= m || x >= n) == ![])
                    memo['push']([
                        y,
                        x
                    ]);
            });
        } else if (yx[i][j] == 'x') {
            for (var ii = -0x1; ii <= 0x1; ii++)
                for (var jj = -0x1; jj <= 0x1; jj++) {
                    if (ii == 0x0 && jj == 0x0)
                        continue;
                    var y = i + ii;
                    var x = j + jj;
                    if (y < 0x0 || x < 0x0 || y >= m || x >= n)
                        continue;
                    memo['push']([
                        y,
                        x
                    ]);
                }
        }
    }
}
memo['forEach'](v => {
    yx[v[0x0]][v[0x1]] = 'b';
});
console['log'](yx['join']('')['replace'](/[^-]/g, '')['length']);
function a0_0x1d5c24(ret) {
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