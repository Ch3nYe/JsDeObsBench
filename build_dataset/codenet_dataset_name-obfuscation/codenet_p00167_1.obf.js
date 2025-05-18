var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        var x = Arr['shift']() - 0x0;
        arr['push'](x);
    }
    var L = 0x1;
    var cnt = 0x0;
    while (!![]) {
        if (arr['length'] == L)
            break;
        for (var i = 0x0; i < arr['length'] - L; i++) {
            var memo = arr[i];
            if (arr[i] > arr[i + 0x1]) {
                cnt++;
                arr[i] = arr[i + 0x1];
                arr[i + 0x1] = memo;
            }
        }
        L++;
    }
    console['log'](cnt);
}