const Main = _0x1d684e => {
    const _0x3a7cbf = _0x1d684e['trim']()['split']('');
    let _0x9ecbdc = '';
    if (_0x3a7cbf['indexOf']('7') === -0x1) {
        _0x9ecbdc = 'No';
    } else {
        _0x9ecbdc = 'Yes';
    }
    console['log'](_0x9ecbdc);
    return _0x9ecbdc;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));