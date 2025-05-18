function main(input) {
  let tmp = input.split("\n");
  let vacations = [];
  for (let i = 1; i < tmp.length; i++ ){
    let vacation = tmp[i].split(" ").map(element => parseInt(element, 10));
    vacations.push(vacation);
  }
  let dp = [0, 0, 0];
  for (let day = 0; day < vacations.length; day++) {
    let vacation = vacations[day];
    let new_dp = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if (i !== j) {
           new_dp[j] = Math.max(new_dp[j], dp[i] + vacation[j]);
        }
      }
    }
    dp = new_dp;
  }
  console.log(Math.max(dp[0], dp[1], dp[2]));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));