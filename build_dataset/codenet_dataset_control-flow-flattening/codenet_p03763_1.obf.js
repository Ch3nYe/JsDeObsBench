function Main(input) {
    var wJLPzZ = {
        'Yjvqp': function (x, y) {
            return x === y;
        },
        'IFfFL': 'abcdefghijklmnopqrstuvwxyz',
        'WmHCb': function (x, y) {
            return x < y;
        }
    };
    input = input['split']('\x0a');
    var S = wJLPzZ['IFfFL']['split']('');
    var array = new Array(0x1a);
    array['fill'](0x0);
    var temp;
    for (var i = 0x1; wJLPzZ['WmHCb'](i, input['length']); i++) {
        temp = new Array(0x1a);
        temp['fill'](0x0);
        for (var j = 0x0; j < input[i]['length']; j++) {
            temp[S['findIndex'](e => {
                return wJLPzZ['Yjvqp'](e, input[i][j]);
            })]++;
        }
        for (var j = 0x0; j < 0x1a; j++) {
            if (array[j] > temp[j] || i === 0x1) {
                array[j] = temp[j];
            }
        }
    }
    var ret = '';
    array['forEach']((e, i) => {
        ret += S[i]['repeat'](e);
    });
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));