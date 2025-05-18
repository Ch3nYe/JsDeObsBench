function a0_0x490f(dgWlth, key) {
    var stringArray = a0_0x2deb();
    a0_0x490f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x490f(dgWlth, key);
}
var a0_0x3c9168 = a0_0x490f;
var readable = process[a0_0x3c9168(0x0)];
readable[a0_0x3c9168(0x1)]();
readable[a0_0x3c9168(0x2)](a0_0x3c9168(0x3));
function a0_0x2deb() {
    var _0x110d20 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf-8',
        'data',
        'push',
        'log'
    ];
    a0_0x2deb = function () {
        return _0x110d20;
    };
    return a0_0x2deb();
}
readable['on'](a0_0x3c9168(0x4), function (chunk) {
    var _0x433e1b = a0_0x490f;
    var n = parseInt(chunk);
    var i = 0x1;
    var output = [];
    do {
        var x = i;
        if (0x0 == x % 0x3) {
            output[_0x433e1b(0x5)]('\x20' + i);
        } else {
            do {
                if (0x3 == x % 0xa) {
                    output[_0x433e1b(0x5)]('\x20' + i);
                    break;
                } else {
                    x /= 0xa;
                }
            } while (x);
        }
    } while (++i <= n);
    console[_0x433e1b(0x6)](output['join'](''));
});