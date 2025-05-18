function Main(input) {
    const kqLwpW = {
        'lAYuy': function (x, y) {
            return x === y;
        },
        'eRGDa': function (x, y) {
            return x * y;
        },
        'dXEhp': function (x, y) {
            return x < y;
        }
    };
    let [l, ...valArr] = input['split']('\x0a');
    valArr = valArr['map'](e => parseFloat(e));
    let result = [];
    for (let ele of valArr) {
        let temp = valArr['map'](e => {
            if (e !== ele && kqLwpW['lAYuy'](kqLwpW['eRGDa'](e, ele) % 0x1, 0x0) && kqLwpW['dXEhp'](ele, e)) {
                return [
                    ele,
                    e
                ];
            }
        });
        temp = temp['filter'](e => e !== undefined);
        if (temp['length']) {
            result = [
                ...result,
                ...temp
            ];
        }
    }
    console['log'](result['length']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));