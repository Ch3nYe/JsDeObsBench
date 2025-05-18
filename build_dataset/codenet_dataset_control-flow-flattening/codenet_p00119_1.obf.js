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
function visit(x) {
    var mXkAlw = {
        'Hvbcu': function (callee, param1) {
            return callee(param1);
        },
        'ECeqF': function (x, y) {
            return x == y;
        }
    };
    if (mXkAlw['ECeqF'](check[x], !![]))
        return;
    else
        check[x] = !![];
    M[x]['forEach'](function (v) {
        mXkAlw['Hvbcu'](visit, v);
    });
    L['push'](x);
}
L['reverse']();
L['forEach'](function (v) {
    console['log'](v + 0x1);
});