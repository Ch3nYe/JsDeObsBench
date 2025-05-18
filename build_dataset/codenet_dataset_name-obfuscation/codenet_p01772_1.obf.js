var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var str = input['trim']();
var a = ![];
var ans = '';
for (var i = 0x0; i < str['length']; i++) {
    if (str[i] == 'A')
        a = !![];
    if (str[i] == 'Z' && a == !![]) {
        a = ![];
        ans += 'AZ';
    }
}
if (ans == '')
    ans = -0x1;
console['log'](ans);