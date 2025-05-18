function a0_0x5c25() {
    var _0x4b69b7 = [
        'readFileSync',
        'split',
        'shift',
        'hasOwnProperty',
        'log',
        'toFixed'
    ];
    a0_0x5c25 = function () {
        return _0x4b69b7;
    };
    return a0_0x5c25();
}
var a0_0x1e5e12 = a0_0x7fc1;
var input = require('fs')[a0_0x1e5e12(0x0)]('/dev/stdin', 'utf8');
var Arr = input['trim']()[a0_0x1e5e12(0x1)]('\x0a');
var NKTUVL = Arr[a0_0x1e5e12(0x2)]()[a0_0x1e5e12(0x1)]('\x20')['map'](Number);
var N = NKTUVL[0x0];
var K = NKTUVL[0x1];
var T = NKTUVL[0x2];
var U = NKTUVL[0x3];
function a0_0x7fc1(jVErdN, key) {
    var stringArray = a0_0x5c25();
    a0_0x7fc1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7fc1(jVErdN, key);
}
var V = NKTUVL[0x4];
var L = NKTUVL[0x5];
var time = 0x0;
var obj = {};
for (var i = 0x0; i < N; i++)
    obj[Arr['shift']() - 0x0] = !![];
var fast = 0x0;
var stock = 0x0;
for (var i = 0x0; i < L; i++) {
    var now = obj[a0_0x1e5e12(0x3)](i) ? !![] : ![];
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
console[a0_0x1e5e12(0x4)](time[a0_0x1e5e12(0x5)](0x9));