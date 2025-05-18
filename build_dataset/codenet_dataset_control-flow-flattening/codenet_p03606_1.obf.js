Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(args) {
    var iivdSm = {
        'SBoMq': function (callee, param1) {
            return callee(param1);
        },
        'hERGZ': function (x, y) {
            return x <= y;
        },
        'qlehV': function (x, y) {
            return x + y;
        },
        'iLUIu': function (callee, param1) {
            return callee(param1);
        }
    };
    input = args['split']('\x0a');
    const N = iivdSm['SBoMq'](parseInt, input[0x0]);
    var tmp;
    var result = 0x0;
    for (var i = 0x1; iivdSm['hERGZ'](i, N); i++) {
        tmp = input[i]['split']('\x20');
        result += iivdSm['qlehV'](parseInt(tmp[0x1]) - iivdSm['iLUIu'](parseInt, tmp[0x0]), 0x1);
    }
    console['log'](result);
}