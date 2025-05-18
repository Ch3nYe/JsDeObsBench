function a0_0x10f9(WwgHew, key) {
    const stringArray = a0_0x3913();
    a0_0x10f9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x10f9(WwgHew, key);
}
function a0_0x3913() {
    const _0x432de0 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'log'
    ];
    a0_0x3913 = function () {
        return _0x432de0;
    };
    return a0_0x3913();
}
const a0_0x395b2a = a0_0x10f9;
let input = require('fs')['readFileSync'](a0_0x395b2a(0x0), a0_0x395b2a(0x1));
let Arr = input[a0_0x395b2a(0x2)]()[a0_0x395b2a(0x3)]('\x0a');
for (var i = 0x0; i < Arr[a0_0x395b2a(0x4)]; ++i) {
    let n = Arr[i];
    var ans = n % 0x27;
    if (ans == 0x0)
        ans = 0x27;
    if (ans < 0xa) {
        ans = '0' + ans;
    }
    console[a0_0x395b2a(0x5)]('3C' + ans);
}