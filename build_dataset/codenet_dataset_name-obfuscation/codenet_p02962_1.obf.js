function Main(_0x2eb715) {
    _0x2eb715 = _0x2eb715['split']('\x0a');
    const _0x746bdf = _0x2eb715[0x0];
    const _0x131f2b = _0x2eb715[0x1];
    const _0xec8724 = [];
    for (i = 0x0; i < _0x746bdf['length']; i++) {
        if ((_0x746bdf + _0x131f2b)['slice'](i, i + _0x131f2b['length']) == _0x131f2b) {
            _0xec8724['push'](!![]);
        } else {
            _0xec8724['push'](![]);
        }
    }
    max = 0x0;
    for (i = 0x0; i < _0x746bdf['length']; i++) {
        isInf = ![];
        now = i;
        getted = [];
        while (_0xec8724[now]) {
            getted['push'](now);
            now = (now + _0x131f2b['length']) % _0x746bdf['length'];
            if (getted['indexOf'](now) != -0x1) {
                isInf = !![];
                break;
            }
        }
        if (isInf) {
            max = -0x1;
            break;
        } else {
            if (max < getted['length'])
                max = getted['length'];
        }
    }
    console['log'](max);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));