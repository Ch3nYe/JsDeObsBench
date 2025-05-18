require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a\x0a')['map'](function (i) {
    var KwvjSj = {
        'ASrIa': function (x, y) {
            return x != y;
        },
        'JdJhT': '1111',
        'xqycx': '1101',
        'WaKgh': '101',
        'ugJKs': function (x, y) {
            return x != y;
        },
        'pouzF': '10000001'
    };
    c = i['replace'](/\s/g, '')['split']('')['join']('');
    console['log'](KwvjSj['ASrIa'](c['indexOf'](KwvjSj['JdJhT']), -0x1) ? 'C' : KwvjSj['ASrIa'](c['indexOf']('111'), -0x1) ? 'F' : KwvjSj['ASrIa'](c['indexOf'](KwvjSj['xqycx']), -0x1) ? 'D' : KwvjSj['ASrIa'](c['indexOf'](KwvjSj['WaKgh']), -0x1) ? 'B' : c['indexOf']('1000001') != -0x1 ? 'G' : KwvjSj['ugJKs'](c['indexOf'](KwvjSj['pouzF']), -0x1) ? 'A' : 'E');
});