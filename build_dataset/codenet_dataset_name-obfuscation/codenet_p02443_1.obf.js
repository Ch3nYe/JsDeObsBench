var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var q = arr['shift']() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
    var [b, e] = arr[i]['split']('\x20')['map'](Number);
    var x = a['slice'](0x0, b);
    var y = a['slice'](b, e)['reverse']();
    var z = a['slice'](e);
    a = x['concat'](y, z);
}
console['log'](a['join']('\x20'));