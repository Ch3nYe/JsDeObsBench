function bomb(y, x, cnt, f) {
    var gjCfls = {
        'VhkWn': function (x, y) {
            return x + y;
        },
        'Jjrdm': '\x20\x20\x20',
        'iYyWX': function (x, y) {
            return x == y;
        },
        'EwIwX': function (x, y) {
            return x - y;
        },
        'YNIcI': function (x, y) {
            return x == y;
        },
        'Jdiea': function (x, y) {
            return x - y;
        },
        'aYddQ': function (x, y) {
            return x - y;
        },
        'IAzvd': function (x, y) {
            return x + y;
        },
        'QSrOI': function (x, y) {
            return x + y;
        },
        'YyUlY': function (x, y) {
            return x - y;
        },
        'xohzd': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'axWXs': function (x, y) {
            return x == y;
        },
        'LWTFe': function (x, y) {
            return x == y;
        },
        'zioCX': function (x, y) {
            return x + y;
        },
        'CAHvg': function (x, y) {
            return x == y;
        },
        'uaBNE': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'oCrXY': function (x, y) {
            return x - y;
        },
        'ALgzX': function (x, y) {
            return x + y;
        },
        'zCdTC': function (x, y) {
            return x == y;
        },
        'pHrMP': function (x, y) {
            return x == y;
        },
        'UghBO': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'Zldmg': function (x, y) {
            return x - y;
        },
        'ZpWuG': function (x, y) {
            return x + y;
        },
        'jVtaP': function (x, y) {
            return x + y;
        },
        'TVHRV': function (x, y) {
            return x + y;
        },
        'kfVLA': function (x, y) {
            return x == y;
        }
    };
    yx[y][x] = gjCfls['VhkWn'](gjCfls['Jjrdm'], cnt)['slice'](-0x3);
    if (gjCfls['iYyWX'](y, gjCfls['EwIwX'](n, 0x1)) && gjCfls['YNIcI'](x, gjCfls['Jdiea'](n, 0x1)))
        return;
    else if (gjCfls['iYyWX'](y, gjCfls['aYddQ'](n, 0x1)) && f == -0x1)
        bomb(y, gjCfls['IAzvd'](x, 0x1), gjCfls['QSrOI'](cnt, 0x1), 0x1);
    else if (y == gjCfls['YyUlY'](n, 0x1) && gjCfls['iYyWX'](f, 0x1))
        gjCfls['xohzd'](bomb, gjCfls['EwIwX'](y, 0x1), gjCfls['VhkWn'](x, 0x1), cnt + 0x1, 0x1);
    else if (x == n - 0x1 && gjCfls['axWXs'](f, 0x1))
        gjCfls['xohzd'](bomb, gjCfls['VhkWn'](y, 0x1), x, gjCfls['VhkWn'](cnt, 0x1), -0x1);
    else if (gjCfls['YNIcI'](x, n - 0x1) && gjCfls['axWXs'](f, -0x1))
        gjCfls['xohzd'](bomb, gjCfls['IAzvd'](y, 0x1), gjCfls['YyUlY'](x, 0x1), cnt + 0x1, -0x1);
    else if (gjCfls['LWTFe'](y, 0x0) && gjCfls['axWXs'](f, 0x1))
        gjCfls['xohzd'](bomb, y, gjCfls['VhkWn'](x, 0x1), gjCfls['zioCX'](cnt, 0x1), -0x1);
    else if (gjCfls['CAHvg'](y, 0x0) && gjCfls['YNIcI'](f, -0x1))
        gjCfls['uaBNE'](bomb, gjCfls['VhkWn'](y, 0x1), gjCfls['oCrXY'](x, 0x1), gjCfls['ALgzX'](cnt, 0x1), -0x1);
    else if (x == 0x0 && gjCfls['zCdTC'](f, -0x1))
        bomb(gjCfls['QSrOI'](y, 0x1), x, cnt + 0x1, 0x1);
    else if (gjCfls['pHrMP'](x, 0x0) && gjCfls['pHrMP'](f, 0x1))
        gjCfls['UghBO'](bomb, gjCfls['Zldmg'](y, 0x1), gjCfls['ZpWuG'](x, 0x1), gjCfls['zioCX'](cnt, 0x1), 0x1);
    else if (gjCfls['LWTFe'](f, 0x1))
        bomb(y - 0x1, gjCfls['jVtaP'](x, 0x1), gjCfls['TVHRV'](cnt, 0x1), 0x1);
    else if (gjCfls['kfVLA'](f, -0x1))
        gjCfls['xohzd'](bomb, gjCfls['TVHRV'](y, 0x1), gjCfls['Zldmg'](x, 0x1), gjCfls['zioCX'](cnt, 0x1), -0x1);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var I = 0x1;
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = [];
        for (var j = 0x0; j < n; j++) {
            yx[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0, 0x1, 0x1);
    console['log']('Case\x20' + I + ':');
    I++;
    console['log'](yx['join']('\x0a')['replace'](/\,/g, ''));
}