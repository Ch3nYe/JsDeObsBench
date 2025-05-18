var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var sum = n != 0x1 ? 0x1 : 0x0;
    var sqrt = Math['sqrt'](n);
    for (var i = 0x2; i < sqrt; i++) {
        if (n % i == 0x0)
            sum += i + n / i;
    }
    if (n % sqrt == 0x0 && sqrt != 0x1)
        sum += sqrt;
    var ans;
    if (n == sum)
        ans = 'perfect\x20number';
    else if (n > sum)
        ans = 'deficient\x20number';
    else if (n < sum)
        ans = 'abundant\x20number';
    console['log'](ans);
}