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
            ]['forEach'](_0x10e8ff => {
                var _0x18bcb3 = i + _0x10e8ff[0x0];
                var _0x4263da = j + _0x10e8ff[0x1];
                if ((_0x18bcb3 < 0x0 || _0x4263da < 0x0 || _0x18bcb3 >= m || _0x4263da >= n) == ![])
                    memo['push']([
                        _0x18bcb3,
                        _0x4263da
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
memo['forEach'](_0x56b715 => {
    yx[_0x56b715[0x0]][_0x56b715[0x1]] = 'b';
});
console['log'](yx['join']('')['replace'](/[^-]/g, '')['length']);