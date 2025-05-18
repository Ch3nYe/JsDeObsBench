function move(x, arr) {
    var ttkTrG = {
        'wNuBs': '13|12|11|1|6|10|7|8|3|2|5|0|9|4',
        'iGbif': function (x, y) {
            return x == y;
        },
        'rdWXz': function (x, y) {
            return x == y;
        }
    };
    var EtxuWn = ttkTrG['wNuBs']['split']('|');
    var UEfXpX = 0x0;
    while (!![]) {
        switch (EtxuWn[UEfXpX++]) {
        case '0':
            if (ttkTrG['iGbif'](x, 'R'))
                after = [
                    d1,
                    d3,
                    d5,
                    d2,
                    d4,
                    d6
                ];
            continue;
        case '1':
            var d4 = arr[0x3];
            continue;
        case '2':
            if (ttkTrG['iGbif'](x, 'E'))
                after = [
                    d4,
                    d2,
                    d1,
                    d6,
                    d5,
                    d3
                ];
            continue;
        case '3':
            if (x == 'S')
                after = [
                    d5,
                    d1,
                    d3,
                    d4,
                    d6,
                    d2
                ];
            continue;
        case '4':
            return after;
        case '5':
            if (ttkTrG['iGbif'](x, 'W'))
                after = [
                    d3,
                    d2,
                    d6,
                    d1,
                    d5,
                    d4
                ];
            continue;
        case '6':
            var d5 = arr[0x4];
            continue;
        case '7':
            var after = [];
            continue;
        case '8':
            if (x == 'N')
                after = [
                    d2,
                    d6,
                    d3,
                    d4,
                    d1,
                    d5
                ];
            continue;
        case '9':
            if (ttkTrG['rdWXz'](x, 'L'))
                after = [
                    d1,
                    d4,
                    d2,
                    d5,
                    d3,
                    d6
                ];
            continue;
        case '10':
            var d6 = arr[0x5];
            continue;
        case '11':
            var d3 = arr[0x2];
            continue;
        case '12':
            var d2 = arr[0x1];
            continue;
        case '13':
            var d1 = arr[0x0];
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var dice;
var sum;
for (var i = 0x0; i < Arr['length']; i++) {
    var v = Arr[i]['charAt'](0x0);
    if (v['match'](/[NSEWRL]/)) {
        dice = move(v, dice);
        sum += dice[0x0];
    } else {
        if (i != 0x0)
            console['log'](sum);
        dice = [
            0x1,
            0x2,
            0x3,
            0x4,
            0x5,
            0x6
        ];
        sum = 0x1;
    }
    if (Arr[i] == '0')
        break;
}