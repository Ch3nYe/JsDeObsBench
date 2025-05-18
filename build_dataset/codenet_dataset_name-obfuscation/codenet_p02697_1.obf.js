const processData = _0x28f850 => {
    let [_0x2756d0, _0x22e33f] = _0x28f850[0x0]['split']('\x20')['map'](_0x51e55a => +_0x51e55a);
    if (_0x2756d0 % 0x2 === 0x1) {
        let _0xd67cfc = _0x2756d0 - 0x1;
        let _0x10a45c = 0x1;
        while (_0x22e33f) {
            console['log'](_0x10a45c++ + '\x20' + _0xd67cfc--);
            _0x22e33f--;
        }
    } else {
        let _0x35cff0 = _0x2756d0 / 0x2 + 0x1;
        let _0x5168c7 = _0x2756d0 / 0x2;
        while (_0x22e33f) {
            console['log'](_0x5168c7-- + '\x20' + _0x35cff0++);
            _0x22e33f--;
        }
    }
};
let i = '';
process['stdin']['on']('data', _0x580253 => i += _0x580253);
process['stdin']['on']('end', () => {
    const {EOL: _0x39a2dc} = require('os');
    const _0x430b23 = i['split'](_0x39a2dc);
    processData(_0x430b23);
});