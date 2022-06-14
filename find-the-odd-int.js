function findOdd(A) {
  for(i = 0; i < A.length; i++) {
    let results = A.filter(x => (A[i] == x));
    if(results.length % 2 !== 0) return results[0];
    console.log(results);
  }
}
