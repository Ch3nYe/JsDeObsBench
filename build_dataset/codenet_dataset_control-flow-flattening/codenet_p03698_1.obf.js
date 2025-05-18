function main(data) {
    var uqoDXu = {
        'aLaTu': function (x, y) {
            return x < y;
        },
        'Cbxxz': function (x, y) {
            return x === y;
        }
    };
    input = data['split']('');
    len = input['length'];
    temp = [];
    for (i = 0x0; uqoDXu['aLaTu'](i, len); i += 0x1) {
        if (uqoDXu['Cbxxz'](temp['indexOf'](input[i]), -0x1)) {
            temp['push'](input[i]);
        } else {
            console['log']('no');
            return;
        }
    }
    console['log']('yes');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));