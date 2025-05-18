Main(myin());
function myin() {
    return require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
}
function myout(_0x33a3ef) {
    console['log'](_0x33a3ef);
}
function myerr(_0x17dc1a) {
    console['error'](_0x17dc1a);
}
function myconv(_0x99f289, _0xe0f679) {
    switch (_0xe0f679) {
    case 0x1:
        return parseInt(_0x99f289);
    case 0x2:
        return _0x99f289['split']('\x20');
    case 0x3:
        return _0x99f289['split']('\x0a');
    case 0x4:
        return _0x99f289['split']('\x20')['map'](_0x29582e => Number(_0x29582e));
    case 0x5:
        return _0x99f289['split']('\x0a')['map'](_0x1f3c0b => Number(_0x1f3c0b));
    case 0x6:
        return _0x99f289['split']('');
    case 0x7:
        return _0x99f289['split']('')['map'](_0x13d2c7 => Number(_0x13d2c7));
    case 0x8:
        return _0x99f289['join']('\x20');
    case 0x9:
        return _0x99f289['join']('\x0a');
    case 0x0:
        return _0x99f289['join']('');
    default:
        return _0x99f289;
    }
}
function Main(_0x9c5d36) {
    _0x9c5d36 = myconv(_0x9c5d36, null);
    var _0x425d6a = 'abcdefghijklmnopqrstivwxyz'['split']('');
    myout(_0x425d6a[_0x425d6a['indexOf'](_0x9c5d36) + 0x1]);
}