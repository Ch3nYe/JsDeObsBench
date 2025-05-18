const main = input => {
    const jIjVXP = {
        'qaaWw': function (x, y) {
            return x - y;
        },
        'fgMfu': function (x, y) {
            return x / y;
        },
        'qNWtt': function (x, y) {
            return x / y;
        }
    };
    var d = input[0x1]['split']('\x20')['map'](p => parseInt(p, 0xa))['sort']((p, q) => p > q ? 0x1 : -0x1);
    console['log'](jIjVXP['qaaWw'](d[jIjVXP['fgMfu'](d['length'], 0x2)], d[jIjVXP['qaaWw'](jIjVXP['qNWtt'](d['length'], 0x2), 0x1)]));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));