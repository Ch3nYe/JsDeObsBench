function Main(input) {
    var VrEarT = {
        'nBdHe': function (x, y) {
            return x <= y;
        },
        'UxEfL': function (x, y) {
            return x === y;
        },
        'UOhCV': 'Yes'
    };
    ans = 'No';
    input = input['trim']()['split']('\x0a');
    rotate = input[0x0];
    for (i = 0x0; VrEarT['nBdHe'](i, input[0x0]['length']); i++) {
        head = rotate['substr'](0x0, 0x1);
        str = rotate['slice'](0x1) + head;
        if (VrEarT['UxEfL'](input[0x1], str)) {
            ans = VrEarT['UOhCV'];
            break;
        }
        rotate = str;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));