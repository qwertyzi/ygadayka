console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
let num = Number(prompt("Введите число:"));
let secretNum = 8
if (num < secretNum) {
    console.log("Секретное число больше")
} else if (num === secretNum) {
    console.log("Вы угадали!!!!")
} else {
    console.log("The secret of monkey island")

}