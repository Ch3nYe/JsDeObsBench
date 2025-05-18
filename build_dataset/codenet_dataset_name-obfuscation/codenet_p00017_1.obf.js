var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var strA = input['trim']();
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
for (var i = 0x0; i < 0x1a; i++) {
    var strB = strA['replace'](/[a-z]/g, function (_0xadb283) {
        return abc[(abc['indexOf'](_0xadb283) + i) % 0x1a];
    });
    if (strB['match'](/the|this|that/))
        break;
}
console['log'](strB);