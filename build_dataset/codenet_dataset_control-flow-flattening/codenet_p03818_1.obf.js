function Main(input) {
    var CjiBIF = {
        'ykZVs': function (callee, param1) {
            return callee(param1);
        },
        'lvsBT': function (x, y) {
            return x === y;
        },
        'BSHFp': function (x, y) {
            return x == y;
        },
        'JUrWh': function (x, y) {
            return x - y;
        }
    };
    var len = input['split']('\x0a')[0x0];
    var list = input['split']('\x0a')[0x1]['split']('\x20');
    list['sort'](function (a, b) {
        return parseInt(a) - CjiBIF['ykZVs'](parseInt, b);
    });
    var b = list['filter'](function (x, i, self) {
        return CjiBIF['lvsBT'](self['indexOf'](x), i);
    });
    if (CjiBIF['BSHFp'](b['length'] % 0x2, 0x1)) {
        console['log'](b['length']);
    } else {
        console['log'](CjiBIF['JUrWh'](b['length'], 0x1));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));