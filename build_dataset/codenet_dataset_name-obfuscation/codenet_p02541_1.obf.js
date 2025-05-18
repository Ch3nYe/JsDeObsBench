function Main(_0x5ec2bb) {
    _0x5ec2bb = _0x5ec2bb['split']('\x0a');
    const _0x45a10d = parseInt(_0x5ec2bb[0x0], 0xa);
    for (var _0x159bf1 = 0x1; _0x159bf1 > 0x0; _0x159bf1++) {
        var _0x532294 = 0.5 * (Math['sqrt'](0x8 * _0x45a10d * _0x159bf1 + 0x1) - 0x1);
        if (Number['isInteger'](_0x532294) == !![]) {
            console['log'](_0x532294);
            break;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));