function main(input) {
    var NCikcf = {
        'wjSIH': function (x, y) {
            return x == y;
        },
        'dHZwN': function (x, y) {
            return x == y;
        },
        'Wjonw': function (x, y) {
            return x == y;
        },
        'yypFf': 'Yes'
    };
    var aa = input['indexOf']('a');
    var bb = input['indexOf']('b');
    var cc = input['indexOf']('c');
    if (NCikcf['wjSIH'](aa, -0x1) || NCikcf['dHZwN'](bb, -0x1) || NCikcf['Wjonw'](cc, -0x1)) {
        console['log']('No');
    } else {
        console['log'](NCikcf['yypFf']);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));