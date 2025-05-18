const Main = input => {
    ABN = input['split']('\x20')['map'](item => parseInt(item));
    console['log'](F(ABN[0x0], ABN[0x1], ABN[0x2]));
};
const F = (A, B, N) => {
    const ZQmdOe = {
        'qetDC': function (x, y) {
            return x <= y;
        },
        'XqApe': function (x, y) {
            return x / y;
        },
        'LEAwj': function (x, y) {
            return x * y;
        },
        'iQAau': function (x, y) {
            return x == y;
        },
        'TJPfu': function (x, y) {
            return x > y;
        }
    };
    max = 0x0;
    count = 0x0;
    count0 = 0x0;
    for (x = 0x0; ZQmdOe['qetDC'](x, N); x++) {
        result = Math['floor'](ZQmdOe['XqApe'](A * x, B)) - ZQmdOe['LEAwj'](A, Math['floor'](ZQmdOe['XqApe'](x, B)));
        if (ZQmdOe['iQAau'](result, 0x0)) {
            count0++;
        }
        if (ZQmdOe['TJPfu'](count0, 0x2)) {
            break;
        }
        if (ZQmdOe['TJPfu'](result, max)) {
            max = result;
            count = x;
        }
    }
    return max;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));