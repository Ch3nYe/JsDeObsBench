var a0_0x4f2734 = a0_0x4904;
function a0_0x4904(nQddIy, key) {
    var stringArray = a0_0x11fe();
    a0_0x4904 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4904(nQddIy, key);
}
function Main(input) {
    var _0xec971 = a0_0x4904;
    input = input[_0xec971(0x0)]('\x20')['map'](x => x * 0x1);
    function gcd(a1, a2) {
        return a2 == 0x0 ? a1 : gcd(a2, a1 % a2);
    }
    var result = gcd(input[0x0], input[0x1]);
    var answer = 0x1;
    for (var i = 0x2; i * i < result; i++) {
        if (result % i === 0x0) {
            if (_0xec971(0x1) === _0xec971(0x2)) {
                if (result % i === 0x0) {
                    answer++;
                    while (result % i === 0x0) {
                        result /= i;
                    }
                }
            } else {
                answer++;
                while (result % i === 0x0) {
                    result /= i;
                }
            }
        }
    }
    if (result !== 0x1) {
        answer++;
    }
    console[_0xec971(0x3)](answer);
}
function a0_0x11fe() {
    var _0x53707a = [
        'split',
        'AwScC',
        'IlpfP',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x11fe = function () {
        return _0x53707a;
    };
    return a0_0x11fe();
}
Main(require('fs')[a0_0x4f2734(0x4)](a0_0x4f2734(0x5), 'utf-8'));