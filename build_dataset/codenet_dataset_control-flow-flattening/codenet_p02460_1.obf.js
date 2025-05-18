var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var q = arr['shift']() - 0x0;
var str = '';
var map = new Map();
for (var i = 0x0; i < q; i++) {
    var [a, b, c] = arr[i]['split']('\x20');
    if (a == '0')
        map['set'](b, c);
    else if (a == '1')
        str += (map['has'](b) ? map['get'](b) : '0') + '\x0a';
    else
        map['delete'](b);
}
console['log'](str['trim']());