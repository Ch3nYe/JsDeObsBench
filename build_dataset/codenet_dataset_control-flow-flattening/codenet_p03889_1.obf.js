function Main(input) {
    const VltdPR = {
        'zHwps': function (x, y) {
            return x !== y;
        },
        'wTkkt': function (x, y) {
            return x % y;
        },
        'etGRI': function (x, y) {
            return x / y;
        },
        'VJUkt': function (x, y) {
            return x === y;
        },
        'Iwcot': 'Yes'
    };
    const arr = input['split']('');
    if (VltdPR['zHwps'](VltdPR['wTkkt'](arr['length'], 0x2), 0x0)) {
        console['log']('No');
        return;
    }
    const a = arr['slice'](0x0, VltdPR['etGRI'](arr['length'], 0x2));
    const b = arr['slice'](VltdPR['etGRI'](arr['length'], 0x2), arr['length']);
    if (VltdPR['VJUkt'](a['join'](''), b['reverse']()['map'](mirror)['join'](''))) {
        console['log'](VltdPR['Iwcot']);
    } else {
        console['log']('No');
    }
    function mirror(a) {
        switch (a) {
        case 'b':
            return 'd';
        case 'd':
            return 'b';
        case 'p':
            return 'q';
        case 'q':
            return 'p';
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));