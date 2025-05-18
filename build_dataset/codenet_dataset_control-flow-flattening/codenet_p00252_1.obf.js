function Main(input) {
    var KEZsPl = {
        'UexVu': '110',
        'FwoOc': function (x, y) {
            return x == y;
        },
        'nJZJo': '001',
        'jwqmP': 'Open',
        'nVgkd': 'Close'
    };
    a = input['split']('\x0a')[0x0]['split']('\x20')['join']('');
    console['log'](a == KEZsPl['UexVu'] || KEZsPl['FwoOc'](a, KEZsPl['nJZJo']) ? KEZsPl['jwqmP'] : KEZsPl['nVgkd']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));