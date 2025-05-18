function Main(input) {
    var uDKNmn = {
        'untQB': function (x, y) {
            return x / y;
        },
        'Eqnsg': function (callee, param1) {
            return callee(param1);
        },
        'faitX': function (x, y) {
            return x == y;
        },
        'EJqEv': 'Yes'
    };
    var data = input['split']('\x0a');
    var split = uDKNmn['untQB'](uDKNmn['Eqnsg'](parseInt, data[0x0]), 0x2);
    var cdn = [];
    for (let i = 0x0; i < data[0x1]['length']; i += split) {
        cdn['push'](data[0x1]['slice'](i, i + split));
    }
    if (uDKNmn['faitX'](cdn[0x0], cdn[0x1])) {
        console['log'](uDKNmn['EJqEv']);
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));