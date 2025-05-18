process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x57197f) {
    var _0xed4c2e, _0x36f56f = _0x57197f['split']('\x0a'), _0x304669, _0x433811 = _0x36f56f['length'], _0x1553af, _0x14f8ee, _0x1ab776, _0x596c53, _0x5ab887;
    for (_0x304669 = 0x0; _0x304669 < _0x433811; _0x304669++) {
        _0xed4c2e = _0x36f56f[_0x304669];
        if (_0xed4c2e == '#') {
            break;
        }
        _0xed4c2e = _0xed4c2e['replace'](/north/g, 0x0);
        _0xed4c2e = _0xed4c2e['replace'](/west/g, 0x1);
        _0x1ab776 = 0x0;
        _0x14f8ee = _0xed4c2e['length'];
        _0x596c53 = _0xed4c2e['length'] - 0x1;
        _0x5ab887 = 0x5a * Math['pow'](0x2, _0x596c53);
        for (_0x1553af = _0x14f8ee; _0x1553af >= 0x0; _0x1553af--) {
            if (_0xed4c2e[_0x1553af] * 0x1) {
                if (_0x1ab776 < _0x5ab887) {
                    _0x1ab776 += 0x5a * Math['pow'](0x2, _0x1553af);
                }
            } else {
                if (_0x1ab776 > 0x0) {
                    _0x1ab776 -= 0x5a * Math['pow'](0x2, _0x1553af);
                }
            }
        }
        while (_0x596c53 > 0x0 && _0x1ab776 % 0x2 === 0x0) {
            _0x1ab776 = _0x1ab776 / 0x2;
            _0x596c53--;
        }
        if (_0x596c53 > 0x0) {
            console['log'](_0x1ab776 + '/' + Math['pow'](0x2, _0x596c53));
        } else {
            console['log'](_0x1ab776);
        }
    }
});