const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['trim']()['split']('\x0a');
while (line = lines['shift']()) {
    const [n, max] = line['split']('\x20')['map'](Number);
    if (n === 0x0 && max === 0x0) {
        break;
    }
    const prices = lines['shift']()['split']('\x20')['map'](Number);
    const allSum = [];
    prices['map']((_0x8aa1da, _0x664099) => {
        prices['map']((_0x35742b, _0x339f24) => {
            if (_0x664099 !== _0x339f24) {
                const _0x14f7e0 = _0x8aa1da + _0x35742b;
                if (_0x14f7e0 <= max) {
                    allSum['push'](_0x14f7e0);
                }
            }
        });
    });
    const answer = allSum['sort']((_0x2bcc6f, _0x2b58ce) => _0x2b58ce - _0x2bcc6f)[0x0];
    if (answer) {
        console['log'](answer);
        continue;
    }
    console['log']('NONE');
}