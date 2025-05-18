function a0_0x367c() {
    var _0x18179f = [
        'GeiGS',
        'length',
        'JFERv',
        'log',
        'stdin',
        'resume',
        'utf8',
        'end',
        'OPtFH'
    ];
    a0_0x367c = function () {
        return _0x18179f;
    };
    return a0_0x367c();
}
function a0_0x6322(dgxGgA, key) {
    var stringArray = a0_0x367c();
    a0_0x6322 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6322(dgxGgA, key);
}
(function () {
    var _0x1874a0 = a0_0x6322;
    var input = '', cnt = 0x0;
    function main() {
        var _0x1fceea = a0_0x6322;
        if (_0x1fceea(0x0) !== _0x1fceea(0x0)) {
            input = input['split']('\x0a');
            main();
        } else {
            var inputLen, nums, x, y, temp, ans;
            inputLen = input[_0x1fceea(0x1)];
            for (i = 0x0; i < inputLen; i += 0x1) {
                nums = input[i]['split']('\x20');
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
    }
    function gcd(x, y) {
        var _0x22ba38 = a0_0x6322;
        if (_0x22ba38(0x2) === 'eVuBy') {
            console[_0x22ba38(0x3)](result + '\x20' + cnt);
        } else {
            cnt += 0x1;
            return x % y === 0x0 ? y : gcd(y, x % y);
        }
    }
    function showResult(result, cnt) {
        console['log'](result + '\x20' + cnt);
    }
    process[_0x1874a0(0x4)][_0x1874a0(0x5)]();
    process[_0x1874a0(0x4)]['setEncoding'](_0x1874a0(0x6));
    process[_0x1874a0(0x4)]['on']('data', function (chunk) {
        input += chunk;
    });
    process[_0x1874a0(0x4)]['on'](_0x1874a0(0x7), function () {
        var _0x2bfdbe = a0_0x6322;
        if (_0x2bfdbe(0x8) !== _0x2bfdbe(0x8)) {
            input += chunk;
        } else {
            input = input['split']('\x0a');
            main();
        }
    });
}());