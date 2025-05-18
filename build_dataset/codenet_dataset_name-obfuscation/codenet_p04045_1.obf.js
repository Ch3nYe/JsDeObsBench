function main(_0x35f867) {
    var _0x4d6166 = _0x35f867['split']('\x0a');
    var _0x26a044 = _0x4d6166[0x0]['split']('\x20')[0x0];
    var _0x1413f1 = new RegExp(_0x4d6166[0x1]['replace']('\x20', '|'));
    while (_0x1413f1['test'](String(_0x26a044))) {
        _0x26a044++;
    }
    return _0x26a044;
}
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));