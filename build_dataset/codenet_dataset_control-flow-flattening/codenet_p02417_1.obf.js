var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['trim']();
input = input['toLowerCase']();
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
var obj = {};
for (var i = 0x0; i < abc['length']; i++)
    obj[abc[i]] = 0x0;
input = input['replace'](/[a-z]/g, function (str) {
    obj[str]++;
    return str;
});
abc['forEach'](function (v, i) {
    var OQfOAu = {
        'xUwVf': function (x, y) {
            return x + y;
        },
        'KoLkZ': '\x20:\x20'
    };
    console['log'](OQfOAu['xUwVf'](OQfOAu['xUwVf'](v, OQfOAu['KoLkZ']), obj[v]));
});