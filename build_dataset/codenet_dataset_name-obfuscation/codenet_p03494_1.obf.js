function main(_0x5d8575) {
    var _0x65dcb5 = _0x5d8575['split']('\x0a')[0x1]['split']('\x20')['map'](_0x1da4ee => parseInt(_0x1da4ee, 0xa));
    var _0x3a9228 = 0x0;
    while (_0x65dcb5['every'](_0x1d3d60 => _0x1d3d60 % 0x2 === 0x0)) {
        _0x3a9228++;
        _0x65dcb5 = _0x65dcb5['map'](_0x47956d => _0x47956d / 0x2);
    }
    console['log'](_0x3a9228);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));