const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
function generateID() {
  const arrOfNumbers = [];
  function generateNumber() {
    const randomNum = getRandomNumber();
    if (arrOfNumbers.length === 100) return arrOfNumbers;
    if (arrOfNumbers.includes(randomNum)) {
      return generateNumber();
    }
    arrOfNumbers.push(randomNum);
    return arrOfNumbers;
  }
  return generateNumber;
}
const idGenerator = generateID();
let foo;
for (let i = 0; i <= 100; i++) {
  foo = idGenerator();
}
console.log(foo);
