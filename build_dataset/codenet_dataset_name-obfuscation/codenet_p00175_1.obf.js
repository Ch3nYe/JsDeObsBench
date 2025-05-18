var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    if (Arr[i] == -0x1)
        break;
    console['log'](Arr[i]['toString'](0x4));
}