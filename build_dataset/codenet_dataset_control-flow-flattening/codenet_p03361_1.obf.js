const main = input => {
    const scxiTs = { 'ysfZz': 'Yes' };
    const lines = input['split']('\x0a');
    const [h, w] = lines[0x0]['split']('\x20')['map'](Number);
    const data = Array(h)['fill'](![])['map']((_, i) => lines[i + 0x1]['split']('')['slice'](0x0, w)['map'](c => c === '#'));
    const ans = data['every']((row, i) => row['every']((cell, j) => !cell || (data[i - 0x1] || [])[j] || (data[i + 0x1] || [])[j] || data[i][j - 0x1] || data[i][j + 0x1]));
    console['log'](ans ? scxiTs['ysfZz'] : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));