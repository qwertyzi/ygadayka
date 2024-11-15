console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
let secretNum = Math.floor(Math.random() * 10) + 1 
let attempt = 3
console.log(secretNumgit)

while (attempt > 0) {
    let num = Number(prompt("Введите число:"));
    if (num < secretNum) {
        console.log("Секретное число больше")
        attempt--
    } else if (num === secretNum) {
        console.log("Вы угадали!!!!")
        break
    } else {
        console.log("The secret of monkey island")
        attempt--
    }
}
