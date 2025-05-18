function Main(_0x27fc59) {
    _0x27fc59 = _0x27fc59['split']('\x0a');
    _0x27fc59 = _0x27fc59[0x0];
    const _0x532f66 = _0x27fc59['slice'](-0x1);
    const _0x1f025c = _0x532f66 === 's' ? 'es' : 's';
    console['log']('' + _0x27fc59 + _0x1f025c);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));