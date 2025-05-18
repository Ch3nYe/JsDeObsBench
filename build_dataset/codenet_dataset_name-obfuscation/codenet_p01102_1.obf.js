var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var a = arr['shift']();
    if (a == '.')
        break;
    var b = arr['shift']();
    var memo = [];
    var aa = a['replace'](/".*?"/g, function (_0x4145c0) {
        memo['push'](_0x4145c0);
        return '\x22';
    });
    var cnt = 0x0;
    var bb = b['replace'](/".*?"/g, function (_0x39f6c9) {
        if (_0x39f6c9 != memo['shift']())
            cnt++;
        return '\x22';
    });
    if (aa == bb && cnt == 0x0)
        console['log']('IDENTICAL');
    else if (aa == bb && cnt == 0x1)
        console['log']('CLOSE');
    else if (aa != bb || aa == bb && cnt > 0x1)
        console['log']('DIFFERENT');
}