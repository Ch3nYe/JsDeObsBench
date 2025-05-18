const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['trim']()['split']('\x0a');
while (line = lines['shift']()) {
    const numbers = line['split']('\x20')['map'](Number);
    if (numbers['length'] > 0x1) {
        const diffList = [];
        numbers['map']((_0xfe0b6f, _0x47d83f) => {
            numbers['map']((_0x263ffc, _0x487468) => {
                if (_0x47d83f !== _0x487468) {
                    const _0x15cc9b = Math['abs'](_0xfe0b6f - _0x263ffc);
                    const _0x13c9f2 = _0xfe0b6f + '\x20' + _0x263ffc;
                    diffList['push']([
                        _0x13c9f2,
                        _0x15cc9b
                    ]);
                }
            });
        });
        const sorted = diffList['sort']((_0x5f52cc, _0x2a9b74) => _0x5f52cc[0x1] - _0x2a9b74[0x1])[0x0];
        console['log'](sorted[0x1]);
    }
}