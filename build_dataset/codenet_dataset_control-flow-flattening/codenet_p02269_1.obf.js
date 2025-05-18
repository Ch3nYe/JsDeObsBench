var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['shift']();
var obj = {};
Arr['forEach'](function (v) {
    var kIvzjA = {
        'rtRJr': 'insert',
        'oQxlk': function (x, y) {
            return x == y;
        },
        'cuRvQ': 'find',
        'dtzaO': 'yes'
    };
    var arr = v['split']('\x20');
    if (arr[0x0] == kIvzjA['rtRJr'])
        obj[arr[0x1]] = !![];
    if (kIvzjA['oQxlk'](arr[0x0], kIvzjA['cuRvQ']))
        console['log'](obj['hasOwnProperty'](arr[0x1]) ? kIvzjA['dtzaO'] : 'no');
});