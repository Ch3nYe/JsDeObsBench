var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
while (n--) {
    var ary = arr['shift']()['split']('');
    var ans = 'Yes';
    var s = '';
    ary['forEach'](function (v) {
        if (v == s)
            ans = 'No';
        s = v;
    });
    console['log'](ans);
}