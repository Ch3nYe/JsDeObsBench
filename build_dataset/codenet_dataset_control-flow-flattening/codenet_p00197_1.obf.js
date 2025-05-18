(function () {
    var aedXaX = {
        'pukdX': function (x, y) {
            return x < y;
        },
        'SBsGI': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'jTlcx': function (x, y) {
            return x === y;
        },
        'yPJFR': function (x, y) {
            return x < y;
        },
        'dtHJU': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'KPSvG': function (x, y) {
            return x % y;
        },
        'gUtJf': function (x, y) {
            return x + y;
        },
        'Rdsxl': function (callee) {
            return callee();
        },
        'eDRug': 'data',
        'mzkOQ': 'end'
    };
    var input = '', cnt = 0x0;
    function main() {
        var inputLen, nums, x, y, temp, ans;
        inputLen = input['length'];
        for (i = 0x0; aedXaX['pukdX'](i, inputLen); i += 0x1) {
            nums = input[i]['split']('\x20');
            x = aedXaX['SBsGI'](parseInt, nums[0x0], 0xa);
            y = aedXaX['SBsGI'](parseInt, nums[0x1], 0xa);
            if (aedXaX['jTlcx'](x, 0x0) && aedXaX['jTlcx'](y, 0x0)) {
                break;
            } else if (aedXaX['yPJFR'](x, y)) {
                temp = x;
                x = y;
                y = temp;
            }
            ans = aedXaX['SBsGI'](gcd, x, y);
            aedXaX['SBsGI'](showResult, ans, cnt);
            cnt = 0x0;
        }
    }
    function gcd(x, y) {
        cnt += 0x1;
        return x % y === 0x0 ? y : aedXaX['dtHJU'](gcd, y, aedXaX['KPSvG'](x, y));
    }
    function showResult(result, cnt) {
        console['log'](aedXaX['gUtJf'](aedXaX['gUtJf'](result, '\x20'), cnt));
    }
    process['stdin']['resume']();
    process['stdin']['setEncoding']('utf8');
    process['stdin']['on'](aedXaX['eDRug'], function (chunk) {
        input += chunk;
    });
    process['stdin']['on'](aedXaX['mzkOQ'], function () {
        input = input['split']('\x0a');
        aedXaX['Rdsxl'](main);
    });
}());