var main = _0x252e5c => {
    var _0x48a078 = _0x252e5c['split']('\x20');
    var _0xf7c0a1 = Number['parseInt'](_0x48a078[0x0]);
    var _0x597130 = Number['parseInt'](_0x48a078[0x1]);
    var _0x2d7c99 = Number['parseInt'](_0x48a078[0x2]);
    if (_0xf7c0a1 * _0x597130 >= _0x2d7c99) {
        console['log'](_0x2d7c99);
    } else {
        console['log'](_0xf7c0a1 * _0x597130);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));