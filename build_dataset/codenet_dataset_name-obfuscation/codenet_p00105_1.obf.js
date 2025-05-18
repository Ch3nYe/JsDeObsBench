var d = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
var info = line = '';
var map = [];
while (line = d['shift']()) {
    info = line['split']('\x20');
    map['push']([
        info[0x0],
        +info[0x1]
    ]);
}
map['sort'](function (_0x56ae88, _0x28b50f) {
    if (_0x56ae88[0x0] < _0x28b50f[0x0])
        return -0x1;
    if (_0x56ae88[0x0] > _0x28b50f[0x0])
        return 0x1;
    if (_0x56ae88[0x1] < _0x28b50f[0x1])
        return -0x1;
    if (_0x56ae88[0x1] > _0x28b50f[0x1])
        return 0x1;
    return 0x0;
});
var word = '';
var pages = [];
map['forEach'](function (_0xf94afe, _0x24b2c4) {
    if (word !== _0xf94afe[0x0]) {
        if (_0x24b2c4 !== 0x0) {
            console['log'](pages['join']('\x20'));
            pages = [];
        }
        console['log'](_0xf94afe[0x0]);
    }
    pages['push'](_0xf94afe[0x1]);
    word = _0xf94afe[0x0];
});
console['log'](pages['join']('\x20'));