const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recordArray){
  let win = recordArray.find(result => result.result === "W");
   return !!win ? win.year : win;
}