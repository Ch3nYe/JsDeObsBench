const main = _0x360705 => {
    const [_0x227d32, _0x932b35] = _0x360705['trim']()['split']('\x20')['map'](_0x2b489b => parseInt(_0x2b489b));
    console['log'](_0x227d32 * _0x932b35);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));