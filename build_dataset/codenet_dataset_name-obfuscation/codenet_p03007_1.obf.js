log = console['log'];
var stdin = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
var lines = stdin['split']('\x0a')['filter'](_0x40e23b => _0x40e23b !== '')['map'](_0x39286c => _0x39286c['split']('\x20')['map'](Number));
var N = lines[0x0];
var A = lines[0x1];
var processList = [];
A['sort']((_0x54baee, _0xa965a8) => _0x54baee - _0xa965a8);
var plusList = [];
var minusList = [];
plusList['push'](A['pop']());
minusList['push'](A['shift']());
A['forEach'](_0x2e568c => {
    _0x2e568c >= 0x0 ? plusList['push'](_0x2e568c) : minusList['push'](_0x2e568c);
});
var tmp = minusList['pop']();
for (var i = 0x0; i < plusList['length'] - 0x1; i++) {
    var plus = plusList['pop']();
    processList['push'](tmp + '\x20' + plus);
    tmp = tmp - plus;
}
var lastplus = plusList['pop']();
for (var i = 0x0; i < minusList['length']; i++) {
    var minus = minusList['pop']();
    processList['push'](lastplus + '\x20' + minus);
    lastplus = lastplus - minus;
}
processList['push'](lastplus + '\x20' + tmp);
log(lastplus - tmp);
processList['forEach'](_0x2a161f => log(_0x2a161f));