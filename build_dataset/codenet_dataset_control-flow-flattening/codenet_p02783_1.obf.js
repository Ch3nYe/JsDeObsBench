function Main(input) {
    const AkTmbZ = {
        'RZgFP': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'IvNlv': function (x, y) {
            return x / y;
        }
    };
    const args = input['split']('\x20');
    const H = parseInt(args[0x0], 0xa);
    const A = AkTmbZ['RZgFP'](parseInt, args[0x1], 0xa);
    const ans = Math['ceil'](AkTmbZ['IvNlv'](H, A));
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));