function main(_0x2ea585) {
    input = _0x2ea585['split']('');
    len = input['length'];
    temp = [];
    for (i = 0x0; i < len; i += 0x1) {
        if (temp['indexOf'](input[i]) === -0x1) {
            temp['push'](input[i]);
        } else {
            console['log']('no');
            return;
        }
    }
    console['log']('yes');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));