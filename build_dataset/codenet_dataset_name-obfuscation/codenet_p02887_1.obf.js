function main(_0xedae35) {
    var _0x7bd4e0 = _0xedae35['split'](/\n/g);
    var _0x43ea60 = _0x7bd4e0[0x1];
    var _0x26df33 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (i = 0x0; i < _0x26df33['length']; i++) {
        var _0x30f00d = _0x26df33['substr'](i, 0x1);
        var _0x4a28a7 = new RegExp(_0x30f00d + '+', 'g');
        _0x43ea60 = _0x43ea60['replace'](_0x4a28a7, _0x30f00d);
    }
    console['log'](_0x43ea60['length']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));