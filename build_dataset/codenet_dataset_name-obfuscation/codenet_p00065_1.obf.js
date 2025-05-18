var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var lm = [];
var line;
while (line = lines['shift']()) {
    lm['push'](line['split'](',')[0x0]);
}
var tm = [];
while (line = lines['shift']()) {
    tm['push'](line['split'](',')[0x0]);
}
lm['sort'](function (_0x550fb3, _0x1a810b) {
    return _0x550fb3 - _0x1a810b;
});
lm['forEach'](function (_0x5067d1) {
    var _0x21cb0c = tm['filter'](function (_0x50fc9d) {
        return _0x50fc9d == _0x5067d1;
    })['length'];
    if (_0x21cb0c > 0x0) {
        var _0x22d35a = lm['filter'](function (_0x4f1f75) {
            return _0x4f1f75 == _0x5067d1;
        })['length'];
        console['log'](_0x5067d1, _0x21cb0c + _0x22d35a);
    }
});