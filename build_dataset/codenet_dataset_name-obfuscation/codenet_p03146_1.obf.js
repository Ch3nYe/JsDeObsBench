const collatz = _0x55364d => {
    if (_0x55364d % 0x2 === 0x0) {
        _0x55364d /= 0x2;
    } else {
        _0x55364d = 0x3 * _0x55364d + 0x1;
    }
    return _0x55364d;
};
const main = _0x25a565 => {
    const _0x1da81d = _0x25a565['trim']()['split']('\x0a');
    const _0x5d4056 = parseInt(_0x1da81d[0x0]);
    if (_0x5d4056 === 0x1 || _0x5d4056 === 0x2 || _0x5d4056 === 0x4) {
        console['log'](0x4);
        return;
    }
    let _0x5555b7 = _0x5d4056;
    let _0xbf9ece = 0x0;
    let _0x1a4ca7 = 0x0;
    for (let _0x25cc74 = 0x1;; _0x25cc74++) {
        if (_0x5555b7 === 0x4 && _0xbf9ece === 0x0) {
            _0xbf9ece = _0x25cc74;
        } else if (_0x5555b7 === 0x4 && _0xbf9ece !== 0x0) {
            _0x1a4ca7 = _0x25cc74;
            break;
        }
        _0x5555b7 = collatz(_0x5555b7);
    }
    console['log'](_0x1a4ca7);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));