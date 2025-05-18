let content = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', buf => {
  content += buf;
});

process.stdin.on('end', () => {
  const lines = content
    .trim()
    .split('\n')
    .slice(0, -1);

  const result = lines.map(num =>
    num
      .split('')
      .map(n => parseInt(n, 10))
      .reduce((prev, cur) => prev + cur)
  );

  console.log(result.join('\n'));
});
