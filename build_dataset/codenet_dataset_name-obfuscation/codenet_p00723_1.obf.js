var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var str = Arr['shift']();
    var arr = [];
    for (var i = 0x1; i < str['length']; i++) {
        arr['push']([
            str['slice'](0x0, i),
            str['slice'](i, str['length'])
        ]);
    }
    var obj = {};
    for (var i = 0x0; i < arr['length']; i++) {
        var A = arr[i][0x0];
        var B = arr[i][0x1];
        var a = A['split']('')['reverse']()['join']('');
        var b = B['split']('')['reverse']()['join']('');
        obj[A + B] = !![];
        obj[A + b] = !![];
        obj[a + B] = !![];
        obj[a + b] = !![];
        obj[B + A] = !![];
        obj[B + a] = !![];
        obj[b + A] = !![];
        obj[b + a] = !![];
    }
    console['log'](Object['keys'](obj)['length']);
}