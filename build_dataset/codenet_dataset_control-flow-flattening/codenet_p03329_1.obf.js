function equal(a, b) {
    var BgwPcw = {
        'sfRQf': '4|2|3|0|1',
        'cCUNt': function (x, y) {
            return x !== y;
        },
        'cVJEn': function (x, y) {
            return x != y;
        }
    };
    var prBjEy = BgwPcw['sfRQf']['split']('|');
    var iLtpuF = 0x0;
    while (!![]) {
        switch (prBjEy[iLtpuF++]) {
        case '0':
            for (var i = 0x0; i < aP['length']; i++)
                if (BgwPcw['cCUNt'](a[aP[i]], b[aP[i]]))
                    return ![];
            continue;
        case '1':
            return !![];
        case '2':
            var bP = Object['getOwnPropertyNames'](b);
            continue;
        case '3':
            if (BgwPcw['cVJEn'](aP['length'], bP['length']))
                return ![];
            continue;
        case '4':
            var aP = Object['getOwnPropertyNames'](a);
            continue;
        }
        break;
    }
}
function pi(text) {
    var CrniSS = {
        'tjQQi': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return CrniSS['tjQQi'](parseInt, text, 0xa);
}
var six = [
    0x6,
    0x5,
    0x4,
    0x3,
    0x2,
    0x1
]['map'](_ => Math['pow'](0x6, _));
var nine = [
    0x5,
    0x4,
    0x3,
    0x2,
    0x1
]['map'](_ => Math['pow'](0x9, _));
function count(i) {
    var zBPMzh = {
        'TLHyY': function (x, y) {
            return x < y;
        },
        'xpIwI': function (x, y) {
            return x < y;
        },
        'QijWl': function (x, y) {
            return x - y;
        },
        'FYNJT': function (x, y) {
            return x + y;
        },
        'bdyhS': function (callee, param1) {
            return callee(param1);
        },
        'iYEcm': function (x, y) {
            return x - y;
        }
    };
    if (zBPMzh['TLHyY'](i, 0x6))
        return i;
    if (zBPMzh['xpIwI'](i, 0x9))
        return 0x1 + zBPMzh['QijWl'](i, 0x6);
    return Math['min'](zBPMzh['FYNJT'](count(zBPMzh['QijWl'](i, six['find'](_ => _ <= i))), 0x1), zBPMzh['FYNJT'](zBPMzh['bdyhS'](count, zBPMzh['iYEcm'](i, nine['find'](_ => _ <= i))), 0x1));
}
function main(input) {
    var oOQfIN = {
        'KmSdp': function (callee, param1) {
            return callee(param1);
        }
    };
    var i = oOQfIN['KmSdp'](pi, input);
    console['log'](count(i));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));