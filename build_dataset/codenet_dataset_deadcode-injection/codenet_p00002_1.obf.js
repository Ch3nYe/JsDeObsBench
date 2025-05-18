function a0_0x5789(KqwinQ, key) {
    var stringArray = a0_0x4b95();
    a0_0x5789 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5789(KqwinQ, key);
}
var a0_0xcba5db = a0_0x5789;
process[a0_0xcba5db(0x0)][a0_0xcba5db(0x1)]();
process['stdin']['setEncoding']('utf8');
function a0_0x4b95() {
    var _0x26ffeb = [
        'stdin',
        'resume',
        'data',
        'trim',
        'split',
        'toString',
        'length',
        'join'
    ];
    a0_0x4b95 = function () {
        return _0x26ffeb;
    };
    return a0_0x4b95();
}
process[a0_0xcba5db(0x0)]['on'](a0_0xcba5db(0x2), function (chunk) {
    var _0xeefb22 = a0_0x5789;
    var nums = chunk[_0xeefb22(0x3)]()[_0xeefb22(0x4)]('\x0a');
    function digit(e) {
        var _0x4a687c = a0_0x5789;
        var a = e[_0x4a687c(0x4)]('\x20');
        var wa = parseInt(a[0x0]) + parseInt(a[0x1]);
        return wa[_0x4a687c(0x5)]()[_0x4a687c(0x6)];
    }
    console['log'](nums['map'](digit)[_0xeefb22(0x7)]('\x0a'));
});