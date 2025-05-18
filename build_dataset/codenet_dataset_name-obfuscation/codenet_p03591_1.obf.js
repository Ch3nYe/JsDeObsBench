function Main(_0x3b0faa) {
    if (_0x3b0faa['substr'](0x0, 0x4) == 'YAKI') {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());