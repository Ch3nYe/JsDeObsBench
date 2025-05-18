var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var a = arr['shift']()['split']('');
    if (a['join']('') == '-')
        break;
    var b = arr['shift']()['split']('');
    var c = arr['shift']()['split']('');
    var obj = {};
    a['forEach'](function (_0x5c3e5a) {
        obj[_0x5c3e5a] = !![];
    });
    var str = '';
    var m = '';
    c['forEach'](function (_0x152fce) {
        if (obj['hasOwnProperty'](_0x152fce)) {
            if (m == '') {
                m = a['shift']();
                m = a['shift']();
            } else {
                m = a['shift']();
            }
        } else {
            while (!![]) {
                if (m == _0x152fce) {
                    m = a['shift']();
                    break;
                } else {
                    str += m;
                    m = b['shift']();
                }
            }
        }
    });
    str += m;
    str += b['join']('');
    console['log'](str);
}