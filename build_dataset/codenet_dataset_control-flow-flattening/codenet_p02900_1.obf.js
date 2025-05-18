function Main(input) {
    var lGSgyI = {
        'YBXKC': function (x, y) {
            return x == y;
        },
        'nxbFX': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'SMnbT': function (x, y) {
            return x % y;
        },
        'epbXw': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'REArS': function (x, y) {
            return x < y;
        },
        'oQOTv': function (x, y) {
            return x * y;
        },
        'LxFRd': function (x, y) {
            return x === y;
        },
        'XBoaC': function (x, y) {
            return x !== y;
        }
    };
    input = input['split']('\x20')['map'](x => x * 0x1);
    function gcd(a1, a2) {
        return lGSgyI['YBXKC'](a2, 0x0) ? a1 : lGSgyI['nxbFX'](gcd, a2, lGSgyI['SMnbT'](a1, a2));
    }
    var result = lGSgyI['epbXw'](gcd, input[0x0], input[0x1]);
    var answer = 0x1;
    for (var i = 0x2; lGSgyI['REArS'](lGSgyI['oQOTv'](i, i), result); i++) {
        if (lGSgyI['LxFRd'](result % i, 0x0)) {
            answer++;
            while (lGSgyI['LxFRd'](lGSgyI['SMnbT'](result, i), 0x0)) {
                result /= i;
            }
        }
    }
    if (lGSgyI['XBoaC'](result, 0x1)) {
        answer++;
    }
    console['log'](answer);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));