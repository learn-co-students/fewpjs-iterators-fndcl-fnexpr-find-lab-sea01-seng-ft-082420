const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let result = record.find(record => record.result === "W")
  return !!result ? result.year : undefined
}
// const result = W

// function superbowlWin(arr){
//   arr.result === "W";
//   return year
// }
// arr.find(superbowlWin){
//   return year
// }
// record.find(superbowlWin(result){
//   return year; result === "W";
  
// })