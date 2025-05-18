var a0_0x9ac75e = a0_0x4848;
function a0_0x4848(vBvipI, key) {
    var stringArray = a0_0x3219();
    a0_0x4848 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4848(vBvipI, key);
}
function main(input) {
    var _0x1f49ae = a0_0x4848;
    var nums = input['split']('\x0a')[0x1][_0x1f49ae(0x0)]('\x20')[_0x1f49ae(0x1)](n => parseInt(n, 0xa));
    var count = 0x0;
    while (nums[_0x1f49ae(0x2)](n => n % 0x2 === 0x0)) {
        count++;
        nums = nums[_0x1f49ae(0x1)](n => n / 0x2);
    }
    console['log'](count);
}
main(require('fs')['readFileSync'](a0_0x9ac75e(0x3), a0_0x9ac75e(0x4)));
function a0_0x3219() {
    var _0x499b87 = [
        'split',
        'map',
        'every',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3219 = function () {
        return _0x499b87;
    };
    return a0_0x3219();
}