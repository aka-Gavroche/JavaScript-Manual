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