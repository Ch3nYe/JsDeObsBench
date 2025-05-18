function main(input) {
    const jhXFPl = {
        'aEXfr': function (x, y) {
            return x >= y;
        },
        'oIpjY': function (x, y) {
            return x - y;
        },
        'SJndf': 'YES'
    };
    const s = input['trim']();
    let array = s['split']('')['reduce']((a, c) => {
        a[c['charCodeAt']() - 'a'['charCodeAt']()]++;
        return a;
    }, [
        0x0,
        0x0,
        0x0
    ]);
    if (jhXFPl['aEXfr'](jhXFPl['oIpjY'](Math['max'](...array), Math['min'](...array)), 0x2)) {
        console['log']('NO');
    } else {
        console['log'](jhXFPl['SJndf']);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));