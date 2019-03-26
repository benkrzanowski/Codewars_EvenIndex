function findEvenIndex(arr) {
  let index = -1;
  let leftArrSum = 0;
  let rightArrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftArrSum = arr.slice(0, i).reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    rightArrSum = arr.slice(i + 1).reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    if (leftArrSum === rightArrSum) {
      index = i;
    }
  }
  return index;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
findEvenIndex([20, 10, -80, 10, 10, 15, 35]);
findEvenIndex([2824, 1774, -1490, -9084, -9696, 23094]);
