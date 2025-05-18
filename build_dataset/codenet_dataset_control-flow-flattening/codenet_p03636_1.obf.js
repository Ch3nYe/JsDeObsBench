function Main(input) {
    var FSSPcz = {
        'HdBdf': function (callee, param1) {
            return callee(param1);
        },
        'DpSkI': function (x, y) {
            return x - y;
        },
        'UkUnf': function (x, y) {
            return x + y;
        },
        'dPCXM': function (x, y) {
            return x + y;
        }
    };
    input = FSSPcz['HdBdf'](String, input);
    var len = input['length'];
    var first = input['substring'](0x0, 0x1);
    if (len < 0x4) {
        var mid = 0x1;
    } else {
        var mid = len - 0x2;
    }
    var last = input['substring'](FSSPcz['DpSkI'](len, 0x1), len);
    console['log']('%s', FSSPcz['UkUnf'](FSSPcz['dPCXM'](first, FSSPcz['HdBdf'](String, mid)), last));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));