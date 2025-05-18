function Main(_0x32be6a) {
    _0x32be6a = _0x32be6a['split']('\x0a')['map'](_0x51756b => parseInt(_0x51756b, 0xa));
    console['log'](Math['pow'](_0x32be6a[0x0], 0x2) - _0x32be6a[0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));