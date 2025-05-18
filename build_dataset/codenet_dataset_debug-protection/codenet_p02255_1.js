function main(lines) {
    const n = lines.split('\n')[0]
    const An = lines.split('\n')[1].split(' ').map(Number)
    // 初期の配列
    console.log(An.join(' '))

    for(let i=1; i<n; i++){
        value = An[i]
        let j = i - 1
        while(j>=0 && value<An[j]){
            An[j+1] = An[j]
            j--
        }

        An[j+1] = value

        console.log(An.join(' '))
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

