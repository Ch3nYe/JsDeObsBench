'use strict';
(function (_0x52b992) {
    _0x52b992 = _0x52b992['trim']()['split'](/\s+/)['map'](_0x12c1ed => _0x12c1ed - 0x0);
    const _0x128b54 = _0x52b992['shift']();
    const _0x28afa7 = _0x52b992;
    var _0x3e8d59 = 0x0;
    while (_0x28afa7['length'] > 0x1) {
        let _0xc93c29 = _0x28afa7['splice'](_0x28afa7['indexOf'](Math['min']['apply'](null, _0x28afa7)), 0x1)[0x0];
        let _0x3c5d19 = _0x28afa7['splice'](_0x28afa7['indexOf'](Math['min']['apply'](null, _0x28afa7)), 0x1)[0x0];
        _0x28afa7['push'](_0xc93c29 + _0x3c5d19);
        _0x3e8d59 += _0xc93c29 + _0x3c5d19;
    }
    console['log'](_0x3e8d59);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));