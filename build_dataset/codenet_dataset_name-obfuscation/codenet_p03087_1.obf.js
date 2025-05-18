var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['split']('\x0a');
var nq = arr[0x0]['split']('\x20')['map'](Number);
var str = arr[0x1];
var a = [
    0x0,
    0x0
];
var cnt = 0x0;
for (var i = 0x1; i < str['length']; i++) {
    if (str[i] == 'C' && str[i - 0x1] == 'A')
        cnt++;
    a['push'](cnt);
}
var ans = [];
for (var i = 0x2, len = nq[0x1] + 0x2; i < len; i++) {
    var lr = arr[i]['split']('\x20');
    ans['push'](a[lr[0x1] - 0x0] - a[lr[0x0] - 0x0]);
}
console['log'](ans['join']('\x0a'));