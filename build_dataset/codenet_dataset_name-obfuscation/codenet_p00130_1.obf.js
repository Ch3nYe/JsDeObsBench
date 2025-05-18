var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var L = Arr['shift']();
for (var i = 0x0; i < L; i++) {
    var str = Arr[i];
    str = str['replace'](/\-\>/g, 'A');
    str = str['replace'](/\<\-/g, 'Z');
    var m = str['split']('');
    var arr = [m[0x0]];
    var n = 0x1;
    m['forEach'](function (_0x57034e) {
        if (_0x57034e == 'A')
            n++;
        else if (_0x57034e == 'Z')
            n--;
        else {
            if (n == 0x0) {
                arr['unshift'](_0x57034e);
                n = 0x1;
            }
            if (n > arr['length'])
                arr['push'](_0x57034e);
        }
    });
    console['log'](arr['join'](''));
}