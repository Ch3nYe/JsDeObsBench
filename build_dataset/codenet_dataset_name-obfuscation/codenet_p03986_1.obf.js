const Main = _0x1ab1b9 => {
    while (_0x1ab1b9['indexOf']('ST') > -0x1) {
        _0x1ab1b9 = _0x1ab1b9['replace'](/ST/g, '');
    }
    console['log'](_0x1ab1b9['length']);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));