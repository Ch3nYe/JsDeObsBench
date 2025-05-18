function Main(input) {
    var LetJCm = {
        'kDGzG': function (x, y) {
            return x - y;
        },
        'wXqwQ': function (x, y) {
            return x % y;
        },
        'IclfW': function (x, y) {
            return x <= y;
        },
        'omOkk': function (callee, param1) {
            return callee(param1);
        }
    };
    var s, K, ref;
    ref = input['split']('\x0a'), s = ref[0x0], K = LetJCm['omOkk'](parseInt, ref[0x1]);
    console['log'](Array['from'](s)['map']((v, i, arr) => {
        var code = v['charCodeAt']();
        if (i === LetJCm['kDGzG'](arr['length'], 0x1)) {
            code += LetJCm['wXqwQ'](K, 0x1a);
            code -= code > 0x7a ? 0x1a : 0x0;
            return String['fromCharCode'](code);
        } else {
            if (v === 'a')
                return v;
            return LetJCm['IclfW'](0x7b - code, K) ? (K -= LetJCm['kDGzG'](0x7b, code), 'a') : v;
        }
    })['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));