var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var abc = [
    [],
    [],
    []
];
var obj = {};
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    abc[Math['floor'](i / 0x8)]['push'](arr[0x1]);
    obj[arr[0x1]] = arr[0x0];
}
for (var i = 0x0; i < 0x3; i++)
    abc[i]['sort'](function (a, b) {
        var OIBmEW = {
            'xklSq': function (x, y) {
                return x - y;
            }
        };
        return OIBmEW['xklSq'](a, b);
    });
console['log'](obj[abc[0x0][0x0]] + '\x20' + abc[0x0][0x0]['toFixed'](0x2));
console['log'](obj[abc[0x0][0x1]] + '\x20' + abc[0x0][0x1]['toFixed'](0x2));
console['log'](obj[abc[0x1][0x0]] + '\x20' + abc[0x1][0x0]['toFixed'](0x2));
console['log'](obj[abc[0x1][0x1]] + '\x20' + abc[0x1][0x1]['toFixed'](0x2));
console['log'](obj[abc[0x2][0x0]] + '\x20' + abc[0x2][0x0]['toFixed'](0x2));
console['log'](obj[abc[0x2][0x1]] + '\x20' + abc[0x2][0x1]['toFixed'](0x2));
var d = [];
for (var i = 0x0; i < 0x3; i++)
    d['push'](abc[i][0x2]);
d['sort'](function (a, b) {
    var eaKMBz = {
        'whUxI': function (x, y) {
            return x - y;
        }
    };
    return eaKMBz['whUxI'](a, b);
});
console['log'](obj[d[0x0]] + '\x20' + d[0x0]['toFixed'](0x2));
console['log'](obj[d[0x1]] + '\x20' + d[0x1]['toFixed'](0x2));