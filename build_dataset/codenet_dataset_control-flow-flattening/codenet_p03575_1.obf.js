function Main(input) {
    var NeSudn = {
        'KPkuo': '6|1|5|3|0|4|2',
        'nHilZ': function (x, y) {
            return x <= y;
        },
        'mkzCH': function (x, y) {
            return x - y;
        },
        'gfCCy': function (x, y) {
            return x <= y;
        },
        'DswNO': function (x, y) {
            return x != y;
        },
        'swCjm': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var WGDRif = NeSudn['KPkuo']['split']('|');
    var jmaDKQ = 0x0;
    while (!![]) {
        switch (WGDRif[jmaDKQ++]) {
        case '0':
            var ans = 0x0;
            continue;
        case '1':
            var M = input[0x0]['split']('\x20')[0x1] - 0x0;
            continue;
        case '2':
            console['log'](ans);
            continue;
        case '3':
            for (var i = 0x1; NeSudn['nHilZ'](i, M); i++) {
                var zsSLAY = '5|0|1|2|3|4'['split']('|');
                var BusbTK = 0x0;
                while (!![]) {
                    switch (zsSLAY[BusbTK++]) {
                    case '0':
                        var b = NeSudn['mkzCH'](input[i]['split']('\x20')[0x1], 0x0);
                        continue;
                    case '1':
                        list[a] = list[a] || {};
                        continue;
                    case '2':
                        list[b] = list[b] || {};
                        continue;
                    case '3':
                        list[a][b] = i;
                        continue;
                    case '4':
                        list[b][a] = i;
                        continue;
                    case '5':
                        var a = NeSudn['mkzCH'](input[i]['split']('\x20')[0x0], 0x0);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '4':
            for (var i = 0x1; NeSudn['gfCCy'](i, M); i++) {
                if (NeSudn['DswNO'](NeSudn['swCjm'](check, list, i), N))
                    ans++;
            }
            continue;
        case '5':
            var list = {};
            continue;
        case '6':
            var N = NeSudn['mkzCH'](input[0x0]['split']('\x20')[0x0], 0x0);
            continue;
        }
        break;
    }
}
function check(list, i) {
    var kROLCD = { 'Xikhz': '1|2|3|0|4' };
    var rmQovL = kROLCD['Xikhz']['split']('|');
    var bgMurt = 0x0;
    while (!![]) {
        switch (rmQovL[bgMurt++]) {
        case '0':
            while (stack['length'] > 0x0) {
                var now = stack['splice'](0x0, 0x1)[0x0];
                if (checked[now])
                    continue;
                checked[now] = !![];
                var next = Object['keys'](list[now]);
                next['forEach'](nxt => {
                    if (trPvzq['QcKUQ'](list[now][nxt], i)) {
                        stack['push'](nxt);
                    }
                });
            }
            continue;
        case '1':
            var trPvzq = {
                'QcKUQ': function (x, y) {
                    return x != y;
                }
            };
            continue;
        case '2':
            var stack = [0x1];
            continue;
        case '3':
            var checked = {};
            continue;
        case '4':
            return Object['keys'](checked)['length'];
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));