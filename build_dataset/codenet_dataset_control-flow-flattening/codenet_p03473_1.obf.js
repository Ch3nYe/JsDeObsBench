function Main(input) {
    var UFVPRW = {
        'guzWs': function (x, y) {
            return x + y;
        },
        'lTcyH': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']();
    console['log'](UFVPRW['guzWs'](0x18, UFVPRW['lTcyH'](0x18, input)));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));