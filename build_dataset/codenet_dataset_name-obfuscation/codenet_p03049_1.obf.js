'use strict';
function counter(_0x5c532b, _0x364c41) {
    return _0x5c532b['split'](_0x364c41)['length'] - 0x1;
}
function main(_0x28ccd9) {
    const _0x43627b = _0x28ccd9['split']('\x0a');
    _0x43627b['shift']();
    let _0x440d4e = 0x0;
    let _0x519399 = 0x0;
    let _0x478fdb = 0x0;
    let _0x5da75f = 0x0;
    _0x43627b['forEach'](_0x89b89a => {
        _0x440d4e += counter(_0x89b89a, 'AB');
        if (_0x89b89a['charAt'](0x0) === 'B') {
            if (_0x89b89a['charAt'](_0x89b89a['length'] - 0x1) === 'A') {
                ++_0x5da75f;
            } else {
                ++_0x519399;
            }
        } else if (_0x89b89a['charAt'](_0x89b89a['length'] - 0x1) === 'A') {
            ++_0x478fdb;
        }
    });
    const _0x5c5c4b = Math['min'](_0x519399, _0x478fdb);
    const _0x487577 = Math['max'](_0x519399, _0x478fdb);
    const _0x5d1406 = _0x487577 - _0x5c5c4b;
    let _0x26a177 = Math['max'](0x0, _0x5da75f - _0x5d1406);
    if (_0x5d1406 === 0x0 && _0x26a177 !== 0x0)
        --_0x26a177;
    _0x440d4e += _0x5c5c4b;
    _0x440d4e += Math['min'](_0x5d1406, _0x5da75f);
    _0x440d4e += _0x26a177;
    console['log'](_0x440d4e);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));