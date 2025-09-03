let matriz2D = [
  [7, 2, 3],
  [4, 5, 6],
  [1, 8, 9]
];
let diag_prin=0;
let diag_inv=0;

for (let i = 0; i < matriz2D.length; i++) {
  diag_prin+=matriz2D[i][i]
  diag_inv+=matriz2D[i][matriz2D.length-(i+1)]  
}

console.log(diag_prin)
console.log(diag_inv)