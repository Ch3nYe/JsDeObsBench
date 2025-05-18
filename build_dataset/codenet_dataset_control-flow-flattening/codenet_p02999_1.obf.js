function Main(input) {
    const FlMKiK = {
        'gKRmi': function (callee, param1) {
            return callee(param1);
        },
        'HsBMB': function (x, y) {
            return x < y;
        }
    };
    var result;
    const X = FlMKiK['gKRmi'](parseInt, input[0x0]);
    const A = FlMKiK['gKRmi'](parseInt, input[0x1]);
    result = FlMKiK['HsBMB'](X, A) ? 0x0 : 0xa;
    console['log'](result);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\n|\s/));