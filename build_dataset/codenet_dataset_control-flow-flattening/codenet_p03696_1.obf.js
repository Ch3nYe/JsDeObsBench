function myout(text) {
    console['log'](text);
}
function Main(input) {
    var JQvtSs = {
        'QWnAi': '5|6|2|7|3|4|0|1|8',
        'wnoUX': function (x, y) {
            return x + y;
        },
        'IdFsI': function (x, y) {
            return x != y;
        },
        'bkMtU': function (x, y) {
            return x + y;
        },
        'oBpVK': function (x, y) {
            return x == y;
        },
        'pqsgO': function (callee, param1) {
            return callee(param1);
        }
    };
    var ejSzGh = JQvtSs['QWnAi']['split']('|');
    var tlAdEY = 0x0;
    while (!![]) {
        switch (ejSzGh[tlAdEY++]) {
        case '0':
            for (var i = 0x0; i < right; i++) {
                input[0x1] = JQvtSs['wnoUX']('(', input[0x1]);
            }
            continue;
        case '1':
            for (var i = 0x0; i < left; i++) {
                input[0x1] += ')';
            }
            continue;
        case '2':
            var left = 0x0;
            continue;
        case '3':
            while (JQvtSs['IdFsI'](tmpInput['indexOf']('()'), -0x1)) {
                tmpInput = tmpInput['replace']('()', '');
            }
            continue;
        case '4':
            for (var i = 0x0; i < tmpInput['length']; i++) {
                var tmp = tmpInput['slice'](i, JQvtSs['bkMtU'](i, 0x1));
                if (JQvtSs['oBpVK'](tmp, '(')) {
                    left++;
                } else if (JQvtSs['oBpVK'](tmp, ')')) {
                    right++;
                }
            }
            continue;
        case '5':
            input = input['trim']()['split']('\x0a');
            continue;
        case '6':
            var tmpInput = JSON['parse'](JSON['stringify'](input[0x1]));
            continue;
        case '7':
            var right = 0x0;
            continue;
        case '8':
            JQvtSs['pqsgO'](myout, input[0x1]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());