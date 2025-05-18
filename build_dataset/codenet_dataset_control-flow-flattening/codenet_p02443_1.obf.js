var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var q = arr['shift']() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
    var uYEtOl = '3|2|1|4|0'['split']('|');
    var hISRGl = 0x0;
    while (!![]) {
        switch (uYEtOl[hISRGl++]) {
        case '0':
            a = x['concat'](y, z);
            continue;
        case '1':
            var y = a['slice'](b, e)['reverse']();
            continue;
        case '2':
            var x = a['slice'](0x0, b);
            continue;
        case '3':
            var [b, e] = arr[i]['split']('\x20')['map'](Number);
            continue;
        case '4':
            var z = a['slice'](e);
            continue;
        }
        break;
    }
}
console['log'](a['join']('\x20'));