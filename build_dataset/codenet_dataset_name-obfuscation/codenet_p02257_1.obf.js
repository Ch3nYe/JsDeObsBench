var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
Arr['shift']();
Arr['sort'](function (_0x5372ab, _0x3c8368) {
    return _0x5372ab - _0x3c8368;
});
var max = Arr[Arr['length'] - 0x1];
var arr = [0x2];
for (var i = 0x3; i <= max; i = i + 0x2) {
    var a = !![];
    var sqrt = ~~Math['sqrt'](i) + 0x1;
    for (var j = 0x0; j < arr['length']; j++) {
        if (arr[j] > sqrt)
            break;
        if (i % arr[j] == 0x0) {
            a = ![];
            break;
        }
    }
    if (a)
        arr['push'](i);
}
var num = 0x0;
var f = 0x0;
for (var i = 0x0; i < Arr['length']; i++) {
    if (Arr[i] != 0x2 && Arr[i] % 0x2 == 0x0)
        continue;
    var index = arr['indexOf'](Arr[i], f);
    if (index != -0x1) {
        f = index;
        num++;
    }
}
console['log'](num);