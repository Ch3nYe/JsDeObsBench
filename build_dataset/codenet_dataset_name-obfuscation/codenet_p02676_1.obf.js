const main = _0x5278af => {
    _0x5278af = _0x5278af['trim']()['split']('\x0a');
    const _0x5b9793 = _0x5278af[0x0];
    const _0x242197 = _0x5278af[0x1];
    if (_0x242197['length'] <= _0x5b9793)
        console['log'](_0x242197);
    else
        console['log'](_0x242197['slice'](0x0, _0x5b9793) + '...');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));