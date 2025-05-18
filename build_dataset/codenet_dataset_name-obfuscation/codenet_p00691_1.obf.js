var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var z = arr['shift']() - 0x0;
    if (z == 0x0)
        break;
    var zzz = z * z * z;
    var ary = [];
    for (var i = z - 0x1; i > 0x0; i--) {
        for (var j = i; j > 0x0; j--) {
            var x = zzz - i * i * i - j * j * j;
            if (x > 0x0)
                ary['push'](x);
        }
    }
    console['log'](Math['min']['apply'](null, ary));
}