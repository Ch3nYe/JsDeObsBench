function a0_0xdca6(ChzlJC, key) {
    var stringArray = a0_0x723f();
    a0_0xdca6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xdca6(ChzlJC, key);
}
Main(myin());
function a0_0x723f() {
    var _0x3ddad0 = [
        'readFileSync',
        '/dev/stdin',
        'log',
        'error',
        'split',
        'map',
        'join',
        'indexOf'
    ];
    a0_0x723f = function () {
        return _0x3ddad0;
    };
    return a0_0x723f();
}
function myin() {
    var _0xba39d7 = a0_0xdca6;
    return require('fs')[_0xba39d7(0x0)](_0xba39d7(0x1), 'utf8')['trim']();
}
function myout(t) {
    var _0x594cef = a0_0xdca6;
    console[_0x594cef(0x2)](t);
}
function myerr(t) {
    var _0x3d8bb2 = a0_0xdca6;
    console[_0x3d8bb2(0x3)](t);
}
function myconv(i, no) {
    var _0x1d824c = a0_0xdca6;
    switch (no) {
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i[_0x1d824c(0x4)]('\x20');
    case 0x3:
        return i[_0x1d824c(0x4)]('\x0a');
    case 0x4:
        return i[_0x1d824c(0x4)]('\x20')['map'](a => Number(a));
    case 0x5:
        return i['split']('\x0a')[_0x1d824c(0x5)](a => Number(a));
    case 0x6:
        return i[_0x1d824c(0x4)]('');
    case 0x7:
        return i[_0x1d824c(0x4)]('')['map'](a => Number(a));
    case 0x8:
        return i[_0x1d824c(0x6)]('\x20');
    case 0x9:
        return i['join']('\x0a');
    case 0x0:
        return i['join']('');
    default:
        return i;
    }
}
function Main(input) {
    var _0x53f8e6 = a0_0xdca6;
    input = myconv(input, null);
    var list = 'abcdefghijklmnopqrstivwxyz'[_0x53f8e6(0x4)]('');
    myout(list[list[_0x53f8e6(0x7)](input) + 0x1]);
}