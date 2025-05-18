function Main(input) {
    var GGmIMY = {
        'egQFt': function (callee, param1) {
            return callee(param1);
        },
        'Feilb': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x0a');
    var line = input[0x0]['split']('\x20');
    var m = GGmIMY['egQFt'](parseInt, line[0x0]);
    var n = parseInt(line[0x1]);
    var ans = GGmIMY['Feilb'](m - 0x1, n - 0x1);
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));