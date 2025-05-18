function main(input) {
    var nHxCUa = {
        'vKQIG': function (callee, param1) {
            return callee(param1);
        },
        'KvIbD': function (callee, param1) {
            return callee(param1);
        },
        'xDvoL': function (x, y) {
            return x === y;
        },
        'WXuPq': 'second'
    };
    var line1 = nHxCUa['vKQIG'](parseInt, input[0x0]);
    var ans = ![];
    for (var i = 0x1; i < input['length']; i++) {
        var n = nHxCUa['KvIbD'](parseInt, input[i]);
        if (nHxCUa['xDvoL'](n % 0x2, 0x1))
            ans = !![];
        ;
    }
    console['log'](ans ? 'first' : nHxCUa['WXuPq']);
}
function parse(line) {
    var SqTUtm = {
        'oTIZp': function (x, y) {
            return x < y;
        },
        'BMXNo': function (callee, param1) {
            return callee(param1);
        }
    };
    var ret = [];
    var arr = line['split']('\x20');
    for (var i = 0x0; SqTUtm['oTIZp'](i, arr['length']); i++) {
        ret['push'](SqTUtm['BMXNo'](parseInt, arr[i]));
    }
    return ret;
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var iBQOUH = {
        'MMKqk': function (callee, param1) {
            return callee(param1);
        }
    };
    input = input['split']('\x0a');
    iBQOUH['MMKqk'](main, input);
});