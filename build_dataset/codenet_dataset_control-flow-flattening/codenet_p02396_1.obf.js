var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var ONiCdx = {
        'iFkWx': function (x, y) {
            return x < y;
        },
        'XxeSR': function (callee, param1) {
            return callee(param1);
        },
        'SdxXY': function (x, y) {
            return x == y;
        },
        'ceqHw': function (x, y) {
            return x + y;
        },
        'dDUDg': 'Case\x20',
        'tTTzo': function (x, y) {
            return x + y;
        }
    };
    var nums = input['split']('\x0a');
    var output = '';
    for (var i = 0x0; ONiCdx['iFkWx'](i, nums['length']); i++) {
        nums[i] = ONiCdx['XxeSR'](Number, nums[i]);
        if (ONiCdx['SdxXY'](nums[i], 0x0)) {
            break;
        }
        output += ONiCdx['ceqHw'](ONiCdx['ceqHw'](ONiCdx['ceqHw'](ONiCdx['dDUDg'], ONiCdx['tTTzo'](i, 0x1)) + ':\x20', nums[i]), '\x0a');
    }
    console['log'](output);
});