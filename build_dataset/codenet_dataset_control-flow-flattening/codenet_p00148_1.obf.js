let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
let Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; ++i) {
    let n = Arr[i];
    var ans = n % 0x27;
    if (ans == 0x0)
        ans = 0x27;
    if (ans < 0xa) {
        ans = '0' + ans;
    }
    console['log']('3C' + ans);
}