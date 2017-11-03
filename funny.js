function isFunny(str) {
  var funny = true,
    diffForward,
    diffBackward,
    strLength = str.length;
  for(var i=0; i<strLength-1; i++) {
    diffForward = Math.abs(str.charCodeAt(i) - str.charCodeAt(i+1));
    diffBackward = Math.abs(str.charCodeAt(strLength-1-i) - str.charCodeAt(strLength-i-2));
    if (diffForward !== diffBackward) return 'Not Funny';
  }
  return 'Funny';
}

function testFunny(str, expectedResult) {
  var result = isFunny(str);
  console.log("Produced result is", result, ". Test case has", result === expectedResult ? "passed": "failed.");
}

testFunny('acxz', 'Funny');
testFunny('bcxz', 'Not Funny')
