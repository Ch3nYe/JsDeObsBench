function Main(_0x11427e) {
    var _0x4512df;
    switch (_0x11427e) {
    case 'SUN':
        _0x4512df = '7';
        break;
    case 'MON':
        _0x4512df = '6';
        break;
    case 'TUE':
        _0x4512df = '5';
        break;
    case 'WED':
        _0x4512df = '4';
        break;
    case 'THU':
        _0x4512df = '3';
        break;
    case 'FRI':
        _0x4512df = '2';
        break;
    case 'SAT':
        _0x4512df = '1';
        break;
    }
    console['log'](_0x4512df);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));