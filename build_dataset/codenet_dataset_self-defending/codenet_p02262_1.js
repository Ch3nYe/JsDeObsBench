const config = {
    input: '/dev/stdin',
    newline: '\n'
};

const line = require('fs').readFileSync(config.input, 'utf-8').split(config.newline);

let cnt = 0;

const isort = (arr, g) => {
    for (let i = g; i < arr.length; i++) {
        let v = arr[i];
        let j = i - g;
        while (j >= 0 && arr[j] > v) {
            arr[j+g] = arr[j];
            j = j - g;
            cnt++;
        }
        arr[j+g] = v;
    }

    return arr;
};

const shellSort = (arr) => {
    const g = arr.map((_, i) => 3 * i + 1).filter(x => x <= arr.length).reverse();

    console.log(g.length);
    console.log(g.map(x => x.toString()).join(' '));

    for (i = 0; i < arr.length; i++) {
        arr = isort(arr, g[i]);
    }

    return arr;
};

const n = parseInt(line[0]);
const data = line.slice(1, n+1).map(x => parseInt(x));
const sorted = shellSort(data);

console.log(cnt);
console.log(sorted.map(x => x.toString()).join('\n'));

