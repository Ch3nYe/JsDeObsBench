function Main(input) {
    var EhmWmV = {
        'oYuso': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'pokXe': function (x, y) {
            return x / y;
        },
        'DNnhw': function (x, y) {
            return x * y;
        }
    };
    var inputs = input['split']('\x20');
    var ab = EhmWmV['oYuso'](parseInt, inputs[0x0], 0xa);
    var bc = EhmWmV['oYuso'](parseInt, inputs[0x1], 0xa);
    console['log'](EhmWmV['pokXe'](EhmWmV['DNnhw'](ab, bc), 0x2));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));