let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNum = 0;

for (let i = 0; i < numbers.length; i += 1) {
 if (numbers[i] % 2 != 0) {
  oddNum += 1;
 }
}
console.log ("Quantidade numeros impares: " + oddNum);