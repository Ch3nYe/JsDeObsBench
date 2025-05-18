function Main(input) {
    var vAUMVX = {
        'IhOMY': function (x, y) {
            return x === y;
        },
        'EzJPd': function (x, y) {
            return x - y;
        },
        'YgvuD': function (x, y) {
            return x + y;
        },
        'VwPif': function (x, y) {
            return x * y;
        },
        'BgyGk': function (x, y) {
            return x - y;
        },
        'iaTxV': function (x, y) {
            return x - y;
        },
        'OxbRV': function (x, y) {
            return x % y;
        },
        'EhcNw': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x20')['map'](a => parseInt(a));
    var N = input[0x0];
    var M = input[0x1];
    var ans = 0x0;
    if (N === 0x1 && vAUMVX['IhOMY'](M, 0x1))
        ans = 0x1;
    else if (vAUMVX['IhOMY'](N, 0x1) || vAUMVX['IhOMY'](M, 0x1))
        ans = vAUMVX['EzJPd'](vAUMVX['YgvuD'](N, M), 0x3);
    else
        ans = vAUMVX['VwPif'](vAUMVX['BgyGk'](N, 0x2), M - 0x2);
    if (ans > 0x1ff973cafa8000) {
        ans = vAUMVX['VwPif'](Math['floor'](vAUMVX['iaTxV'](N, 0x2) / 0x2710), M - 0x2);
        tmp = vAUMVX['OxbRV'](N - 0x2, 0x2710) * (M - 0x2);
        ans += Math['floor'](tmp / 0x2710);
        tmp = vAUMVX['EhcNw']('0000', vAUMVX['OxbRV'](tmp, 0x2710))['slice'](-0x4);
        ans += tmp;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));