(function (stringArrayFunction, comparisonValue) {
    var _0x362dbf = a0_0xefb6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x362dbf(0xb8)) / 0x1 * (-parseInt(_0x362dbf(0xb2)) / 0x2) + -parseInt(_0x362dbf(0xaf)) / 0x3 + parseInt(_0x362dbf(0xb6)) / 0x4 * (-parseInt(_0x362dbf(0xbc)) / 0x5) + parseInt(_0x362dbf(0xb4)) / 0x6 * (parseInt(_0x362dbf(0xb5)) / 0x7) + parseInt(_0x362dbf(0xae)) / 0x8 + -parseInt(_0x362dbf(0xbf)) / 0x9 + -parseInt(_0x362dbf(0xb9)) / 0xa * (-parseInt(_0x362dbf(0xbe)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x482f, 0xd8e36));
(function () {
    var _0x23e1ae = a0_0xefb6;
    var input = '', cnt = 0x0;
    function main() {
        var _0x16c609 = a0_0xefb6;
        var inputLen, nums, x, y, temp, ans;
        inputLen = input[_0x16c609(0xb7)];
        for (i = 0x0; i < inputLen; i += 0x1) {
            nums = input[i][_0x16c609(0xba)]('\x20');
            x = parseInt(nums[0x0], 0xa);
            y = parseInt(nums[0x1], 0xa);
            if (x === 0x0 && y === 0x0) {
                break;
            } else if (x < y) {
                temp = x;
                x = y;
                y = temp;
            }
            ans = gcd(x, y);
            showResult(ans, cnt);
            cnt = 0x0;
        }
    }
    function gcd(x, y) {
        cnt += 0x1;
        return x % y === 0x0 ? y : gcd(y, x % y);
    }
    function showResult(result, cnt) {
        var _0x2cc684 = a0_0xefb6;
        console[_0x2cc684(0xb3)](result + '\x20' + cnt);
    }
    process[_0x23e1ae(0xb0)][_0x23e1ae(0xad)]();
    process[_0x23e1ae(0xb0)]['setEncoding'](_0x23e1ae(0xbd));
    process['stdin']['on'](_0x23e1ae(0xb1), function (chunk) {
        input += chunk;
    });
    process[_0x23e1ae(0xb0)]['on'](_0x23e1ae(0xbb), function () {
        var _0x2b8677 = _0x23e1ae;
        input = input[_0x2b8677(0xba)]('\x0a');
        main();
    });
}());
function a0_0xefb6(ldhdQj, key) {
    var stringArray = a0_0x482f();
    a0_0xefb6 = function (index, key) {
        index = index - 0xad;
        var value = stringArray[index];
        return value;
    };
    return a0_0xefb6(ldhdQj, key);
}
function a0_0x482f() {
    var _0x3c38da = [
        'stdin',
        'data',
        '81574mTOjqs',
        'log',
        '508278vtolAA',
        '112knhiAd',
        '720260rEJyKh',
        'length',
        '1GULhWL',
        '20iCqRpW',
        'split',
        'end',
        '5gKWfXL',
        'utf8',
        '684222oDTVmu',
        '10752111ZlucVw',
        'resume',
        '9126272bSXcyT',
        '950073ZQhuuZ'
    ];
    a0_0x482f = function () {
        return _0x3c38da;
    };
    return a0_0x482f();
}