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

// let login = prompt ("Введіть логін:", "");
// let message;

// message = (login == "Співробітник") ? "Привіт!" :
//     (login == "Директор") ? "Доброго дня!" :
//     (login == "") ? "Логіну немає." : "";

// alert (message);