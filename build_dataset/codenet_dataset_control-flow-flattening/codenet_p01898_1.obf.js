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
                var mfjaLr = {
                    'ihEbz': function (x, y) {
                        return x == y;
                    },
                    'pAtvV': function (x, y) {
                        return x < y;
                    },
                    'HyFBz': function (x, y) {
                        return x >= y;
                    }
                };
                var y = i + v[0x0];
                var x = j + v[0x1];
                if (mfjaLr['ihEbz'](mfjaLr['pAtvV'](y, 0x0) || x < 0x0 || mfjaLr['HyFBz'](y, m) || x >= n, ![]))
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