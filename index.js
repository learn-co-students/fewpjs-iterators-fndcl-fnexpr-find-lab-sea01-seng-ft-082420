const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let w = array.find(s => s.result === "W")
  if (w !== undefined){
    return w["year"]
  } else {
    return undefined
  }
}