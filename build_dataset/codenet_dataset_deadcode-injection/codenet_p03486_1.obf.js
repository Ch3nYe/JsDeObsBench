var a0_0x502fdf = a0_0x5dff;
function a0_0x5dff(CQREtN, key) {
    var stringArray = a0_0x2c72();
    a0_0x5dff = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5dff(CQREtN, key);
}
function a0_0x2c72() {
    var _0xc26fff = [
        'split',
        'sort',
        'reverse',
        'join',
        'log',
        'Yes',
        '/dev/stdin',
        'UTF-8'
    ];
    a0_0x2c72 = function () {
        return _0xc26fff;
    };
    return a0_0x2c72();
}
function main(input) {
    var _0x26a246 = a0_0x5dff;
    var lines = input['split']('\x0a');
    var s = lines[0x0][_0x26a246(0x0)]('');
    var t = lines[0x1][_0x26a246(0x0)]('');
    s = s[_0x26a246(0x1)]()['join']();
    t = t[_0x26a246(0x1)]()[_0x26a246(0x2)]()[_0x26a246(0x3)]();
    s < t ? console[_0x26a246(0x4)](_0x26a246(0x5)) : console[_0x26a246(0x4)]('No');
}
main(require('fs')['readFileSync'](a0_0x502fdf(0x6), a0_0x502fdf(0x7)));