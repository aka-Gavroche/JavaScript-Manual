//Перше посилання
const suptitleItem1 = document.querySelector ('#suptitleItem1');
const block1 = document.querySelector ('.block1');

suptitleItem1.addEventListener ('click', getScroll1); 

function getScroll1() {
    block1.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//Друге посилання
const suptitleItem2 = document.querySelector ('#suptitleItem2');
const block2 = document.querySelector ('.block2');

suptitleItem2.addEventListener ('click', getScroll2); 

function getScroll2() {
    block2.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//третє посилання
const suptitleItem3 = document.querySelector ('#suptitleItem3');
const block3 = document.querySelector ('.block3');

suptitleItem3.addEventListener ('click', getScroll3); 

function getScroll3() {
    block3.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//четверте посилання
const suptitleItem4 = document.querySelector ('#suptitleItem4');
const block4 = document.querySelector ('.block4');

suptitleItem4.addEventListener ('click', getScroll4); 

function getScroll4() {
    block4.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//п'яте посилання
const suptitleItem5 = document.querySelector ('#suptitleItem5');
const block5 = document.querySelector ('.block5');

suptitleItem5.addEventListener ('click', getScroll5); 

function getScroll5() {
    block5.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//п'яте посилання
const suptitleItem6 = document.querySelector ('#suptitleItem6');
const block6 = document.querySelector ('.block6');

suptitleItem6.addEventListener ('click', getScroll6); 

function getScroll6() {
    block6.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//--------------------ЗАДАЧІ--------------------//

//----------------------------------------//
// let i = 1;
// while (i <= 5) {
//     console.log (i);
//     i++;
// }

//----------------------------------------//
// let i = 1;
// do {
//     console.log (i);
//     i++;
// } while (i <= 5);

//----------------------------------------//
// let num = 8;
// while (num) {
//     console.log (num);
//     num--;
// }

//----------------------------------------//
// let num = 0;
// while (num < 3) {
//     console.log(`Число ${num}`);
//     num++;
// }

//----------------------------------------//
// label: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size <3; size++){
//         if (size == 1) break label;
//         console.log(size);
//     }
// }

//----------------------------------------//
// for (; ;) {
//     var number = prompt ("Введіть число більше 100", "");
//     if (number > 100 || number == null) break;
// }
//
// if (number == null) {
//     alert (`Відміна.`);
// }
//
// if (number > 100) {
//     alert (`Так, ${number} більше 100.`);
// }

//----------------------------------------//
// let n = +prompt ("Введіть максимальне значення межі: ", "");

// label: for (let i = 2; i <= n; i++) {

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue label;
//     }

//     console.log (i);
// }

//--------------------ЗАДАЧІ по SWITCH/CASE--------------------//

//----------------------------------------//
// let browser = prompt ("Введіть назву браузера: ", "");
//
// if (browser === "Edge") {
//     alert (`Отже, Ви використовуєте браузер: ${browser}`);
// } else if ( browser === "Chrome" || 
//             browser === "Firefox" || 
//             browser === "Safari" || 
//             browser === "Opera") {
//     alert (`Добре, ми також підтримуємо браузер: ${browser}`);
// } else {
//     alert ("Ми сподіваємось, що сторінка відображається добре!");
// }

//----------------------------------------//
// const number = +prompt ("Введіть число в межах від 0 до 3: ", "");
//
// switch (number) {
//     case 0: 
//         alert ("Ви ввели число 0!");
//         break;
//
//     case 1:
//         alert ("Ви ввели число 1!");
//         break;
//
//     case 2:
//     case 3:
//         alert ("Ви ввели число 2, а може і 3!");
//         break;
// }