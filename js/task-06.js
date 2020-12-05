let input;
const numbers = [];
let total = 0; 

while(true) {

    input = prompt('ввидите цифру');

    if(Number.isNaN(+input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(+input);

    if(input === null) {

        for(let i = 0; i < numbers.length; i += 1) {
            total = total + numbers[i];
        }
        console.log(`Общая сумма чисел равна ${total}`);
        break;
    }
}

// ************************************************************************

// while (input !== null) {

//     input = prompt('ввидите цифру');

//     if (Number.isNaN(Number(input))) {
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//     } 

//     if (input === null) {

//         for(const number of numbers) {
//             total = total + number;
//             }
//         console.log(`Общая сумма чисел равна ${total}`);
//         continue;
//     } 

//     numbers.push(Number(input));
//     console.log(numbers);

// }