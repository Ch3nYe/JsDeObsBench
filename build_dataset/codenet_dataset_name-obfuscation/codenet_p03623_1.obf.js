function Main(_0x2b9561) {
    _0x2b9561 = _0x2b9561['split']('\x0a')[0x0]['split']('\x20');
    if (Math['abs'](_0x2b9561[0x0] - _0x2b9561[0x1]) < Math['abs'](_0x2b9561[0x0] - _0x2b9561[0x2]))
        console['log']('A');
    else
        console['log']('B');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));