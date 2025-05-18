let content = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', buf => {
  content += buf;
});

process.stdin.on('end', () => {
  const stack = [];
  const tokens = content
    .trim()
    .split(' ')
    .map(line => {
      const num = parseInt(line, 10);
      return isNaN(num) ? line : num;
    });

  const opTokens = '+-/*'.split('');
  for (const token of tokens) {
    if (opTokens.includes(token)) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(expr(token, a, b));
    } else {
      stack.push(token);
    }

  }

  console.log(stack.pop());
});

const expr = (op, a, b) => {
  switch(op) {
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '+':
      return a + b;
    case '-':
      return a - b;
  }
};
