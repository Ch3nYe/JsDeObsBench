console['log']((_0x5ba805 => {
    const _0x541fed = _0x5ba805['trim']();
    const _0x1ab482 = _0x541fed['length'] - 0x1;
    let _0x5afa4c = 0x0;
    for (let _0x2f6a31 = 0x0, _0x375ddc = _0x1ab482; _0x2f6a31 < _0x375ddc; _0x2f6a31++, _0x375ddc--) {
        while (_0x541fed[_0x2f6a31] !== _0x541fed[_0x375ddc]) {
            if (_0x541fed[_0x2f6a31] === 'x')
                _0x5afa4c++, _0x2f6a31++;
            else if (_0x541fed[_0x375ddc] === 'x')
                _0x5afa4c++, _0x375ddc--;
            else
                return '-1';
        }
    }
    return '' + _0x5afa4c;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));