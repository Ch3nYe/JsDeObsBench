'use strict';
function Main(input) {
    var TeYfAA = {
        'AOrTM': function (callee, param1) {
            return callee(param1);
        },
        'XuTTO': function (x, y) {
            return x < y;
        },
        'Wipqi': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    var input0 = input[0x0]['split']('\x20');
    var N = parseInt(input0[0x0]);
    var T = TeYfAA['AOrTM'](parseInt, input0[0x1]);
    var t = input[0x1]['split']('\x20');
    for (var i = 0x0; TeYfAA['XuTTO'](i, N); i++) {
        t[i] = parseInt(t[i]);
    }
    var count = 0x0;
    var t_i;
    for (var i = 0x1; TeYfAA['XuTTO'](i, N); i++) {
        t_i = t[i] - t[TeYfAA['Wipqi'](i, 0x1)];
        if (TeYfAA['XuTTO'](t_i, T)) {
            count += t_i;
        } else {
            count += T;
        }
    }
    console['log'](count + T);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));