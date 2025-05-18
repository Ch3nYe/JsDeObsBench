function Main(input) {
    var kFyFyn = {
        'uujlU': 'YAKI',
        'zreYJ': 'Yes'
    };
    if (input['substr'](0x0, 0x4) == kFyFyn['uujlU']) {
        console['log'](kFyFyn['zreYJ']);
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());