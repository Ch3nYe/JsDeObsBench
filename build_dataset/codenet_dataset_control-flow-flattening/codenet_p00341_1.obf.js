var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x20')['map'](Number);
arr['sort'](function (a, b) {
    var ffUgED = {
        'Fsogm': function (x, y) {
            return x - y;
        }
    };
    return ffUgED['Fsogm'](a, b);
});
var sum = 0x0;
if (arr[0x0] == arr[0x1] && arr[0x1] == arr[0x2] && arr[0x2] == arr[0x3])
    sum++;
if (arr[0x0 + 0x4] == arr[0x1 + 0x4] && arr[0x1 + 0x4] == arr[0x2 + 0x4] && arr[0x2 + 0x4] == arr[0x3 + 0x4])
    sum++;
if (arr[0x0 + 0x8] == arr[0x1 + 0x8] && arr[0x1 + 0x8] == arr[0x2 + 0x8] && arr[0x2 + 0x8] == arr[0x3 + 0x8])
    sum++;
console['log'](sum == 0x3 ? 'yes' : 'no');