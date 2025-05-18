function a0_0x3d98(EDrlTW, key) {
    var stringArray = a0_0x4639();
    a0_0x3d98 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d98(EDrlTW, key);
}
function a0_0x4639() {
    var _0x3e3383 = [
        'stdin',
        'setEncoding',
        'split',
        'map'
    ];
    a0_0x4639 = function () {
        return _0x3e3383;
    };
    return a0_0x4639();
}
var a0_0x3b42e6 = a0_0x3d98;
process[a0_0x3b42e6(0x0)]['resume']();
process[a0_0x3b42e6(0x0)][a0_0x3b42e6(0x1)]('utf8');
process[a0_0x3b42e6(0x0)]['on']('data', function (x) {
    var _0x57ca85 = a0_0x3d98;
    var args = x[_0x57ca85(0x2)]('\x20')[_0x57ca85(0x3)](Number);
    var a = args[0x0];
    var b = args[0x1];
    var c = args[0x2];
    console['log']('%s', a < b && b < c ? 'Yes' : 'No');
});