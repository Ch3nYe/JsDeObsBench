function Main(_0x2a0dd1) {
    _0x2a0dd1 = _0x2a0dd1['split']('\x0a');
    _0x2a0dd1 = _0x2a0dd1[0x0];
    switch (_0x2a0dd1) {
    case 'A': {
            console['log']('T');
            return;
        }
    case 'T': {
            console['log']('A');
            return;
        }
    case 'C': {
            console['log']('G');
            return;
        }
    case 'G': {
            console['log']('C');
            return;
        }
    default: {
            return;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));