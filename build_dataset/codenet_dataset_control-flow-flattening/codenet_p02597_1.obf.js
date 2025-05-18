function MainD(input) {
    const DaEkPa = {
        'oNPUN': function (x, y) {
            return x < y;
        },
        'cvQpU': function (x, y) {
            return x === y;
        },
        'kkBzA': function (x, y) {
            return x - y;
        },
        'UrPfr': function (x, y) {
            return x === y;
        }
    };
    const arr = input['split']('\x0a');
    const N = arr[0x0];
    const Ci = arr[0x1]['split']('');
    let answer = 0x0;
    let Wnum = 0x0;
    for (let i = 0x0; DaEkPa['oNPUN'](i, Ci['length']); i++) {
        if (Ci[i] === 'W') {
            Wnum++;
        }
    }
    if (DaEkPa['cvQpU'](Wnum, 0x0))
        return console['log'](0x0);
    for (let i = DaEkPa['kkBzA'](Wnum, 0x1); DaEkPa['oNPUN'](i, Ci['length']); i++) {
        if (DaEkPa['UrPfr'](Ci[i], 'R')) {
            answer++;
        }
    }
    console['log'](answer);
}
MainD(require('fs')['readFileSync']('/dev/stdin', 'utf8'));