var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  const maxCandie = Math.max(...candies);
  for (let candie of candies) {
    if (candie + extraCandies >= maxCandie) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
