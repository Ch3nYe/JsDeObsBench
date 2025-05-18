function a0_0x37f4(HRCjqv, key) {
    var stringArray = a0_0x1170();
    a0_0x37f4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37f4(HRCjqv, key);
}
function a0_0x1170() {
    var _0x121333 = [
        'log',
        'indexOf',
        'push',
        'resume',
        'stdin',
        'setEncoding',
        'utf8',
        'data',
        'end',
        'split'
    ];
    a0_0x1170 = function () {
        return _0x121333;
    };
    return a0_0x1170();
}
var a0_0x6ebe59 = a0_0x37f4;
function main() {
    var _0xe706f6 = a0_0x37f4;
    var i, j, n, m, x, len = input['length'];
    for (i = 0x0; i < len; i++) {
        n = parseInt(input[i], 0xa);
        if (n === 0x0)
            break;
        if (n % 0x2 === 0x1) {
            console[_0xe706f6(0x0)](0x0);
            continue;
        }
        m = ~~(n / 0x2);
        for (x = 0x0, j = 0x0; primes[j] <= m; j++) {
            if (primes[_0xe706f6(0x1)](n - primes[j]) !== -0x1)
                x++;
        }
        console[_0xe706f6(0x0)](x);
    }
}
var primes = function (n) {
    var _0x4f8225 = a0_0x37f4;
    var i, j, flag, primes = [0x2];
    if (n < 0x2)
        return [];
    for (i = 0x3; i <= n; i += 0x2) {
        flag = !![];
        for (j = 0x0; primes[j] < i * i; j++) {
            if (i % primes[j] == 0x0) {
                flag = ![];
                break;
            }
        }
        if (flag) {
            primes[_0x4f8225(0x2)](i);
        }
    }
    return primes;
}(0xc350);
var input = '';
process['stdin'][a0_0x6ebe59(0x3)]();
process[a0_0x6ebe59(0x4)][a0_0x6ebe59(0x5)](a0_0x6ebe59(0x6));
process[a0_0x6ebe59(0x4)]['on'](a0_0x6ebe59(0x7), function (chunk) {
    input += chunk;
});
process[a0_0x6ebe59(0x4)]['on'](a0_0x6ebe59(0x8), function () {
    var _0x564d95 = a0_0x37f4;
    input = input[_0x564d95(0x9)]('\x0a');
    main();
});