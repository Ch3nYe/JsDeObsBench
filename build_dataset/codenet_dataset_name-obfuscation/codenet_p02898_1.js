"use strict";

function main(input) {
  let pass_friend_num = parseInt(input.split("\n")[0].split(" ")[0]);
  const pass_height = parseInt(input.split("\n")[0].split(" ")[1]);

  const friend_height_data = input.split("\n")[1].split(" ");

  for (let i = 0; i < friend_height_data.length; i++) {
    if (pass_height > parseInt(friend_height_data[i])) {
      pass_friend_num--;
    }
  }

  console.log(pass_friend_num);
}

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));
