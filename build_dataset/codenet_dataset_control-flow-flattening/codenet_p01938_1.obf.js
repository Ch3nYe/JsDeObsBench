var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var s = input['trim']()['split']('');
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split']('');
s = s['map'](v => abc['indexOf'](v));
var cnt = 0x0;
var memo = 0x0;
s['forEach'](v => {
    var RzCZtk = {
        'TeuFb': function (x, y) {
            return x >= y;
        }
    };
    if (RzCZtk['TeuFb'](memo, v))
        cnt++;
    memo = v;
});
console['log'](cnt);