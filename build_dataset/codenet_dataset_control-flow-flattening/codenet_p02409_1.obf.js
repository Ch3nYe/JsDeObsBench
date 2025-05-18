function initOfficialHouse(bMax, fMax, rMax) {
    var AMLoHY = {
        'JgmRI': function (callee, param1) {
            return callee(param1);
        },
        'gnGSR': function (x, y) {
            return x < y;
        },
        'yNmFo': function (callee, param1) {
            return callee(param1);
        },
        'XMaWS': function (x, y) {
            return x < y;
        },
        'HGdjW': function (callee, param1) {
            return callee(param1);
        }
    };
    var o = AMLoHY['JgmRI'](Array, bMax);
    for (var b = 0x0; AMLoHY['gnGSR'](b, bMax); b++) {
        o[b] = AMLoHY['yNmFo'](Array, fMax);
        for (var f = 0x0; AMLoHY['XMaWS'](f, fMax); f++) {
            o[b][f] = AMLoHY['HGdjW'](Array, rMax);
            for (var r = 0x0; r < rMax; r++) {
                o[b][f][r] = 0x0;
            }
        }
    }
    return o;
}
function toString(o) {
    var DMwxMq = {
        'bGmBl': function (x, y) {
            return x + y;
        },
        'FAtPT': '\x0a####################\x0a'
    };
    return o['map'](function (b) {
        return b['map'](function (f) {
            return DMwxMq['bGmBl']('\x20', f['join']('\x20'));
        })['join']('\x0a');
    })['join'](DMwxMq['FAtPT']);
}
const chunk = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = chunk['trim']()['split']('\x0a');
lines['shift']();
var o = initOfficialHouse(0x4, 0x3, 0xa);
lines['forEach'](function (line) {
    var aHMinD = {
        'sKVfo': function (x, y) {
            return x - y;
        },
        'LADIC': function (x, y) {
            return x - y;
        }
    };
    var bfrv = line['split']('\x20')['map'](Number);
    var b = bfrv[0x0], f = bfrv[0x1], r = bfrv[0x2], v = bfrv[0x3];
    o[aHMinD['sKVfo'](b, 0x1)][aHMinD['sKVfo'](f, 0x1)][aHMinD['LADIC'](r, 0x1)] += v;
});
console['log'](toString(o));