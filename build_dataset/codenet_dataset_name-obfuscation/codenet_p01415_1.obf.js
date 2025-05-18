var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var NKTUVL = Arr['shift']()['split']('\x20')['map'](Number);
var N = NKTUVL[0x0];
var K = NKTUVL[0x1];
var T = NKTUVL[0x2];
var U = NKTUVL[0x3];
var V = NKTUVL[0x4];
var L = NKTUVL[0x5];
var time = 0x0;
var obj = {};
for (var i = 0x0; i < N; i++)
    obj[Arr['shift']() - 0x0] = !![];
var fast = 0x0;
var stock = 0x0;
for (var i = 0x0; i < L; i++) {
    var now = obj['hasOwnProperty'](i) ? !![] : ![];
    if (fast == 0x0 && now == !![]) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        continue;
    }
    if (fast == 0x0 && now == ![] && stock == 0x0) {
        time += 0x1 / U;
        continue;
    }
    if (fast == 0x0 && now == ![] && stock > 0x0) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        stock--;
        continue;
    }
    if (fast > 0x0 && now == ![]) {
        time += 0x1 / V;
        fast--;
        continue;
    }
    if (fast > 0x0 && now == !![] && stock + 0x1 <= K) {
        time += 0x1 / V;
        fast--;
        stock++;
        continue;
    }
    if (fast > 0x0 && now == !![] && stock + 0x1 > K) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        continue;
    }
}
console['log'](time['toFixed'](0x9));