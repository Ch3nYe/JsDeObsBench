const main = input => {
  const lines = input.split('\n');
  const [h, w] = lines[0].split(' ').map(Number);

  const data = Array(h).fill(false).map((_, i) =>
    lines[i + 1]
      .split('')
      .slice(0, w)
      .map(c => c === '#')
  );

  const ans = data.every((row, i) =>
    row.every(
      (cell, j) =>
        !cell ||
        (data[i - 1] || [])[j] ||
        (data[i + 1] || [])[j] ||
        data[i][j - 1] ||
        data[i][j + 1]
    )
  );
  console.log(ans ? 'Yes' : 'No');
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
