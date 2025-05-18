function Main(input) {
    var gzjcPV = {
        'cQxIT': function (x, y) {
            return x - y;
        },
        'njFWj': function (x, y) {
            return x - y;
        },
        'ieLTS': function (x, y) {
            return x <= y;
        },
        'TEbAs': function (x, y) {
            return x - y;
        },
        'rZxQt': function (x, y) {
            return x > y;
        },
        'TbVUy': function (x, y) {
            return x / y;
        },
        'YFAzS': function (x, y) {
            return x <= y;
        }
    };
    input = input['split']('\x0a');
    if (input[gzjcPV['cQxIT'](input['length'], 0x1)] === '') {
        input['pop']();
    }
    const N = input[0x0] - 0x0;
    var colors = [];
    var temp;
    var min, max, mid;
    for (var i = 0x1; i < input['length']; i++) {
        temp = gzjcPV['njFWj'](input[i], 0x0);
        if (colors['length'] === 0x0) {
            colors['push'](temp);
            continue;
        }
        if (gzjcPV['ieLTS'](temp, colors[0x0])) {
            colors['unshift'](temp);
            continue;
        }
        if (temp > colors[gzjcPV['TEbAs'](colors['length'], 0x1)]) {
            colors[gzjcPV['njFWj'](colors['length'], 0x1)] = temp;
            continue;
        }
        min = 0x0;
        max = colors['length'] - 0x1;
        while (gzjcPV['rZxQt'](max - min, 0x1)) {
            mid = Math['floor'](gzjcPV['TbVUy'](max + min, 0x2));
            if (gzjcPV['YFAzS'](colors[mid], temp)) {
                max = mid;
            } else {
                min = mid;
            }
        }
        colors[min] = temp;
    }
    console['log'](colors['length']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));