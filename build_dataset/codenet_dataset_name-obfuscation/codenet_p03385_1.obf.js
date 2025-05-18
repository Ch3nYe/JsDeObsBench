function main(_0x2761b7) {
    var _0x4c1775 = _0x2761b7['indexOf']('a');
    var _0xbc2924 = _0x2761b7['indexOf']('b');
    var _0x24d231 = _0x2761b7['indexOf']('c');
    if (_0x4c1775 == -0x1 || _0xbc2924 == -0x1 || _0x24d231 == -0x1) {
        console['log']('No');
    } else {
        console['log']('Yes');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));