var a0_0x19c4c6 = a0_0x1d85;
var input = '';
process['stdin']['resume']();
process[a0_0x19c4c6(0x0)][a0_0x19c4c6(0x1)](a0_0x19c4c6(0x2));
process[a0_0x19c4c6(0x0)]['on']('data', function (chunk) {
    input += chunk;
});
function a0_0x1d85(wkqPEF, key) {
    var stringArray = a0_0x4816();
    a0_0x1d85 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1d85(wkqPEF, key);
}
process[a0_0x19c4c6(0x0)]['on']('end', function () {
    var _0x2c58ef = a0_0x1d85;
    var nums = input[_0x2c58ef(0x3)]('\x0a');
    var output = '';
    for (var i = 0x0; i < nums[_0x2c58ef(0x4)]; i++) {
        nums[i] = Number(nums[i]);
        if (nums[i] == 0x0) {
            break;
        }
        output += 'Case\x20' + (i + 0x1) + ':\x20' + nums[i] + '\x0a';
    }
    console[_0x2c58ef(0x5)](output);
});
function a0_0x4816() {
    var _0x5376ae = [
        'stdin',
        'setEncoding',
        'utf8',
        'split',
        'length',
        'log'
    ];
    a0_0x4816 = function () {
        return _0x5376ae;
    };
    return a0_0x4816();
}