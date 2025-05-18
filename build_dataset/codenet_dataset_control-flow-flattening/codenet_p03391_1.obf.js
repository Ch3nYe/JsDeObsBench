'use strict';
function myin() {
    var IspHRV = {
        'rfMRK': function (callee, param1) {
            return callee(param1);
        },
        'Bvkiq': '/dev/stdin'
    };
    return IspHRV['rfMRK'](require, 'fs')['readFileSync'](IspHRV['Bvkiq'], 'utf8')['trim']();
}
function myout(t) {
    console['log'](t);
}
function myconv(i, no) {
    var hNEUvF = {
        'DRBVM': function (callee, param1) {
            return callee(param1);
        }
    };
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return hNEUvF['DRBVM'](parseInt, i);
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
    }
}
function Main(input) {
    var RJVAHd = {
        'XlWke': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'YoOiG': function (callee, param1) {
            return callee(param1);
        }
    };
    input = RJVAHd['XlWke'](myconv, input, 0x3);
    input['shift']();
    var output = 0x0;
    for (var i = 0x0; i < input['length']; i++) {
        var A = RJVAHd['YoOiG'](parseInt, input[i]['split']('\x20')[0x0]);
        var B = RJVAHd['YoOiG'](parseInt, input[i]['split']('\x20')[0x1]);
        if (A < B) {
            output += B;
        }
    }
    RJVAHd['YoOiG'](myout, output);
}
Main(myin());