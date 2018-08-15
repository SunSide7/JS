let menu = document.querySelector('.menu');
let item = document.querySelectorAll('.menu-item');
let column = document.querySelectorAll(".column")[1];
let title = document.querySelector(".title");
let adv = document.querySelector(".adv");

let newLi = document.createElement("li");



menu.insertBefore(item[1], item[3]);
menu.appendChild(newLi);
newLi.textContent = "Пятый пункт";
newLi.classList.add("menu-item");

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = "Мы продаем только подлинную технику Apple"

column.removeChild(adv);

let question = prompt("А как вы относитесь к технике Apple?");
