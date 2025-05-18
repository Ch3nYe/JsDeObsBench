function Main(input) {
    var xMIvDX = {
        'bUPOv': function (x, y) {
            return x % y;
        },
        'VyfiZ': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x20');
    X = 0x2;
    N = input['map'](input => parseInt(input, 0xa));
    if (xMIvDX['bUPOv'](N, X) == 0x0) {
        console['log'](N[0x0]);
    } else {
        var ans = xMIvDX['VyfiZ'](N[0x0], X);
        console['log'](ans);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));