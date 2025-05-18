var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var m = Arr['shift']() - 0x0;
var n = Arr['shift']() - 0x0;
var M = [];
var check = [];
for (var i = 0x0; i < m; i++)
    M[i] = [];
for (var i = 0x0; i < m; i++)
    check[i] = ![];
for (var i = 0x0; i < n; i++) {
    var v = Arr['shift']()['split']('\x20')['map'](Number);
    M[v[0x0] - 0x1]['push'](v[0x1] - 0x1);
}
var L = [];
for (var i = 0x0; i < m; i++) {
    visit(i);
}
function visit(_0x4698a2) {
    if (check[_0x4698a2] == !![])
        return;
    else
        check[_0x4698a2] = !![];
    M[_0x4698a2]['forEach'](function (_0x216d17) {
        visit(_0x216d17);
    });
    L['push'](_0x4698a2);
}
L['reverse']();
L['forEach'](function (_0x2882b1) {
    console['log'](_0x2882b1 + 0x1);
});