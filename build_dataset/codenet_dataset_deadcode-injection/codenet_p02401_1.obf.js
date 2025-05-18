function a0_0x3963() {
    var _0x212200 = [
        'stdin',
        'resume',
        'utf8',
        'data',
        'split',
        'length',
        'log',
        'dTlXj'
    ];
    a0_0x3963 = function () {
        return _0x212200;
    };
    return a0_0x3963();
}
var a0_0x93d399 = a0_0x4ab7;
function a0_0x4ab7(FtUTAJ, key) {
    var stringArray = a0_0x3963();
    a0_0x4ab7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ab7(FtUTAJ, key);
}
process[a0_0x93d399(0x0)][a0_0x93d399(0x1)]();
process[a0_0x93d399(0x0)]['setEncoding'](a0_0x93d399(0x2));
process[a0_0x93d399(0x0)]['on'](a0_0x93d399(0x3), function (chunk) {
    var _0x290fe9 = a0_0x4ab7;
    var input = chunk[_0x290fe9(0x4)]('\x0a');
    var output = '';
    for (var i = 0x0; i < input[_0x290fe9(0x5)]; i++) {
        var r = calc(input[i]);
        if (r !== ![]) {
            console[_0x290fe9(0x6)](r);
        }
    }
    function calc(input) {
        var _0x1a4b7d = a0_0x4ab7;
        if (_0x1a4b7d(0x7) === 'dTlXj') {
            var nums = input[_0x1a4b7d(0x4)]('\x20');
            nums[0x0] = Number(nums[0x0]);
            nums[0x2] = Number(nums[0x2]);
            if (nums[0x1] == '+') {
                return nums[0x0] + nums[0x2];
            } else if (nums[0x1] == '-') {
                if ('JSGlT' !== 'JSGlT') {
                    var r = calc(input[i]);
                    if (r !== ![]) {
                        console[_0x1a4b7d(0x6)](r);
                    }
                } else {
                    return nums[0x0] - nums[0x2];
                }
            } else if (nums[0x1] == '*') {
                return nums[0x0] * nums[0x2];
            } else if (nums[0x1] == '/') {
                return nums[0x0] / nums[0x2];
            } else if (nums[0x1] == '?') {
                return ![];
            }
        } else {
            return nums[0x0] - nums[0x2];
        }
    }
});