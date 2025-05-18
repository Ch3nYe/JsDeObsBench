function main() {
    var hZMqpn = {
        'ewdsS': function (x, y) {
            return x < y;
        },
        'MbgdR': function (x, y) {
            return x - y;
        },
        'DtKVY': function (x, y) {
            return x * y;
        },
        'MoRxf': function (x, y) {
            return x / y;
        }
    };
    var debt = 0x186a0;
    for (var i = 0x0; hZMqpn['ewdsS'](i, hZMqpn['MbgdR'](input['trim'](), 0x0)); i++) {
        debt = hZMqpn['DtKVY'](Math['ceil'](hZMqpn['MoRxf'](hZMqpn['DtKVY'](debt, 1.05), 0x3e8)), 0x3e8);
    }
    console['log'](debt);
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var yCKSeV = {
        'mClDh': function (callee) {
            return callee();
        }
    };
    yCKSeV['mClDh'](main);
});