var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nf = arr['shift']()['split']('\x20')['map'](Number);
var f = nf[0x1];
var obj = {};
arr = arr['map'](function (v) {
    v = v['split']('\x20');
    v['shift']();
    v['forEach'](function (V) {
        obj[V] = {};
    });
    return v;
});
for (var k in obj) {
    for (var K in obj) {
        obj[k][K] = 0x0;
    }
}
arr['forEach'](function (v) {
    var idVIsC = {
        'aptHu': function (x, y) {
            return x < y;
        }
    };
    for (var i = 0x0; idVIsC['aptHu'](i, v['length']); i++) {
        for (var j = 0x0; idVIsC['aptHu'](j, v['length']); j++) {
            obj[v[i]][v[j]]++;
        }
    }
});
var ans = [];
for (var k in obj) {
    for (var K in obj) {
        obj[K][k] = 0x0;
        if (obj[k][K] >= f) {
            ans['push']([
                k,
                K
            ]['sort']()['join']('\x20'));
        }
    }
}
ans['sort']();
console['log'](ans['length']);
if (ans['length'] != 0x0)
    console['log'](ans['join']('\x0a'));