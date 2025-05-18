"use strict"

function main(input) {
  input = input.split(/\n/)
  let S = input[0].split("")
  const T = input[1].split("")
  const us = "UNRESTORABLE"
  // if (S.length < T.length) {
  //   console.log(us)
  //   return
  // } else {
  for (let i = S.length - T.length; i >= 0; i--) {
    //
    let x = 0
    for (let j = 0; j < T.length; j++) {
      //Tの区間の中で合致するかどうか
      if (S[i + j] == T[j] || S[i + j] == "?") {
        //この文字は合致、または?だからパス
      } else {
        //合致しない＞この区間は合致しない
        x++
        continue
      }
      //
    }
    //合致しなかったら次のforへ、合致したら次のステップへ
    if (x > 0) continue

    //Tで埋める
    for (let k = 0; k < T.length; k++) {
      S[i + k] = T[k]
    }
    //残りの?をaに変換 <todo> : 正規表現などで
    // S = S.replace(/(.+)/, "a")
    for (let i = 0; i < S.length; i++) {
      S[i] = S[i] == "?" ? "a" : S[i]
    }
    console.log((S = S.join("")))
    return
  }
  // }
  //
  console.log(us)
  //
}
main(require("fs").readFileSync("/dev/stdin", "utf8"))