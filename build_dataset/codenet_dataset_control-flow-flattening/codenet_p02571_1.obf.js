(input => {
    const BsqjqN = {
        'oWgMZ': function (x, y) {
            return x < y;
        },
        'RPOka': function (x, y) {
            return x + y;
        },
        'KFzJF': function (x, y) {
            return x < y;
        },
        'ugwWJ': function (x, y) {
            return x !== y;
        },
        'JOBJu': function (x, y) {
            return x > y;
        }
    };
    const [S, T] = input['trim']()['split']('\x0a');
    const sl = S['length'];
    const tl = T['length'];
    const range = sl - tl;
    let min = tl;
    for (let i = 0x0; BsqjqN['oWgMZ'](i, range); i++) {
        const target = S['slice'](i, BsqjqN['RPOka'](tl, i));
        let diff = 0x0;
        for (let j = 0x0; BsqjqN['KFzJF'](j, tl); j++) {
            if (BsqjqN['ugwWJ'](target[j], T[j]))
                diff += 0x1;
        }
        if (BsqjqN['JOBJu'](min, diff)) {
            min = diff;
        }
    }
    console['log'](min);
})(require('fs')['readFileSync']('/dev/stdin', 'utf8'));