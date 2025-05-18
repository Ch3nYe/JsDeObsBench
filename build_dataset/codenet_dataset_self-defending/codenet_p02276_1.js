const config = {
    input: '/dev/stdin',
    newline: '\n'
};

const line = require('fs').readFileSync(config.input, 'utf-8').split(config.newline);

const list = line[1].split(' ').map(x => parseInt(x));

const partition = arr => {
    const x = arr[arr.length-1];
    const result = [...arr];
    let i = -1;
    for (let j = 0; j < arr.length - 1; j++) {
        if (result[j] <= x) {
            i++;
            const tmp = result[i];
            result[i] = result[j];
            result[j] = tmp;
        }
    }
    const tmp = result[i+1];
    result[i+1] = result[arr.length-1];
    result[arr.length-1] = tmp;

    return [i+1, result];
}

const res = partition(list);

console.log(res[1].map((x, i) => i === res[0] ? `[${x}]` : x.toString()).join(' '));

