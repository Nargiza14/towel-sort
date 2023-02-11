module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix == 0){
    return [];
  };
  for (i=0; i < matrix.length; i++) {
    if(i % 2) {
      matrix[i].reverse();
    }
  }
  return matrix.join().split(',').map(Number);
}