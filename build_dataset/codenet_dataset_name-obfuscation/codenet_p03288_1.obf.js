function main(_0xd68eb4) {
    var _0x1aa486 = _0xd68eb4[0x0] - 0x0;
    if (_0x1aa486 < 0x4b0)
        console['log']('ABC');
    else if (_0x1aa486 < 0xaf0)
        console['log']('ARC');
    else
        console['log']('AGC');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));