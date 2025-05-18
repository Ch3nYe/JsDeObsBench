function Main(_0x19b3f9) {
    a = _0x19b3f9['split']('\x0a')[0x0]['split']('\x20')['join']('');
    console['log'](a == '110' || a == '001' ? 'Open' : 'Close');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));