var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
while (n--) {
    var ary = arr['shift']()['split']('');
    var ans = 'Yes';
    var s = '';
    ary['forEach'](function (_0x1871ef) {
        if (_0x1871ef == s)
            ans = 'No';
        s = _0x1871ef;
    });
    console['log'](ans);
}