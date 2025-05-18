function knapsack() {
    var _0x3b95ce = [];
    for (var _0x2830e9 = 0x0; _0x2830e9 <= N; _0x2830e9++)
        _0x3b95ce[_0x2830e9] = [];
    for (var _0x2830e9 = 0x0; _0x2830e9 <= W; _0x2830e9++)
        _0x3b95ce[0x0][_0x2830e9] = 0x0;
    for (var _0x2830e9 = 0x0; _0x2830e9 <= N; _0x2830e9++)
        _0x3b95ce[_0x2830e9][0x0] = 0x0;
    for (var _0x2830e9 = 0x1; _0x2830e9 <= N; _0x2830e9++) {
        for (var _0x3bbe83 = 0x1; _0x3bbe83 <= W; _0x3bbe83++) {
            if (items[_0x2830e9]['w'] <= W) {
                if (items[_0x2830e9]['v'] + _0x3b95ce[_0x2830e9 - 0x1][_0x3bbe83 - items[_0x2830e9]['w']] > _0x3b95ce[_0x2830e9 - 0x1][_0x3bbe83]) {
                    _0x3b95ce[_0x2830e9][_0x3bbe83] = items[_0x2830e9]['v'] + _0x3b95ce[_0x2830e9 - 0x1][_0x3bbe83 - items[_0x2830e9]['w']];
                } else {
                    _0x3b95ce[_0x2830e9][_0x3bbe83] = _0x3b95ce[_0x2830e9 - 0x1][_0x3bbe83];
                }
            } else {
                _0x3b95ce[_0x2830e9][_0x3bbe83] = _0x3b95ce[_0x2830e9 - 0x1][_0x3bbe83];
            }
        }
    }
    return _0x3b95ce[N][W];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var nW = Arr['shift']()['split']('\x20')['map'](Number);
var n = nW[0x0];
var W = nW[0x1];
var N = 0x0;
var items = [null];
for (var i = 0x1; i <= n; i++) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var k = 0x1;
    do {
        items['push']({
            'v': arr[0x0] * k,
            'w': arr[0x1] * k
        });
        N++;
        k++;
    } while (arr[0x1] * k <= W);
}
var max = knapsack();
console['log'](max);