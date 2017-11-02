function countMaxToys(prices, money) {
  var length = prices.length,
    purchasedItems = [],
    i = 0;
  prices.sort(sortNumber);
  while(money > 0) {
    if(money > prices[i]) {
      purchasedItems.push(prices[i]);
      money -= prices[i];
      i++;
    } else {
      break;
    }
  }
  return purchasedItems.length;
}

function sortNumber(a,b) {
    return a - b;
}

function testCountMaxToys(prices, money, expectedResult) {
  var result = countMaxToys(prices, money);
  console.log("Produced result is", result, ". Test case has", result === expectedResult ? "passed": "failed.");
}

testCountMaxToys([1, 12, 5, 111, 200, 1000, 10], 50, 4);
