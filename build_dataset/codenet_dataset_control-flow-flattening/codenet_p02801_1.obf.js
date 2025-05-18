Main(myin());
function myin() {
    var ZcoSqy = {
        'qPyHx': function (callee, param1) {
            return callee(param1);
        }
    };
    return ZcoSqy['qPyHx'](require, 'fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
}
function myout(t) {
    console['log'](t);
}
function myerr(t) {
    console['error'](t);
}
function myconv(i, no) {
    switch (no) {
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i['split']('\x20');
    case 0x3:
        return i['split']('\x0a');
    case 0x4:
        return i['split']('\x20')['map'](a => Number(a));
    case 0x5:
        return i['split']('\x0a')['map'](a => Number(a));
    case 0x6:
        return i['split']('');
    case 0x7:
        return i['split']('')['map'](a => Number(a));
    case 0x8:
        return i['join']('\x20');
    case 0x9:
        return i['join']('\x0a');
    case 0x0:
        return i['join']('');
    default:
        return i;
    }
}
function Main(input) {
    var Uiolue = {
        'GqHOb': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'OmNVQ': 'abcdefghijklmnopqrstivwxyz'
    };
    input = Uiolue['GqHOb'](myconv, input, null);
    var list = Uiolue['OmNVQ']['split']('');
    myout(list[list['indexOf'](input) + 0x1]);
}