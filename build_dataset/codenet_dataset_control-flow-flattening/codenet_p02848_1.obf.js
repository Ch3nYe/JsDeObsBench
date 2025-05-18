function Main(input) {
    const QNCcvY = {
        'RCFEQ': function (x, y) {
            return x > y;
        },
        'iZgBQ': function (callee, param1) {
            return callee(param1);
        }
    };
    const inputs = input['split']('\x0a')['filter'](v => v);
    const n = QNCcvY['iZgBQ'](Number, inputs[0x0]);
    const strs = inputs[0x1]['split']('');
    console['log'](strs['map'](function (s) {
        let c = s['charCodeAt']() + n;
        if (QNCcvY['RCFEQ'](c, 0x5a)) {
            c -= 0x1a;
        }
        return String['fromCharCode'](c);
    })['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));