function Main(arg) {
    var qiKUaa = {
        'qyiwq': function (x, y) {
            return x === y;
        },
        'tDaUm': 'Sunny',
        'JRVim': 'Cloudy',
        'OAyVS': function (x, y) {
            return x === y;
        },
        'UpWZm': 'Rainy'
    };
    var N = arg['split']('\x0a')[0x0];
    if (qiKUaa['qyiwq'](N, qiKUaa['tDaUm'])) {
        console['log'](qiKUaa['JRVim']);
    } else if (qiKUaa['OAyVS'](N, qiKUaa['JRVim'])) {
        console['log']('Rainy');
    } else if (qiKUaa['qyiwq'](N, qiKUaa['UpWZm'])) {
        console['log'](qiKUaa['tDaUm']);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));