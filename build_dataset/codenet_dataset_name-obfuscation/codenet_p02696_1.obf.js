const Main = _0x404425 => {
    ABN = _0x404425['split']('\x20')['map'](_0x5a7e09 => parseInt(_0x5a7e09));
    console['log'](F(ABN[0x0], ABN[0x1], ABN[0x2]));
};
const F = (_0x205903, _0x57daf8, _0x1b08e9) => {
    max = 0x0;
    count = 0x0;
    count0 = 0x0;
    for (x = 0x0; x <= _0x1b08e9; x++) {
        result = Math['floor'](_0x205903 * x / _0x57daf8) - _0x205903 * Math['floor'](x / _0x57daf8);
        if (result == 0x0) {
            count0++;
        }
        if (count0 > 0x2) {
            break;
        }
        if (result > max) {
            max = result;
            count = x;
        }
    }
    return max;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));