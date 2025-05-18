function Main(input) {
    var CAuxdC = {
        'aaXQE': function (x, y) {
            return x - y;
        },
        'gupPy': function (x, y) {
            return x - y;
        },
        'mmMMW': function (x, y) {
            return x - y;
        },
        'DNNBC': function (x, y) {
            return x >= y;
        },
        'NfozP': function (x, y) {
            return x - y;
        },
        'LuoAP': function (x, y) {
            return x == y;
        },
        'ybQag': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    var tmp0 = input[0x0]['split']('\x20');
    var N = CAuxdC['aaXQE'](tmp0[0x0], 0x0);
    var K = CAuxdC['aaXQE'](tmp0[0x1], 0x0);
    var tmp1 = input[0x1]['split']('\x20');
    var point = {
        'r': CAuxdC['gupPy'](tmp1[0x2], 0x0),
        's': CAuxdC['mmMMW'](tmp1[0x0], 0x0),
        'p': CAuxdC['gupPy'](tmp1[0x1], 0x0)
    };
    var str = input[0x2];
    var sum = 0x0;
    for (var i = 0x0; i < N; i++) {
        var char = str[i];
        var charBK = '';
        if (CAuxdC['DNNBC'](CAuxdC['mmMMW'](i, K), 0x0)) {
            charBK = str[CAuxdC['NfozP'](i, K)];
        }
        if (CAuxdC['LuoAP'](char, charBK)) {
            str = CAuxdC['ybQag'](str['slice'](0x0, i) + 'B', str['slice'](i + 0x1));
            continue;
        }
        sum += point[char];
    }
    console['log'](sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));