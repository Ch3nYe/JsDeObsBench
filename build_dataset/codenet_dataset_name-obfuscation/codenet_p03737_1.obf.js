function Main(_0x1e878f) {
    console['log']((_0x1e878f || '')['split'](/\s+/)['map'](function (_0x2949c7) {
        return _0x2949c7[0x0]['toUpperCase']();
    })['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));