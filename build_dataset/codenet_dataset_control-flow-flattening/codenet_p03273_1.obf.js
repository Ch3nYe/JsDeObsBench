function main(input) {
    const qkOkZC = {
        'cvvqU': function (x, y) {
            return x < y;
        },
        'yebZr': function (x, y) {
            return x == y;
        },
        'JvtFU': function (x, y) {
            return x < y;
        },
        'hynsK': function (callee, param1) {
            return callee(param1);
        },
        'fthiq': function (x, y) {
            return x < y;
        },
        'bwexK': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'tgBOS': function (x, y) {
            return x + y;
        },
        'XfTmX': function (x, y) {
            return x != y;
        }
    };
    input = input['split'](/\s/);
    let h = qkOkZC['hynsK'](parseInt, input[0x0]);
    let w = qkOkZC['hynsK'](parseInt, input[0x1]);
    let mp = [];
    for (let i = 0x2; i < 0x2 + h; i++)
        mp['push'](input[i]);
    function check(x, y) {
        let res = 0x0;
        for (let i = 0x0; qkOkZC['cvvqU'](i, h); i++)
            if (qkOkZC['yebZr'](mp[i][x], '#')) {
                res++;
                break;
            }
        for (let j = 0x0; qkOkZC['JvtFU'](j, w); j++)
            if (mp[y][j] == '#') {
                res++;
                break;
            }
        return res == 0x2;
    }
    for (let i = 0x0; qkOkZC['fthiq'](i, h); i++) {
        ans = '';
        for (let j = 0x0; qkOkZC['fthiq'](j, w); j++)
            if (qkOkZC['bwexK'](check, j, i))
                ans = qkOkZC['tgBOS'](ans, mp[i][j]);
        if (qkOkZC['XfTmX'](ans, ''))
            console['log'](ans);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));