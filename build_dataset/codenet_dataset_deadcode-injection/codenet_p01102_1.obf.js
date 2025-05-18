var a0_0x431068 = a0_0x136f;
var input = require('fs')[a0_0x431068(0x0)](a0_0x431068(0x1), a0_0x431068(0x2));
var arr = input[a0_0x431068(0x3)]()['split']('\x0a');
while (!![]) {
    var a = arr[a0_0x431068(0x4)]();
    if (a == '.')
        break;
    var b = arr[a0_0x431068(0x4)]();
    var memo = [];
    var aa = a[a0_0x431068(0x5)](/".*?"/g, function (s) {
        memo['push'](s);
        return '\x22';
    });
    var cnt = 0x0;
    var bb = b[a0_0x431068(0x5)](/".*?"/g, function (s) {
        if (s != memo['shift']())
            cnt++;
        return '\x22';
    });
    if (aa == bb && cnt == 0x0)
        console[a0_0x431068(0x6)](a0_0x431068(0x7));
    else if (aa == bb && cnt == 0x1)
        console[a0_0x431068(0x6)]('CLOSE');
    else if (aa != bb || aa == bb && cnt > 0x1)
        console[a0_0x431068(0x6)](a0_0x431068(0x8));
}
function a0_0x136f(TYGMKW, key) {
    var stringArray = a0_0x14ae();
    a0_0x136f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x136f(TYGMKW, key);
}
function a0_0x14ae() {
    var _0x301b1b = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'replace',
        'log',
        'IDENTICAL',
        'DIFFERENT'
    ];
    a0_0x14ae = function () {
        return _0x301b1b;
    };
    return a0_0x14ae();
}