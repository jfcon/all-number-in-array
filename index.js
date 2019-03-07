function sumItems(array) {
  let total = 0;
  array.forEach(function(item) {
    if (Array.isArray(item)) {
      total += sumItems(item);
    } else {
      total += item;
    }
  });
  return total;
}
module.exports = sumItems;
