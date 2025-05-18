function Main(input) {
    var NDhLFk = {
        'VmoZB': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'rFPac': function (x, y) {
            return x * y;
        },
        'YBqQF': function (x, y) {
            return x / y;
        },
        'ADtUY': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x20');
    var a = parseInt(input[0x0], 0xa);
    var b = NDhLFk['VmoZB'](parseInt, input[0x1], 0xa);
    var t = parseInt(input[0x2], 0xa);
    console['log']('%d', NDhLFk['rFPac'](Math['floor'](NDhLFk['YBqQF'](NDhLFk['ADtUY'](t, 0.5), a)), b));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));