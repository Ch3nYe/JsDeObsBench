x = require('fs')['readFileSync']('/dev/stdin', 'utf8');
y = x['trim']()['split']('\x0a');
while (!![]) {
    if (y['length'] == 0x0)
        break;
    var z = y['shift']()['split']('\x20');
    var s = [];
    z['forEach'](function (_0x24561e) {
        if (/\d/['test'](_0x24561e)) {
            s['unshift'](_0x24561e - 0x0);
        } else {
            a = s['shift']();
            b = s['shift']();
            if (_0x24561e == '+')
                s['unshift'](b + a);
            if (_0x24561e == '-')
                s['unshift'](b - a);
            if (_0x24561e == '*')
                s['unshift'](b * a);
            if (_0x24561e == '/')
                s['unshift'](b / a);
        }
    });
    console['log'](s[0x0]['toFixed'](0x6));
}