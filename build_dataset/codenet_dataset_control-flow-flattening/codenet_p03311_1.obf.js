function Main(input) {
    var yNjEON = {
        'nlSHE': function (x, y) {
            return x - y;
        },
        'OpSsd': function (x, y) {
            return x / y;
        },
        'rPWTx': function (x, y) {
            return x === y;
        },
        'AyUEG': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    if (yNjEON['rPWTx'](input[yNjEON['AyUEG'](input['length'], 0x1)], '')) {
        input['pop']();
    }
    const N = yNjEON['AyUEG'](input[0x0]['split']('\x20')[0x0], 0x0);
    var array = input[0x1]['split']('\x20')['map']((e, i) => {
        return yNjEON['nlSHE'](e, i) - 0x1;
    })['sort']((a, b) => {
        return yNjEON['nlSHE'](a, b);
    });
    console['log'](array['reduce']((acc, cur) => {
        return acc + Math['abs'](yNjEON['nlSHE'](cur, array[Math['floor'](yNjEON['OpSsd'](array['length'], 0x2))]));
    }, 0x0));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function permutation(n, k) {
    var FQobcb = { 'SHMly': '2|3|4|0|1' };
    var ScAncC = FQobcb['SHMly']['split']('|');
    var sGBQey = 0x0;
    while (!![]) {
        switch (ScAncC[sGBQey++]) {
        case '0':
            for (var i = 0x0; i < k; i++) {
                next = [];
                ret['forEach'](e => {
                    for (var k = 0x1; gFeiyd['xMQsP'](k, n); k++) {
                        if (!e['includes'](k)) {
                            next['push'](e['concat']([k]));
                        }
                    }
                });
                ret = next['concat']([]);
            }
            continue;
        case '1':
            return ret;
        case '2':
            var gFeiyd = {
                'xMQsP': function (x, y) {
                    return x <= y;
                }
            };
            continue;
        case '3':
            var ret = [[]];
            continue;
        case '4':
            var next;
            continue;
        }
        break;
    }
}