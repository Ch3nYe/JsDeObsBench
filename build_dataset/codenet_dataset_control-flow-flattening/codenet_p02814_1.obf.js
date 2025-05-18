function main(input) {
    var cDsrWZ = {
        'fpkMr': function (x, y) {
            return x - y;
        },
        'vGJsE': function (callee, param1) {
            return callee(param1);
        },
        'jhEKj': function (x, y) {
            return x / y;
        },
        'eSpSi': function (x, y) {
            return x / y;
        }
    };
    var N = cDsrWZ['fpkMr'](input[0x0]['split']('\x20')[0x0], 0x0);
    var M = input[0x0]['split']('\x20')[0x1] - 0x0;
    var list = input[0x1]['split']('\x20')['map'](v => v / 0x2);
    var l = cDsrWZ['vGJsE'](lcm, list);
    console['log'](Math['trunc'](cDsrWZ['jhEKj'](M, l)) - Math['trunc'](cDsrWZ['eSpSi'](M, l * 0x2)));
}
function lcm(args) {
    var a = args;
    var g = (n, m) => m ? g(m, n % m) : n;
    var l = (n, m) => n * m / g(n, m);
    var ans = a[0x0];
    for (var i = 0x1; i < a['length']; i++) {
        ans = l(ans, a[i]);
    }
    return ans;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));