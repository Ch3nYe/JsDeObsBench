function main(input) {
    const WePgyw = {
        'jyliC': function (x, y) {
            return x === y;
        }
    };
    const inputList = input['split']('');
    const list = [];
    inputList['forEach'](il => {
        if (!list['some'](l => l === il)) {
            list['push'](il);
        }
    });
    const result = WePgyw['jyliC'](list['length'], 0x2) ? 'Yes' : 'No';
    console['log'](result);
}
;
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));