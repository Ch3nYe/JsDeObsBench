var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var n = 0x0;
var arr = [
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0
];
for (var i = 0x0; i < Arr['length']; i++) {
    if (n == 0x0) {
        if (i != 0x0)
            arr['forEach'](function (_0x22dc3b) {
                console['log'](_0x22dc3b);
            });
        if (Arr[i] == 0x0)
            break;
        n = Arr[i];
        arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
    } else {
        n--;
        if (Arr[i] >= 0x3c)
            arr[0x6]++;
        else if (Arr[i] >= 0x32)
            arr[0x5]++;
        else if (Arr[i] >= 0x28)
            arr[0x4]++;
        else if (Arr[i] >= 0x1e)
            arr[0x3]++;
        else if (Arr[i] >= 0x14)
            arr[0x2]++;
        else if (Arr[i] >= 0xa)
            arr[0x1]++;
        else
            arr[0x0]++;
    }
}