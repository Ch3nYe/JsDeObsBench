var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['trim']();
input = input['toLowerCase']();
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
var obj = {};
for (var i = 0x0; i < abc['length']; i++)
    obj[abc[i]] = 0x0;
input = input['replace'](/[a-z]/g, function (_0x34e03c) {
    obj[_0x34e03c]++;
    return _0x34e03c;
});
abc['forEach'](function (_0x25319d, _0x15fa6c) {
    console['log'](_0x25319d + '\x20:\x20' + obj[_0x25319d]);
});