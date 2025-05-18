'use strict';
const main = _0x35dcea => {
    _0x35dcea = _0x35dcea['split']('\x0a');
    const _0x10c387 = _0x35dcea[0x0]['split']('\x20')['map'](_0x232770 => parseInt(_0x232770));
    const _0x467602 = parseInt(_0x35dcea[0x1]);
    _0x10c387['sort']((_0x55d8b3, _0x52cb57) => _0x55d8b3 - _0x52cb57);
    let _0x4bdb9c = _0x10c387['pop']();
    _0x4bdb9c = _0x4bdb9c * Math['pow'](0x2, _0x467602);
    _0x10c387['push'](_0x4bdb9c);
    console['log'](_0x10c387['reduce']((_0x37e7d0, _0x563c7d) => _0x37e7d0 + _0x563c7d));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));